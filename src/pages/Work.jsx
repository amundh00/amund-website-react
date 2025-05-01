import { useEffect, useState } from "react";
import "../styles/Work.css";
import { animateTimeline } from "../animations/timelineAnimations";
import { fetchAndCacheAllData, getCachedData } from "../api/fetchAllData";

function Work() {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    const cached = getCachedData();
    if (cached && cached.work) {
      setWorkData(cached.work);
      setTimeout(() => animateTimeline(), 100);
    } else {
      fetchAndCacheAllData().then((data) => {
        setWorkData(data.work);
        setTimeout(() => animateTimeline(), 100);
      });
    }
  }, []);

  return (
    <main>
      <section className="timeline">
        <div className="timeline-line"></div>
        {workData.map((job) => (
          <div className="timeline-item" key={job.id}>
            <div className="marker"></div>
            <div className="content">
              <h3>
                {formatDate(job.startDate)} –{" "}
                {job.myCurrentJob ? "Present" : formatDate(job.endDate)}
              </h3>
              <p>
                {job.stilling} – {job.selskap}
                <br />
                {job.location}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function formatDate(date) {
  if (!date) return "";

  // If it's a Firestore Timestamp, convert to Date
  if (typeof date.toDate === "function") {
    return date.toDate().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
    });
  }

  // If it's a plain object or string (from localStorage), convert to Date
  const d = new Date(date);
  if (isNaN(d)) return "";
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}


export default Work;
