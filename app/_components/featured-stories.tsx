"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Autoplay dwell per slide — also the duration of the progress sweep.
const AUTOPLAY_MS = 5600;

// Real stories from the library catalog (blatt-audio R2 bucket, library.json).
// Titles shown here in English translation; each story is read in German in-app.
const R2_COVERS = "https://pub-44ad1899799740bcb5402352d8f6d9fe.r2.dev/covers";

const SLIDES = [
  {
    title: "The Pyramids of Giza",
    body: "The last wonder of the ancient world, retold in short, plain sentences — the gentlest place to start reading German at A1.",
    cover: `${R2_COVERS}/5c7367b3728e.png`,
  },
  {
    title: "The Fascinating Kangaroos",
    body: "How Australia's boxers raise a joey in the pouch — everyday, present-tense German at A2, narrated at reading pace.",
    cover: `${R2_COVERS}/ba419f89f0cb.png`,
  },
  {
    title: "The Beauty of the Broken",
    body: "Kintsugi, the Japanese art of mending cracked pottery with gold, told in flowing B1 sentences with native narration.",
    cover: `${R2_COVERS}/c3d6c003e181.png`,
  },
  {
    title: "The Penicillin Revolution",
    body: "Fleming's 1928 accident and the medicine it gave the world — long, C1 sentences with tap-to-translate on every word.",
    cover: `${R2_COVERS}/804795c1128f.png`,
  },
];

export function FeaturedStories() {
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Restart the timer whenever `slide` changes so a manual jump gets a full
  // dwell and the progress sweep stays in step with it.
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(
      () => setSlide((s) => (s + 1) % SLIDES.length),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(id);
  }, [playing, slide]);

  const go = (i: number) =>
    setSlide(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

  const circleBtn = {
    width: 52,
    height: 52,
    borderRadius: 9999,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none",
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
            className="rtl-featured-track"
            style={{
              display: "flex",
              transition: reduced
                ? "transform 300ms ease"
                : "transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
              transform: `translate3d(-${slide * 92}%, 0, 0)`,
              willChange: "transform",
            }}
          >
            {SLIDES.map((s, i) => {
              const active = i === slide;
              return (
                <div
                  key={s.title}
                  style={{
                    minWidth: "92%",
                    paddingRight: 24,
                    boxSizing: "border-box",
                    opacity: active ? 1 : 0.38,
                    transition: reduced ? undefined : "opacity 620ms ease",
                  }}
                >
                  <div
                    className="rtl-featured-card"
                    style={{
                      background: "#16181c",
                      borderRadius: 28,
                      padding: 48,
                      display: "grid",
                      gridTemplateColumns: "1fr 1.2fr",
                      gap: 56,
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1 / 1",
                        borderRadius: 20,
                        background: "#0a0b0d",
                        overflow: "hidden",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.cover}
                        alt={`Cover illustration — ${s.title}`}
                        style={{
                          position: "absolute",
                          inset: 24,
                          width: "calc(100% - 48px)",
                          height: "calc(100% - 48px)",
                          objectFit: "contain",
                          filter: "invert(1) hue-rotate(180deg)",
                          mixBlendMode: "screen",
                        }}
                      />
                    </div>
                    <div
                      key={`copy-${i}-${slide}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 22,
                        paddingRight: 16,
                        animation:
                          active && !reduced
                            ? "riseIn 620ms cubic-bezier(0.22, 1, 0.36, 1) both"
                            : undefined,
                      }}
                    >
                      <h3
                        className="balance"
                        style={{
                          margin: 0,
                          fontSize: "clamp(30px, 3.6vw, 52px)",
                          fontWeight: 400,
                          lineHeight: 1.06,
                          letterSpacing: "-1.5px",
                          color: "#ffffff",
                          maxWidth: "16ch",
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
                          maxWidth: "42ch",
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
                          marginTop: 6,
                          padding: "0 34px",
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
              );
            })}
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
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
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
                  aria-current={slide === i}
                  onClick={() => go(i)}
                  style={{
                    position: "relative",
                    width: slide === i ? 44 : 20,
                    height: 4,
                    padding: 0,
                    border: 0,
                    borderRadius: 100,
                    background: "#3a3e45",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition:
                      "width 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                    display: "block",
                  }}
                >
                  <span
                    key={`fill-${slide}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 100,
                      background: "#ffffff",
                      transformOrigin: "left",
                      transform: i < slide ? "scaleX(1)" : "scaleX(0)",
                      animation:
                        i === slide && !reduced
                          ? `rtlProgress ${AUTOPLAY_MS}ms linear forwards`
                          : undefined,
                      animationPlayState: playing ? "running" : "paused",
                    }}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={playing ? "Pause autoplay" : "Play autoplay"}
              onClick={() => setPlaying((p) => !p)}
              className="ctrl-dark"
              style={{
                ...circleBtn,
                width: 48,
                height: 48,
                background: "#16181c",
                border: 0,
                color: "#ffffff",
              }}
            >
              {playing ? (
                <Pause size={16} fill="#ffffff" strokeWidth={0} />
              ) : (
                <Play
                  size={16}
                  fill="#ffffff"
                  strokeWidth={0}
                  style={{ marginLeft: 2 }}
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
              <ChevronLeft size={20} strokeWidth={2} />
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
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
