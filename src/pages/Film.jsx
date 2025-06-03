import React from 'react';
import '../styles/film.css';

function Film() {
    return (
        <main id="film-main">
            <section className="film-videos">
                <h2>Mitt Film biblotek</h2>
                <p>
                    Her en en samling av småfilmer jeg har laget over tid.
                    Alt fra videoer for filmfestivaler til bilfilmer i Trondheim og omegn.
                    Mere info om hver video står på beskrivelsen på youtube 
                </p>

                {[
                    "emC3Oe24coc?si=PNexRZ-GATYbFwXj",
                    "QWHVJpkVpQU?si=Kl0X7Ddi63w-yQmx", 
                    "hxxyWYlYEAc?si=qyTZV3mAXvmiSlTo",
                    "6qlw2Zw-Nyk?si=kNYq-jLD5Vi_LbB2",
                    "GfRRu8-rsXk?si=IDFSQsxHctAX3qKj",
                    "ldDXwb7XouQ?si=IRkswoz8Tp5JukZg",
                    "56aqHUg4SOs?si=alJvmm09_IVwFXGT",
                    "sgOgXSVwhRo?si=-UsPcZy4I9zglHLc"
                ].map((id, i) => (
                    <div className="responsive-video" key={i}>
                        <iframe
                            src={`https://www.youtube.com/embed/${id}`}
                            title={`Film video ${i + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </section>

            <section className="film-info">
                <h2>Om Mine Filmer</h2>
                <p>
                    Disse filmene representerer en reise gjennom forskjellige prosjekter og teknikker. 
                    Fra dokumentarer til kreative kortfilmer, hver video forteller sin egen historie.
                </p>
                
                <div className="film-details">
                    <div>
                        <div>
                            <h3>Filmfestival Bidrag</h3>
                            <p>
                                Noen av disse filmene er laget for filmfestivaler,
                                hvor jeg har utforsket ulike temaer og stilarter.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>Bilfilmer & Dokumentarer</h3>
                            <p>
                                Kommersielle prosjekter og dokumentarer som viser bil-kulturen 
                                i Trondheim og omegn med fokus på lokal identitet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="equipment">
                <h2>Utstyr & Teknikk</h2>
                <p>
                    Filmene er laget med profesjonelt utstyr og redigeringsprogrammer 
                    som Adobe Premiere Pro, DaVinci Resolve og After Effects.
                </p>
            </section>
        </main>
    );
}

export default Film;