"use client";

import { useEffect, useState } from "react";

const reasons = [
  { number: "01", title: "Your heart", text: "The way you care so deeply makes the whole world feel softer." },
  { number: "02", title: "Your laugh", text: "My favorite sound — especially when I am the reason behind it." },
  { number: "03", title: "Your magic", text: "You turn ordinary days into memories I never want to lose." },
  { number: "04", title: "Simply you", text: "Every little thing that makes you you is something I choose, always." },
];

const moments = [
  { label: "The beginning", text: "The day my life became brighter without me even realizing it." },
  { label: "Every little moment", text: "The late talks, the silly jokes, the comfortable silences — all of it." },
  { label: "Right now", text: "Celebrating the most beautiful soul and another year of her magic." },
  { label: "What comes next", text: "More adventures, more laughter, and a thousand moments still waiting for us." },
];

const confetti = Array.from({ length: 36 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 0.09}s`,
  rotate: `${(index * 47) % 180}deg`,
  color: ["#f1b6bd", "#d56a79", "#f8d9b8", "#fff7ec"][index % 4],
}));

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLetterOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const begin = () => {
    setRevealed(true);
    window.setTimeout(() => document.querySelector("#birthday")?.scrollIntoView({ behavior: "smooth" }), 850);
  };

  return (
    <main className={`site-shell ${revealed ? "is-revealed" : ""}`}>
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="opening" aria-label="Open your birthday surprise">
        <div className="opening-stars" aria-hidden="true">✦　·　✧　·　✦</div>
        <p className="eyebrow">A tiny universe, made with love</p>
        <div className="opening-title" aria-label="For the one who makes everything brighter">
          <span>For the one who makes</span>
          <em>everything brighter.</em>
        </div>
        <button className="open-button" type="button" onClick={begin}>
          <span className="open-button-heart" aria-hidden="true">♥</span>
          <span>Open your surprise</span>
        </button>
        <p className="opening-note">Made only for you · with all my heart</p>
      </section>

      <div className="confetti" aria-hidden="true">
        {confetti.map((piece, index) => (
          <i key={index} style={{ left: piece.left, animationDelay: piece.delay, rotate: piece.rotate, background: piece.color }} />
        ))}
      </div>

      <div className="story" id="birthday">
        <header className="hero section-pad">
          <nav className="mini-nav" aria-label="Birthday page sections">
            <span className="monogram">M ♡ Y</span>
            <span className="nav-date">Your special day · forever</span>
          </nav>
          <div className="hero-copy">
            <p className="eyebrow">Today, the universe celebrates you</p>
            <h1>
              Happy Birthday,
              <em>my love.</em>
            </h1>
            <p className="hero-message">
              If I could gift you one thing, it would be the chance to see yourself through my eyes —
              wonderful, rare, and endlessly loved.
            </p>
          </div>
          <div className="orbit-mark" aria-hidden="true">
            <span>✦</span>
            <p>MY FAVORITE PERSON · MY FAVORITE PERSON ·</p>
          </div>
          <a className="scroll-cue" href="#reasons" aria-label="Scroll to your birthday story">
            <span>Discover your story</span><i aria-hidden="true" />
          </a>
        </header>

        <section className="reasons section-pad" id="reasons">
          <div className="section-heading">
            <p className="eyebrow">A few of a million reasons</p>
            <h2>Why my world is<br /><em>better with you.</em></h2>
          </div>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article className="reason-card" key={reason.number} tabIndex={0}>
                <span>{reason.number}</span>
                <div className="card-flower" aria-hidden="true">✽</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="memory-section section-pad">
          <div className="film-strip" aria-label="Our memories">
            <div className="film-frame frame-one"><span>our favorite kind of chaos</span></div>
            <div className="film-frame frame-two"><span>wherever we are, together</span></div>
            <div className="film-frame frame-three"><span>the moments between moments</span></div>
          </div>
          <div className="memory-copy">
            <p className="eyebrow">Us, in every lifetime</p>
            <blockquote>“I would find you in every version of this world.”</blockquote>
            <p>Here is to the photographs we have taken, the ones still waiting for us, and the beautiful life happening between them.</p>
          </div>
        </section>

        <section className="timeline section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">Our little infinity</p>
            <h2>Some things are<br /><em>written in the stars.</em></h2>
          </div>
          <div className="timeline-line" aria-hidden="true" />
          <div className="timeline-list">
            {moments.map((moment, index) => (
              <article key={moment.label}>
                <span className="moment-dot">{index + 1}</span>
                <p className="eyebrow">Chapter {String(index + 1).padStart(2, "0")}</p>
                <h3>{moment.label}</h3>
                <p>{moment.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="finale section-pad">
          <div className="constellation" aria-hidden="true">✦　　·　✧<br />　·　　✦　　·<br />✧　　·　　✦</div>
          <p className="eyebrow">One last thing</p>
          <h2>I saved my favorite<br /><em>words for last.</em></h2>
          <button className="letter-button" type="button" onClick={() => setLetterOpen(true)}>
            <span className="wax-seal" aria-hidden="true">♥</span>
            <span>Read your letter</span>
          </button>
          <p className="signature">Forever yours <span>♡</span></p>
        </section>
      </div>

      {letterOpen && (
        <div className="letter-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setLetterOpen(false);
        }}>
          <article className="love-letter" role="dialog" aria-modal="true" aria-labelledby="letter-title">
            <button className="close-letter" type="button" onClick={() => setLetterOpen(false)} aria-label="Close love letter">×</button>
            <p className="eyebrow">For my favorite person</p>
            <h2 id="letter-title">My love,</h2>
            <p>Today is about celebrating you — your beautiful heart, your fearless dreams, and the light you bring into every room you enter.</p>
            <p>Thank you for being my peace and my adventure, my safest place and my favorite surprise. Loving you is the easiest, most beautiful thing I have ever done.</p>
            <p>I hope this year brings you everything you quietly wish for. And through every new chapter, I hope you know you will never have to walk alone.</p>
            <p className="letter-signoff">Happy birthday, beautiful.<br /><em>With all of me, always.</em></p>
          </article>
        </div>
      )}
    </main>
  );
}
