import "../styles/coding.css";

function Coding() {
  return (
    <main className="coding-main">
      <div className="coding-header">
        <h2>Programmering</h2>
        <p>
          I 2023 startet jeg på Front-End development på Noroff Fagskole i Bergen.
          Her har jeg lært meg mye fra HTML, CSS og driver nå med JavaScript.
          Her er noen av mine siste prosjekter.
        </p>
      </div>

      <hr />

      <section className="coding-section">
        <h2>Min Github</h2>
        <a 
          href="https://github.com/amundh00" 
          target="_blank" 
          rel="noopener noreferrer"
          className="coding-link"
        >
          Github
        </a>
        
        <h3>Nordcode studentbedrift</h3>
        <p>
          Nordcode SB er en studentbedrift som leverer
          hjemmesider til små, melloms og store bedrifter over hele landet.
          Nordcode Sb startet opp i Januar 2024 og har hitill hatt kunder som 
          lokale barer, produksjonselskap og Landsforeninger. 
          
          Fremmover så gleder vi oss til å se hvilke andre oppdrag vi kan få. 
        </p>
        <a 
          href="https://nordcode.no" 
          target="_blank" 
          rel="noopener noreferrer"
          className="coding-link"
        >
          Nordcode SB
        </a>
      </section>

      <hr />

      <section className="coding-section">
        <h2>Vekter tentamen test</h2>
        <div className="coding-thumbnails">
          <img 
            src="/assets/images/coding-thumbnails/vekter page.png" 
            alt="Vekter tentamen test screenshot"
          />
        </div>
        <p>
          Jeg har laget en nettside for en vekter tentamen test.
          Her får man 80 spørsmål med tidsbegrensing på 4 timer, slik som vekter tentamen.
          Man er innom de forskjellige temaene man får på en slik tentamen. 
          Gjerne test den ut!
        </p>
        <a 
          href="https://amundhalgunset.no/vekterTest/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="coding-link"
        >
          Ta Testen!
        </a>
      </section>

      <hr />

      <section className="coding-section">
        <h2>Rævedilter Bar Hjemmeside</h2>
        <div className="coding-thumbnails">
          <img 
            src="/assets/images/coding-thumbnails/raevedilter.webp" 
            alt="Rævedilter Bar website screenshot"
          />
        </div>
        <p>
          Til hjemmesiden til Rævedilter Bar har jeg og min studentbedrift
          fokusert på å prøve å lage en hjemmeside som reflekterer og viser 
          eventuelle nye gjester eller gjentagende gjester atmosfæren baren gir. 
        </p>
        <div className="coding-links">
          <a 
            href="https://github.com/HermanJasser/ravedilter-agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="coding-link"
          >
            Rævedilter Github
          </a>
          <a 
            href="https://raevedilter.no" 
            target="_blank" 
            rel="noopener noreferrer"
            className="coding-link"
          >
            Rævedilter Hjemmeside
          </a>
        </div>
      </section>

      <hr />

      <section className="coding-section">
        <h2>Fotspor Film</h2>
        <div className="coding-thumbnails">
          <img 
            src="/assets/images/coding-thumbnails/fotspor film.PNG" 
            alt="Fotspor Film website screenshot"
          />
        </div>
        <p>
          Fotspor Film er en bedrift som holder til i Bergen.
          De har laget serier som Øya, Tid for gammle hjem og Drømmen om et småbruk.
        </p>
        <a 
          href="https://fotsporfilm.no/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="coding-link"
        >
          Fotspor Film Hjemmeside
        </a>
      </section>

      <hr />

      <section className="coding-section">
        <h2>Rainy Days</h2>
        <div className="coding-thumbnails">
          <img 
            src="/assets/images/coding-thumbnails/rainy days.webp" 
            alt="Rainy Days website screenshot"
          />
        </div>
        <p>
          Rainy Days er første nettsiden jeg har programmert selv. 
          Det skal være ett konsept til en Online-klesbutikk.
        </p>
        <div className="coding-links">
          <a 
            href="https://github.com/amundh00/RainyDays" 
            target="_blank" 
            rel="noopener noreferrer"
            className="coding-link"
          >
            Rainy Days Github
          </a>
          <a 
            href="https://steady-nasturtium-d1f235.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="coding-link"
          >
            Rainy Days Hjemmeside
          </a>
        </div>
      </section>
    </main>
  );
}

export default Coding;