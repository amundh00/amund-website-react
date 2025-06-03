import { useEffect, useState } from "react";
import "../styles/About.css";
import { fetchAndCacheAllData, getCachedData } from "../api/fetchAllData";

function About() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const cached = getCachedData();
    if (cached && cached.kompetanse) {
      setSkills(cached.kompetanse);
    } else {
      fetchAndCacheAllData().then((data) => {
        setSkills(data.kompetanse || []);
      });
    }
  }, []);

  return (
    <main>
      <section id="about-softwares">
        <h2>Coming soon!</h2>
      </section>
    </main>
  );
}

export default About;
