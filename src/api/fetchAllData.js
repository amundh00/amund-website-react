import { db } from "../firebase";
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";

const LOCAL_STORAGE_KEY = "cachedAppData";

export async function fetchAndCacheAllData() {
  const workRef = collection(db, "work");
  const kompetanseRef = collection(db, "kompetanse");

  const [workSnap, kompetanseSnap] = await Promise.all([
    getDocs(query(workRef, orderBy("startDate", "desc"))),
    getDocs(query(kompetanseRef, orderBy("order", "asc"))),
  ]);

  const work = workSnap.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      startDate: {
        seconds: data.startDate?.seconds,
        nanoseconds: data.startDate?.nanoseconds,
      },
      endDate: data.endDate
        ? {
            seconds: data.endDate.seconds,
            nanoseconds: data.endDate.nanoseconds,
          }
        : null,
    };
  });

  const kompetanse = kompetanseSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  const allData = { work, kompetanse };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));
  return allData;
}

export function getCachedData() {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!raw) return null;

  const parsed = JSON.parse(raw);

  // Rehydrate timestamps into Firebase Timestamp objects
  const work = parsed.work.map(item => ({
    ...item,
    startDate: new Timestamp(item.startDate.seconds, item.startDate.nanoseconds),
    endDate: item.endDate
      ? new Timestamp(item.endDate.seconds, item.endDate.nanoseconds)
      : null,
  }));

  return {
    work,
    kompetanse: parsed.kompetanse,
  };
}
