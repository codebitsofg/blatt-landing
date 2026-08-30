"use client";

import { memo, useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const MONO = "var(--font-jetbrains-mono), monospace";

// Lift for the white cards that float over the phone mockup (daily-goal pill,
// saved-today panel).
const FLOAT_SHADOW =
  "0 10px 30px rgba(10,11,13,0.10), 0 2px 6px rgba(10,11,13,0.06)";

// One full read-head sweep, in ms — the design's clock was 320 steps × 120ms.
const SWEEP_MS = 320 * 120;
const WAVE_COUNT = 30;

// Per-bar base heights — the design's hash noise, evaluated once, not per frame.
const WAVE_BASE = Array.from({ length: WAVE_COUNT }, (_, i) => {
  const seed = Math.sin(i * 12.9898) * 43758.5453;
  return 0.28 + (seed - Math.floor(seed)) * 0.5;
});

const HERO_LANGS = [
  { name: "German", count: "500+" },
  { name: "Turkish", count: "320+" },
];

const SAVED_WORDS: [string, string][] = [
  ["holen", "to fetch"],
  ["der Brunnen", "the well"],
  ["der Rand", "the edge"],
];

/**
 * Live playback waveform: a read head sweeps left to right, bars ahead of it
 * sit low and gray, bars under it swell in the accent color.
 *
 * Ported from the design's `liveBars(30, t)`. Runs its own rAF loop and writes
 * each bar's `scaleY` / opacity / color straight to the DOM node — no React
 * state, so no component re-render per frame. That keeps it at the display's
 * refresh rate no matter what the rest of the page is doing, and `scaleY` is a
 * compositor transform (no layout, no paint).
 *
 * Like the reviews marquee, this is a deliberate, continuous ambient element of
 * the design — it keeps playing under `prefers-reduced-motion: reduce` (which
 * the maintainer runs). Gating it there just freezes the player.
 */
const LiveWave = memo(function LiveWave() {
  const bars = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const t = (((now - start) % SWEEP_MS) / SWEEP_MS) * 320;
      const head = (t / 320) * WAVE_COUNT;
      for (let i = 0; i < WAVE_COUNT; i++) {
        const el = bars.current[i];
        if (!el) continue;
        const played = i <= head;
        const near = Math.max(0, 1 - Math.abs(i - head) / 2.4);
        const puls = played ? 0.7 + 0.3 * Math.sin((t * 0.5 + i) * 1.1) : 0.55;
        const amp = Math.min(1, WAVE_BASE[i] * puls + near * 0.55);
        el.style.transform = `scaleY(${Math.max(0.1, amp)})`;
        el.style.opacity = `${played ? 0.55 + near * 0.45 : 1}`;
        el.style.background = played ? "#0052ff" : "#c9ced6";
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {Array.from({ length: WAVE_COUNT }, (_, i) => (
        <span
          key={i}
          ref={(el) => {
            bars.current[i] = el;
          }}
          style={{
            display: "block",
            flex: 1,
            minWidth: 2,
            height: 30,
            borderRadius: 2,
            background: "#c9ced6",
            transformOrigin: "bottom",
            transform: "scaleY(0.1)",
            willChange: "transform",
          }}
        />
      ))}
    </>
  );
});

export function Hero() {
  // Only the timer text and the reading highlight ride this clock — a couple of
  // ticks a second is plenty. The waveform animates itself (see LiveWave).
  const [t, setT] = useState(0);

  useEffect(() => {
    const step = 4;
    const id = window.setInterval(
      () => setT((v) => (v + step) % 320),
      (SWEEP_MS / 320) * step, // hold the design's real-time pace
    );
    return () => window.clearInterval(id);
  }, []);

  const frac = (t % 320) / 320;
  const secs = Math.floor(frac * 102);
  const elapsed = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  const readTop = Math.min(3, Math.floor(frac * 4)) * 28;

  return (
    <section
      id="top"
      style={{
        background: "#ffffff",
        color: "#0a0b0d",
        padding: "100px 32px 0px",
      }}
    >
      <div
        className="rtl-hero"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(340px, 0.95fr)",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* Copy column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 24,
            animation: "riseIn 700ms ease both",
          }}
        >
          <h1
            className="balance"
            style={{
              margin: 0,
              fontSize: "clamp(40px, 5.4vw, 80px)",
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: "-2px",
              maxWidth: "13ch",
            }}
          >
            Learn a language the way you&rsquo;d read a good book
          </h1>

          <p
            className="balance"
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.55,
              color: "#5b616e",
              maxWidth: "46ch",
            }}
          >
            A library of classic stories in every language we support, leveled
            A1&ndash;B2, with instant translations, native narration, and
            vocabulary review built right in.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 8,
            }}
          >
            <a
              href="#start"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 56,
                padding: "0 32px",
                borderRadius: 100,
                background: "#0052ff",
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Start Reading Free
            </a>
            <a
              href="#demo"
              className="btn-outline-dark"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                height: 56,
                padding: "0 28px",
                borderRadius: 100,
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.20)",
                color: "#0a0b0d",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 9999,
                  background: "#0a0b0d",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <Play size={10} color="#ffffff" fill="#ffffff" strokeWidth={0} style={{ marginLeft: 1 }} />
              </span>
              Watch a 60-second demo
            </a>
          </div>

          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#8a8f9a" }}>
            No credit card required &middot; Free stories at every level
          </p>



        </div>

        {/* Device mockup column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "24px 0 8px",
            animation: "riseIn 900ms ease both",
          }}
        >
          <div
            style={{
              width: 344,
              maxWidth: "100%",
              borderRadius: 40,
              background: "#f5f6f8",
              padding: 12,
              border: "1px solid #dee1e6",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                borderRadius: 30,
                background: "#ffffff",
                color: "#0a0b0d",
                overflow: "hidden",
                padding: "20px 22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0a0b0d",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 9999,
                      background: "#0052ff",
                      display: "block",
                    }}
                  />
                  German
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#7c828a",
                    }}
                  >
                    CH. 3 / 8
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      padding: "3px 9px",
                      borderRadius: 100,
                      background: "#eef0f3",
                      color: "#0a0b0d",
                      fontFamily: MONO,
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    A2
                  </span>
                </div>
              </div>

              <div style={{ height: 1, background: "#eef0f3" }} />

              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "-0.3px",
                }}
              >
                The Woman at the Well
              </h3>

              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: -6,
                    right: -6,
                    height: 28,
                    borderRadius: 6,
                    background: "rgba(0,82,255,0.10)",
                    transition: "top 420ms cubic-bezier(0.4, 0, 0.2, 1)",
                    top: readTop,
                    display: "block",
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    position: "relative",
                    fontSize: 16,
                    lineHeight: "28px",
                    color: "#0a0b0d",
                  }}
                >
                  There was once a small village at the edge of the forest. Every
                  morning the old woman went to the well to{" "}
                  <span
                    style={{
                      display: "inline-block",
                      background: "rgba(0,82,255,0.14)",
                      borderRadius: 4,
                      padding: "0 3px",
                      color: "#0052ff",
                      fontWeight: 600,
                    }}
                  >
                    fetch
                  </span>{" "}
                  water.
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  alignSelf: "stretch",
                  padding: "10px 12px",
                  borderRadius: 12,
                  background: "#0a0b0d",
                  color: "#ffffff",
                  animation: "tipIn 3200ms ease both",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -4,
                    left: 18,
                    width: 10,
                    height: 10,
                    background: "#0a0b0d",
                    transform: "rotate(45deg)",
                    display: "block",
                  }}
                />
                <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2 }}>
                  holen &middot; to fetch, to get
                </span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#a8acb3",
                  }}
                >
                  German &middot; verb
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: 14,
                  borderRadius: 16,
                  background: "#eef0f3",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9999,
                      background: "#0052ff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    }}
                  >
                    <span
                      style={{
                        width: 3,
                        height: 13,
                        borderRadius: 1,
                        background: "#ffffff",
                        display: "block",
                        marginRight: 3,
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
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 2,
                      height: 30,
                      flex: 1,
                    }}
                  >
                    <LiveWave />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#5b616e",
                    }}
                  >
                    {elapsed}
                  </span>
                  <span
                    style={{
                      position: "relative",
                      height: 3,
                      borderRadius: 2,
                      background: "#dee1e6",
                      flex: 1,
                      display: "block",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "100%",
                        borderRadius: 2,
                        background: "#0052ff",
                        transformOrigin: "left",
                        transform: `scaleX(${frac.toFixed(4)})`,
                        display: "block",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#7c828a",
                    }}
                  >
                    1:42
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: 344,
              maxWidth: "100%",
              marginTop: -20,
              padding: "30px 20px 18px",
              borderRadius: 20,
              background: "#ffffff",
              border: "1px solid #eef0f3",
              boxShadow: FLOAT_SHADOW,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#7c828a",
                }}
              >
                SAVED TODAY
              </span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#0a0b0d",
                }}
              >
                7
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px 24px",
              }}
            >
              {SAVED_WORDS.map(([word, meaning]) => (
                <div
                  key={word}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <span
                    style={{ fontSize: 14, fontWeight: 600, color: "#0a0b0d" }}
                  >
                    {word}
                  </span>
                  <span style={{ fontSize: 12, color: "#7c828a" }}>
                    {meaning}
                  </span>
                </div>
              ))}
            </div>
            <span
              style={{
                height: 1,
                background: "#eef0f3",
                display: "block",
              }}
            />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#0052ff" }}>
              Review 7 words &rarr;
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              right: -12,
              top: 0,
              zIndex: 2,
              padding: "14px 18px",
              borderRadius: 100,
              background: "#ffffff",
              border: "1px solid #eef0f3",
              boxShadow: FLOAT_SHADOW,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 9999,
                background:
                  "conic-gradient(#0052ff 0turn 0.68turn, #eef0f3 0.68turn 1turn)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 9999,
                  background: "#ffffff",
                  display: "block",
                }}
              />
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#0a0b0d",
                }}
              >
                17 / 25
              </span>
              <span style={{ fontSize: 11, color: "#7c828a" }}>daily goal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
