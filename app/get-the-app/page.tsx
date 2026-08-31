import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Stars, WaveBars } from "../_components/decorations";

const MONO = "var(--font-jetbrains-mono), monospace";

export const metadata: Metadata = {
  title: "Get the Blatt app — Read your way into a language",
  description:
    "Leveled German and Turkish stories with tap-to-translate words, native narration, and vocabulary review built in. Free to start on iPhone.",
};

const FEATURES = [
  {
    n: "01",
    title: "Tap any word",
    body: "An instant meaning in place — no dictionary, no losing the thread of the story.",
  },
  {
    n: "02",
    title: "Read along with narration",
    body: "Native audio highlights each line as it's spoken, at a speed you choose.",
  },
  {
    n: "03",
    title: "Words you looked up come back",
    body: "Every lookup is saved and returns as review, in the sentence you first met it in.",
  },
  {
    n: "04",
    title: "Offline reading",
    body: "Download a story with its audio and read it on a plane or a train.",
  },
];

const STATS = [
  { value: "800+", label: "stories, A1 to B2" },
  { value: "2", label: "languages, one account" },
  { value: "100%", label: "narrated by native readers" },
  { value: "8 min", label: "average daily session" },
];

const LANGS = [
  { name: "German", count: "500+" },
  { name: "Turkish", count: "320+" },
];

const REVIEW_QUOTE =
  "I'd quit two apps before this one. Reading a real story is the first thing that made the words stick.";

const btnBase: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 54,
  borderRadius: 100,
  fontSize: 16,
  fontWeight: 600,
  textDecoration: "none",
};

const sectionBase: CSSProperties = {
  padding: "40px 28px 44px",
  display: "flex",
  flexDirection: "column",
};

