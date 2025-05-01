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
        <h2>Software and Technologies</h2>
        <div id="softwares">
          {skills.map((item) => (
            <img key={item.id} src={item.imageUrl} alt={item.name} title={item.name} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
