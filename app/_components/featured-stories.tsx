"use client";

import { useEffect, useState } from "react";

const MONO = "var(--font-jetbrains-mono), monospace";

const SLIDES = [
  {
    badge: "GERMAN · A2",
    title: "The Woman at the Well",
    body: "A village folktale in eight short chapters — the gentlest place to start reading German at A2.",
  },
  {
    badge: "GERMAN · B1",
    title: "The Wanderer",
    body: "A quiet road, a thin mist, and the vocabulary of weather and distance. Narrated at reading pace.",
  },
  {
    badge: "TURKISH · A2",
    title: "Keloğlan ve Değirmen",
    body: "A Turkish folk classic in ten chapters, with tap-to-translate on every word and native narration.",
  },
];

const COVER_SRC =
  "https://pub-0be523b1a38f46abbf534ad97d3402b2.r2.dev/covers/0a096746b4b5.png";

export function FeaturedStories() {
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % SLIDES.length),
      5200,
    );
    return () => window.clearInterval(id);
  }, [playing]);

  const go = (i: number) =>
    setSlide(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

  const circleBtn = {
    width: 44,
    height: 44,
    borderRadius: 9999,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  } as const;

  return (
    <section
      id="featured"
      className="rtl-section"
      style={{ padding: "96px 40px", background: "#0a0b0d", color: "#ffffff" }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transition: "transform 620ms cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(-${slide * 92}%)`,
            }}
          >
            {SLIDES.map((s) => (
              <div
                key={s.title}
                style={{
                  minWidth: "92%",
                  paddingRight: 20,
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="rtl-featured-card"
                  style={{
                    background: "#16181c",
                    borderRadius: 24,
                    padding: 40,
                    display: "grid",
                    gridTemplateColumns: "0.88fr 1.12fr",
                    gap: 56,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1 / 1",
                      borderRadius: 16,
                      background: "#16181c",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      padding: 20,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={COVER_SRC}
                      alt=""
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "invert(1) hue-rotate(180deg)",
                        mixBlendMode: "screen",
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        padding: "4px 12px",
                        borderRadius: 100,
                        background: "#0a0b0d",
                        fontFamily: MONO,
                        fontSize: 11,
                        fontWeight: 500,
                        color: "#ffffff",
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 20,
                      paddingRight: 16,
                    }}
                  >
                    <h3
                      className="balance"
                      style={{
                        margin: 0,
                        fontSize: "clamp(28px, 3vw, 44px)",
                        fontWeight: 400,
                        lineHeight: 1.09,
                        letterSpacing: "-1px",
                        color: "#ffffff",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="balance"
                      style={{
                        margin: 0,
                        fontSize: 18,
                        lineHeight: 1.55,
                        color: "#a8acb3",
                        maxWidth: "40ch",
                      }}
                    >
                      {s.body}
                    </p>
                    <a
                      href="#start"
                      className="btn-white"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        height: 56,
                        padding: "0 32px",
                        borderRadius: 100,
                        background: "#ffffff",
                        color: "#0a0b0d",
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      Start reading
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 13,
            lineHeight: 1.5,
            color: "#7c828a",
            textAlign: "center",
          }}
        >
          Sample chapters are free in every language. Levels are assigned by CEFR
          band, not by chapter length.
        </p>

        <div
          className="rtl-header-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            marginTop: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderRadius: 100,
                background: "#16181c",
              }}
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to story ${i + 1}`}
                  onClick={() => go(i)}
                  style={{
                    width: slide === i ? 28 : 8,
                    height: 8,
                    padding: 0,
                    border: 0,
                    borderRadius: 100,
                    background: slide === i ? "#ffffff" : "#5b616e",
                    cursor: "pointer",
                    transition: "width 300ms ease, background 300ms ease",
                    display: "block",
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label={playing ? "Pause autoplay" : "Play autoplay"}
              onClick={() => setPlaying((p) => !p)}
              className="ctrl-dark"
              style={{
                ...circleBtn,
                background: "#16181c",
                border: 0,
                color: "#ffffff",
                gap: 3,
              }}
            >
              {playing ? (
                <>
                  <span
                    style={{
                      width: 3,
                      height: 13,
                      borderRadius: 1,
                      background: "#ffffff",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      width: 3,
                      height: 13,
                      borderRadius: 1,
                      background: "#ffffff",
                      display: "block",
                    }}
                  />
                </>
              ) : (
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "9px solid #ffffff",
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                    marginLeft: 3,
                    display: "block",
                  }}
                />
              )}
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              type="button"
              aria-label="Previous story"
              onClick={() => go(slide - 1)}
              className="ctrl-outline"
              style={{
                ...circleBtn,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.28)",
                color: "#ffffff",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderLeft: "2px solid #ffffff",
                  borderBottom: "2px solid #ffffff",
                  transform: "rotate(45deg)",
                  display: "block",
                  marginLeft: -2,
                }}
              />
            </button>
            <button
              type="button"
              aria-label="Next story"
              onClick={() => go(slide + 1)}
              className="ctrl-outline"
              style={{
                ...circleBtn,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.28)",
                color: "#ffffff",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRight: "2px solid #ffffff",
                  borderTop: "2px solid #ffffff",
                  transform: "rotate(45deg)",
                  display: "block",
                  marginRight: -2,
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
