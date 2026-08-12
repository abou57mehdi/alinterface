"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const reasons = [
  { number: "01", title: "Your presence", text: "There is something about your energy that makes every place feel brighter." },
  { number: "02", title: "Your laugh", text: "My favorite sound — especially when I am the reason behind it." },
  { number: "03", title: "Your magic", text: "You turn ordinary days into memories I never want to lose." },
  { number: "04", title: "Simply you", text: "Confident, kind, a little unpredictable — and completely unforgettable." },
];

const moments = [
  { label: "The beginning", text: "The moment I realized there was something genuinely special about you." },
  { label: "Every little moment", text: "The conversations, the jokes, and the easy moments that never feel ordinary." },
  { label: "Right now", text: "Celebrating the most beautiful soul and another year of her magic." },
  { label: "What comes next", text: "More good conversations, more laughter, and whatever fun the next chapter brings." },
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
        <p className="eyebrow">A tiny universe, made for Allaa</p>
        <div className="opening-title" aria-label="For the one who makes everything brighter">
          <span>For the one who makes</span>
          <em>everything brighter.</em>
        </div>
        <button className="open-button" type="button" onClick={begin}>
          <span className="open-button-heart" aria-hidden="true">♥</span>
          <span>Open your surprise</span>
        </button>
        <p className="opening-note">One page · one beautiful birthday girl</p>
      </section>

      <div className="confetti" aria-hidden="true">
        {confetti.map((piece, index) => (
          <i key={index} style={{ left: piece.left, animationDelay: piece.delay, rotate: piece.rotate, background: piece.color }} />
        ))}
      </div>

      <div className="story" id="birthday">
        <header className="hero section-pad">
          <nav className="mini-nav" aria-label="Birthday page sections">
            <span className="monogram">A ✦ 21</span>
            <span className="nav-date">Allaa&apos;s day · her moment</span>
          </nav>
          <div className="hero-copy">
            <p className="eyebrow">Today, the universe celebrates you</p>
            <h1>
              Happy Birthday,
              <em>Allaa.</em>
            </h1>
            <p className="hero-message">
              If I could gift you one thing today, it would be the chance to see yourself through my eyes —
              bright, magnetic, and genuinely one of a kind.
            </p>
          </div>
          <div className="orbit-mark" aria-hidden="true">
            <span className="orbit-photo"><Image src="/allaa-birthday.jpeg" alt="" fill sizes="144px" priority /></span>
            <p>THE BIRTHDAY GIRL · THE BIRTHDAY GIRL ·</p>
          </div>
          <a className="scroll-cue" href="#reasons" aria-label="Scroll to your birthday story">
            <span>Discover your story</span><i aria-hidden="true" />
          </a>
        </header>

        <section className="reasons section-pad" id="reasons">
          <div className="section-heading">
            <p className="eyebrow">A few of a million reasons</p>
            <h2>Why you are<br /><em>impossible to forget.</em></h2>
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
            <div className="film-frame frame-two frame-feature">
              <Image className="allaa-photo" src="/allaa-birthday.jpeg" alt="Allaa smiling with her birthday cake and balloons" fill sizes="(max-width: 580px) 68vw, 430px" />
              <span>Allaa, in her element ✦</span>
            </div>
            <div className="film-frame frame-three"><span>the moments between moments</span></div>
          </div>
          <div className="memory-copy">
            <p className="eyebrow">Main-character energy</p>
            <blockquote>“Some people simply make the moment better.”</blockquote>
            <p>This photograph deserved more than a place in a gallery. It deserved its own scene — just like the girl in it.</p>
          </div>
        </section>

        <section className="timeline section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">A story worth watching</p>
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
          <p className="signature">Enjoy your day, princess <span>✦</span></p>
        </section>
      </div>

      {letterOpen && (
        <div className="letter-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setLetterOpen(false);
        }}>
          <article className="birthday-note" role="dialog" aria-modal="true" aria-labelledby="letter-title">
            <button className="close-letter" type="button" onClick={() => setLetterOpen(false)} aria-label="Close birthday note">×</button>
            <p className="eyebrow">Especially for Allaa</p>
            <h2 id="letter-title">Beautiful girl,</h2>
            <p>Today is about celebrating you — your confidence, your ambitions, and that unmistakable energy you bring wherever you go.</p>
            <p>I am genuinely glad I get to know you. You have a way of making conversations better, moments lighter, and ordinary days far more interesting.</p>
            <p>I hope 21 brings you the opportunities you deserve, the peace you need, and enough unexpected happiness to keep that smile exactly where it belongs.</p>
            <p className="letter-signoff">Happy birthday, Allaa.<br /><em>Stay exactly this remarkable.</em></p>
          </article>
        </div>
      )}
    </main>
  );
}
