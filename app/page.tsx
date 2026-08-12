"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const reasons = [
  { number: "01", title: "Your presence", text: "You walk into a place, and somehow it feels lighter." },
  { number: "02", title: "Your laugh", text: "Still my favorite sound, especially when I caused it." },
  { number: "03", title: "Your way", text: "You make ordinary moments worth remembering." },
  { number: "04", title: "Simply you", text: "Kind, confident, a little unpredictable. Completely Alaâ." },
];

const moments = [
  { label: "The first impression", text: "I noticed there was something different about you." },
  { label: "The conversations", text: "The jokes, the easy moments, and the talks that never feel ordinary." },
  { label: "Your birthday", text: "A good reason to put the spotlight exactly where it belongs." },
  { label: "Whatever comes next", text: "More good conversations, more laughter, and no need to rush the story." },
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
        <p className="eyebrow">A birthday page for Alaâ</p>
        <div className="opening-title" aria-label="For the one who makes everything brighter">
          <span>For the one who makes</span>
          <em>everything brighter.</em>
        </div>
        <button className="open-button" type="button" onClick={begin}>
          <span className="open-button-heart" aria-hidden="true">♥</span>
          <span>Open your surprise</span>
        </button>
        <p className="opening-note">One page · made especially for you</p>
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
            <span className="nav-date">Alaâ&apos;s day · her moment</span>
          </nav>
          <div className="hero-copy">
            <p className="eyebrow">Today is yours</p>
            <h1>
              Happy Birthday,
              <em>Alaâ.</em>
            </h1>
            <p className="hero-message">
              If I could give you one thing today, it would be the chance to see what I see:
              someone bright, magnetic, and impossible to mistake for anyone else.
            </p>
          </div>
          <div className="orbit-mark" aria-hidden="true">
            <span className="orbit-photo"><Image src="/alaa-birthday.jpeg" alt="" fill sizes="144px" priority /></span>
            <p>THE BIRTHDAY GIRL · THE BIRTHDAY GIRL ·</p>
          </div>
          <a className="scroll-cue" href="#reasons" aria-label="Scroll to your birthday story">
            <span>Discover your story</span><i aria-hidden="true" />
          </a>
        </header>

        <section className="reasons section-pad" id="reasons">
          <div className="section-heading">
            <p className="eyebrow">A few things I notice</p>
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
          <div className="film-strip" aria-label="Birthday memories">
            <div className="film-frame frame-one"><span>the good kind of chaos</span></div>
            <div className="film-frame frame-two frame-feature">
              <Image className="alaa-photo" src="/alaa-birthday.jpeg" alt="Alaâ smiling with her birthday cake and balloons" fill sizes="(max-width: 580px) 68vw, 430px" />
              <span>Alaâ, in her element ✦</span>
            </div>
            <div className="film-frame frame-three"><span>a moment worth keeping</span></div>
          </div>
          <div className="memory-copy">
            <p className="eyebrow">This photo had to be here</p>
            <blockquote>“Some people simply make the moment better.”</blockquote>
            <p>This photo was too good to leave in a gallery. It deserved the spotlight, just like you.</p>
          </div>
        </section>

        <section className="poetry-section section-pad" lang="ar" dir="rtl" aria-labelledby="poetry-title">
          <div className="poetry-ornament" aria-hidden="true">آ</div>
          <p className="poetry-kicker">لأنَّ اسمَكِ قصيدةٌ بحدِّ ذاته</p>
          <h2 id="poetry-title">إلى آلاء</h2>
          <div className="arabic-poem">
            <p>آلاءُ... آلافُ ابتهاجاتٍ وفرحْ</p>
            <p>على رغدٍ... على نِعَمٍ... آلاءُ</p>
            <p>آلاءُ أتتْ، فعزفتْ على وترِ الغمائمِ أعذبَ النغمْ</p>
            <p>آلاءُ... آلامٌ تزولُ إذا ناديتُكِ، جاوبتِ بالنِّعَمِ</p>
            <p>آلاءُ... آلاءُ الإلهِ لنا، اسمٌ نداهُ بخافقي وفمي</p>
          </div>
          <p className="name-meaning">اسمٌ يعني النِّعَم، وحضورٌ يشبهها.</p>
        </section>

        <section className="timeline section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">How we got here</p>
            <h2>A few chapters,<br /><em>so far.</em></h2>
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
          <p className="signature">Enjoy your day, birthday girl <span>✦</span></p>
        </section>
      </div>

      {letterOpen && (
        <div className="letter-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setLetterOpen(false);
        }}>
          <article className="birthday-note" role="dialog" aria-modal="true" aria-labelledby="letter-title">
            <button className="close-letter" type="button" onClick={() => setLetterOpen(false)} aria-label="Close birthday note">×</button>
            <p className="eyebrow">Especially for Alaâ</p>
            <h2 id="letter-title">Alaâ,</h2>
            <p>As the eldest daughter, taking care of everyone else has become second nature to you. You look after your siblings, check that they are okay, and make sure they have someone they can count on.</p>
            <p>But you do not always have to be the strong one with me. Let me take care of you sometimes. I want to be someone you can lean on, someone who listens, and a safe place where you can breathe without carrying everything at once.</p>
            <p>I like listening when you talk about your father or tell me stories from your childhood. Those details matter to me. Every story lets me understand you a little better, and I will always treat that trust gently.</p>
            <p>You spend so much time being there for the people around you. Today, let someone be there for you too.</p>
            <p className="letter-signoff">Happy birthday, Alaâ.<br /><em>You deserve to feel cared for too.</em></p>
          </article>
        </div>
      )}
    </main>
  );
}
