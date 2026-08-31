"use client";

import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Frequently asked questions                                                 */
/* -------------------------------------------------------------------------- */

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need to know any of the language already?",
    a: "No. A1 stories start with a few hundred words, short sentences, and a translation on every tap. Most people begin on day one with no vocabulary at all.",
  },
  {
    q: "How do you decide a story's level?",
    a: "Every text is graded against CEFR A1–B2 on vocabulary frequency, sentence length, and tense range, then reviewed by a teacher who works in that language.",
  },
  {
    q: "Can I learn more than one language at a time?",
    a: "Yes. One account covers both languages, and each keeps its own level, library, and word collection so progress never gets mixed together.",
  },
  {
    q: "What's free, and what does a subscription add?",
    a: "Free accounts get a rotating set of stories at every level, tap-to-translate, and vocabulary review. A subscription unlocks the full library, all narration, and offline downloads.",
  },
  {
    q: "Is the narration a real voice?",
    a: "Every story is recorded by a native reader, and you can slow the audio down without it sounding distorted.",
  },
  {
    q: "How long does a reading session take?",
    a: "Chapters run five to ten minutes. The daily goal defaults to one chapter, and you can set it higher or lower at any time.",
  },
];

export function Faq() {
  // First question opens by default; clicking an open row closes it.
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="rtl-section rtl-faq"
      style={{
        padding: "96px 32px",
        background: "#eef0f3",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="rtl-split"
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
          gap: 72,
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2
            className="balance"
            style={{
              margin: 0,
              fontSize: "clamp(32px, 3.2vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.09,
              letterSpacing: "-1px",
              maxWidth: "16ch",
            }}
          >
            Frequently asked questions
          </h2>
          <p
            className="balance"
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.55,
              color: "#5b616e",
              maxWidth: "34ch",
            }}
          >
            Everything else about levels, languages, and what&rsquo;s free.
          </p>
          <a
            href="#contact"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#0052ff",
              marginTop: 4,
            }}
          >
            Ask us anything &rarr;
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div
                key={item.q}
                style={{
                  borderTop: "1px solid #c9ced6",
                  borderBottom:
                    i === FAQS.length - 1 ? "1px solid #c9ced6" : undefined,
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 24,
                    padding: "24px 0",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    color: "#0a0b0d",
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      position: "relative",
                      width: 18,
                      height: 18,
                      flex: "none",
                      marginTop: 3,
                      display: "block",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 0,
                        width: 18,
                        height: 2,
                        background: "#0a0b0d",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 0,
                        width: 18,
                        height: 2,
                        background: "#0a0b0d",
                        display: "block",
                        transition: "transform 240ms ease",
                        transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                      }}
                    />
                  </span>
                </button>
                <p
                  id={panelId}
                  className="balance"
                  style={{
                    margin: 0,
                    padding: "0 64px 24px 0",
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "#5b616e",
                    maxWidth: "62ch",
                    display: isOpen ? "block" : "none",
                  }}
                >
                  {item.a}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