export default function GetTheAppPage() {
  return (
    <div style={{ background: "#eef0f3", minHeight: "100vh" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          margin: "0 auto",
          background: "#ffffff",
          color: "#0a0b0d",
          overflow: "hidden",
        }}
      >
        {/* -------------------------------------------------------------- */}
        {/*  Hero                                                          */}
        {/* -------------------------------------------------------------- */}
        <section
          style={{
            background: "#0a0b0d",
            color: "#ffffff",
            padding: "22px 28px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/appicon.jpg"
                alt="Blatt app icon"
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  objectFit: "cover",
                  display: "block",
                  flex: "none",
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "-0.2px",
                }}
              >
                Blatt
              </span>
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "5px 11px",
                borderRadius: 100,
                background: "#16181c",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Stars size={10} />
              </span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#ffffff",
                }}
              >
                4.8
              </span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingTop: 26,
              animation: "riseIn 700ms ease both",
            }}
          >
            {/* Reading-view mockup */}
            <div
              style={{
                width: 208,
                borderRadius: 30,
                background: "#16181c",
                border: "1px solid rgba(255,255,255,0.09)",
                padding: 8,
                marginBottom: 26,
              }}
            >
              <div
                style={{
                  borderRadius: 23,
                  background: "#ffffff",
                  color: "#0a0b0d",
                  padding: "14px 14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                  textAlign: "left",
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
                      gap: 6,
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 9999,
                        background: "#0052ff",
                        display: "block",
                      }}
                    />
                    German
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      padding: "2px 7px",
                      borderRadius: 100,
                      background: "#eef0f3",
                      fontFamily: MONO,
                      fontSize: 10,
                      fontWeight: 500,
                    }}
                  >
                    A2
                  </span>
                </div>

                <div style={{ height: 1, background: "#eef0f3" }} />

                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "-0.2px",
                  }}
                >
                  The Woman at the Well
                </span>

                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    lineHeight: "19px",
                    color: "#0a0b0d",
                  }}
                >
                  Every morning the old woman went to the well to{" "}
                  <span
                    style={{
                      background: "rgba(0,82,255,0.14)",
                      borderRadius: 3,
                      padding: "0 2px",
                      color: "#0052ff",
                      fontWeight: 600,
                    }}
                  >
                    fetch
                  </span>{" "}
                  water.
                </p>

                <div
                  style={{
                    padding: "8px 10px",
                    borderRadius: 10,
                    background: "#0a0b0d",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#ffffff",
                      lineHeight: 1.2,
                    }}
                  >
                    holen &middot; to fetch
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 9,
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
                    alignItems: "center",
                    gap: 9,
                    padding: "9px 10px",
                    borderRadius: 12,
                    background: "#eef0f3",
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 9999,
                      background: "#0052ff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                      flex: "none",
                    }}
                  >
                    <span
                      style={{
                        width: 2,
                        height: 9,
                        borderRadius: 1,
                        background: "#ffffff",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: 2,
                        height: 9,
                        borderRadius: 1,
                        background: "#ffffff",
                        display: "block",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 2,
                      height: 20,
                      flex: 1,
                    }}
                  >
                    <WaveBars count={18} color="#0052ff" height={20} />
                  </span>
                </div>
              </div>
            </div>

            <h1
              className="balance"
              style={{
                margin: 0,
                fontSize: 38,
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-1.2px",
                maxWidth: "12ch",
              }}
            >
              Read your way into a language
            </h1>
            <p
              className="balance"
              style={{
                margin: "14px 0 0",
                fontSize: 15,
                lineHeight: 1.55,
                color: "#a8acb3",
                maxWidth: "32ch",
              }}
            >
              Leveled stories with tap-to-translate words, native narration, and
              vocabulary review &mdash; in your pocket.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: "100%",
                marginTop: 26,
              }}
            >
              <a
                href="#ios"
                className="btn-primary"
                style={{
                  ...btnBase,
                  gap: 10,
                  background: "#0052ff",
                  color: "#ffffff",
                }}
              >
                Download for iPhone
              </a>
            </div>
            <p
              style={{
                margin: "14px 0 0",
                fontFamily: MONO,
                fontSize: 11,
                fontWeight: 500,
                color: "#7c828a",
              }}
            >
              FREE &middot; iOS 16+ &middot; 48 MB
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/*  What's in the app                                             */}
        {/* -------------------------------------------------------------- */}
        <section style={{ ...sectionBase, background: "#ffffff", gap: 22 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#7c828a",
            }}
          >
            What&rsquo;s in the app
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FEATURES.map((f, i) => (
              <div
                key={f.n}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "20px 0",
                  borderTop: "1px solid #dee1e6",
                  borderBottom:
                    i === FEATURES.length - 1 ? "1px solid #dee1e6" : undefined,
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#7c828a",
                    paddingTop: 3,
                    flex: "none",
                  }}
                >
                  {f.n}
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {f.title}
                  </span>
                  <p
                    className="balance"
                    style={{
                      margin: 0,
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "#5b616e",
                    }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/*  The whole library travels with you                            */}
        {/* -------------------------------------------------------------- */}
        <section style={{ ...sectionBase, background: "#eef0f3", gap: 26 }}>
          <h2
            className="balance"
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.7px",
              maxWidth: "20ch",
            }}
          >
            The whole library travels with you
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px 20px",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 30,
                    fontWeight: 500,
                    letterSpacing: "-1px",
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: 13, color: "#5b616e" }}>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {LANGS.map((l) => (
              <span
                key={l.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "7px 13px",
                  borderRadius: 100,
                  background: "#ffffff",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {l.name}{" "}
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    color: "#7c828a",
                  }}
                >
                  {l.count}
                </span>
              </span>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/*  Review                                                        */}
        {/* -------------------------------------------------------------- */}
        <section style={{ ...sectionBase, background: "#ffffff", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Stars size={13} />
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 12,
                fontWeight: 500,
                color: "#5b616e",
              }}
            >
              4.8 &middot; 12,400 RATINGS
            </span>
          </div>
          <p
            className="balance"
            style={{
              margin: 0,
              fontSize: 19,
              fontWeight: 400,
              lineHeight: 1.45,
              letterSpacing: "-0.3px",
            }}
          >
            &ldquo;{REVIEW_QUOTE}&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 9999,
                background: "#eef0f3",
                display: "block",
                flex: "none",
              }}
            />
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Marta K.</span>
              <span style={{ fontSize: 12, color: "#7c828a" }}>
                Learning German &middot; 94-day streak
              </span>
            </span>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/*  Closing CTA                                                   */}
        {/* -------------------------------------------------------------- */}
        <section
          style={{
            background: "#0a0b0d",
            color: "#ffffff",
            padding: "44px 28px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <h2
            className="balance"
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.8px",
              maxWidth: "16ch",
            }}
          >
            Your first story is free
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.5,
              color: "#a8acb3",
              maxWidth: "30ch",
            }}
          >
            No account needed to start reading. Pick a language when you open the
            app.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
              marginTop: 8,
            }}
          >
            <a
              href="#ios"
              className="btn-primary"
              style={{ ...btnBase, background: "#0052ff", color: "#ffffff" }}
            >
              Get the app
            </a>
            <a
              href="#web"
              className="btn-outline-dark"
              style={{
                ...btnBase,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.28)",
                color: "#ffffff",
              }}
            >
              Read in the browser
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 18,
              paddingTop: 20,
              borderTop: "1px solid rgba(255,255,255,0.12)",
              width: "100%",
              justifyContent: "center",
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
              &copy; 2026 BLATT
            </span>
            <a
              href="#privacy"
              className="gta-footer-link"
              style={{ fontSize: 12 }}
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="gta-footer-link"
              style={{ fontSize: 12 }}
            >
              Terms
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
