import type { CSSProperties, ReactNode } from "react";
import { Stars, WaveBars } from "./decorations";
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock,
  Flame,
  Globe,
  GraduationCap,
  Headphones,
  Layers,
  MousePointerClick,
  PlayCircle,
  Share2,
  Smartphone,
  Target,
  Video,
} from "lucide-react";

const MONO = "var(--font-jetbrains-mono), monospace";
const WRAP: CSSProperties = { maxWidth: 1200, margin: "0 auto" };

/* -------------------------------------------------------------------------- */
/*  Stats band                                                                 */
/* -------------------------------------------------------------------------- */

const STATS = [
  { value: "500+", label: "Classic stories per language" },
  { value: "A1–B2", label: "Six CEFR levels covered" },
  { value: "10,000+", label: "Words learned daily" },
  { value: "4.8", label: "Average App Store rating" },
];

export function StatsBand() {
  return (
    <section
      className="rtl-section"
      style={{ padding: "88px 32px", borderBottom: "1px solid #dee1e6" }}
    >
      <div
        style={{
          ...WRAP,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 56,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: "-0.3px",
            color: "#0a0b0d",
            textAlign: "center",
          }}
        >
          A few more facts about us in numbers
        </h2>
        <div
          className="rtl-grid-4"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-1px",
                  color: "#0a0b0d",
                }}
              >
                {s.value}
              </span>
              <span style={{ fontSize: 14, color: "#5b616e" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Supported languages                                                        */
/* -------------------------------------------------------------------------- */

function LangRow({
  label,
  value,
  divider,
  labelColor,
}: {
  label: string;
  value: string;
  divider?: string;
  labelColor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: divider ? 10 : 0,
        borderBottom: divider ? `1px solid ${divider}` : undefined,
      }}
    >
      <span style={{ fontSize: 14, color: labelColor }}>{label}</span>
      <span style={{ fontFamily: MONO, fontSize: 14, fontWeight: 500 }}>
        {value}
      </span>
    </div>
  );
}

export function LanguagesSection() {
  return (
    <section
      id="languages"
      className="rtl-section"
      style={{ padding: "96px 32px", borderBottom: "1px solid #dee1e6" }}
    >
      <div
        style={{ ...WRAP, display: "flex", flexDirection: "column", gap: 40 }}
      >
        <div
          className="rtl-header-row"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 3.2vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.09,
              letterSpacing: "-1px",
              maxWidth: "20ch",
            }}
          >
            Supported languages
          </h2>
          <span
            style={{
              fontSize: 15,
              color: "#5b616e",
              paddingBottom: 6,
              maxWidth: "34ch",
            }}
          >
            Two full libraries today, each leveled A1&ndash;B2 with narration and
            review.
          </span>
        </div>

        <div
          className="rtl-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {/* German — dark card */}
          <div
            style={{
              background: "#0a0b0d",
              color: "#ffffff",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 20,
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
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#a8acb3",
                }}
              >
                01
              </span>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "#16181c",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Available
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  letterSpacing: "-0.4px",
                }}
              >
                German
              </span>
              <span style={{ fontSize: 15, color: "#a8acb3" }}>Deutsch</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 4,
              }}
            >
              <LangRow
                label="Stories"
                value="500+"
                divider="rgba(255,255,255,0.12)"
                labelColor="#a8acb3"
              />
              <LangRow
                label="Levels"
                value="A1–B2"
                divider="rgba(255,255,255,0.12)"
                labelColor="#a8acb3"
              />
              <LangRow label="Narration" value="Native" labelColor="#a8acb3" />
            </div>
            <a
              href="#start"
              className="btn-primary"
              style={{
                marginTop: 8,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                padding: "0 20px",
                borderRadius: 100,
                background: "#0052ff",
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Start in German
            </a>
          </div>

          {/* Turkish — light card */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dee1e6",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 20,
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
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#7c828a",
                }}
              >
                02
              </span>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "#eef0f3",
                  color: "#0a0b0d",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Available
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  letterSpacing: "-0.4px",
                }}
              >
                Turkish
              </span>
              <span style={{ fontSize: 15, color: "#7c828a" }}>Türkçe</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 4,
              }}
            >
              <LangRow
                label="Stories"
                value="320+"
                divider="#eef0f3"
                labelColor="#5b616e"
              />
              <LangRow
                label="Levels"
                value="A1–B2"
                divider="#eef0f3"
                labelColor="#5b616e"
              />
              <LangRow label="Narration" value="Native" labelColor="#5b616e" />
            </div>
            <a
              href="#start"
              className="btn-secondary"
              style={{
                marginTop: 8,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                padding: "0 20px",
                borderRadius: 100,
                background: "#eef0f3",
                color: "#0a0b0d",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Start in Turkish
            </a>
          </div>

          {/* In progress */}
          <div
            style={{
              background: "#f7f7f7",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <span
              style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.33 }}
            >
              More languages in progress
            </span>
            <span
              style={{ fontSize: 16, lineHeight: 1.5, color: "#5b616e" }}
            >
              Each new library ships only once it has enough leveled stories and
              native narration to read from A1 through B2.
            </span>
            <a
              href="#contact"
              style={{ fontSize: 16, fontWeight: 600, color: "#0052ff" }}
            >
              Request a language &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Context + comparison                                                       */
/* -------------------------------------------------------------------------- */

function CheckCircle() {
  return (
    <CheckCircle2
      size={20}
      strokeWidth={2}
      color="#0052ff"
      style={{ flex: "none" }}
    />
  );
}

const COMPARISON = [
  {
    left: {
      head: "Isolated words",
      points: ["— Word lists with no source", "— Nothing to reread"],
    },
    right: {
      head: "Words in the context you met them",
      points: ["— Every word keeps its sentence", "— Tap once, keep reading"],
    },
  },
  {
    left: {
      head: "Artificial sentences",
      points: ["— Written for the exercise", "— Language you never hear"],
    },
    right: {
      head: "Real stories, natively narrated",
      points: ["— Curated literary texts", "— Recorded by native speakers"],
    },
  },
  {
    left: {
      head: "No reading practice",
      points: [
        "— Sessions end after the drill",
        "— No sense of progress in a text",
      ],
    },
    right: {
      head: "Built for reading, chapter by chapter",
      points: [
        "— Leveled A1–B2 per story",
        "— Five minutes picks up where you left off",
      ],
    },
  },
];

export function ContextSection() {
  return (
    <section className="rtl-section" style={{ padding: "96px 32px" }}>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          textAlign: "center",
        }}
      >
        <h2
          className="balance"
          style={{
            margin: 0,
            fontSize: "clamp(34px, 3.8vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.04,
            letterSpacing: "-1.3px",
          }}
        >
          Flashcards teach words. Stories teach language.
        </h2>
        <p
          className="balance"
          style={{
            margin: 0,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#5b616e",
            maxWidth: "60ch",
          }}
        >
          Most apps teach you isolated vocabulary. But real fluency comes from
          seeing words in context &mdash; in stories, in sentences, in the way
          native speakers actually use them.
        </p>
      </div>

      <div
        style={{
          maxWidth: 940,
          margin: "72px auto 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="rtl-grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            paddingBottom: 20,
            borderBottom: "1px solid #dee1e6",
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 400, color: "#7c828a" }}>
            Flashcard apps
          </span>
          <span style={{ fontSize: 20, fontWeight: 400, color: "#0a0b0d" }}>
            Read to Learn
          </span>
        </div>

        {COMPARISON.map((row, i) => (
          <div
            key={row.left.head}
            className="rtl-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              padding: "28px 0",
              borderBottom:
                i === COMPARISON.length - 1
                  ? "1px solid transparent"
                  : "1px solid #dee1e6",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <span
                style={{ fontSize: 19, fontWeight: 400, color: "#a8acb3" }}
              >
                {row.left.head}
              </span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                {row.left.points.map((p) => (
                  <span key={p} style={{ fontSize: 15, color: "#a8acb3" }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <CheckCircle />
                <span
                  style={{ fontSize: 19, fontWeight: 400, color: "#0a0b0d" }}
                >
                  {row.right.head}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  paddingLeft: 28,
                }}
              >
                {row.right.points.map((p) => (
                  <span key={p} style={{ fontSize: 15, color: "#5b616e" }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stories feature grid                                                       */
/* -------------------------------------------------------------------------- */

const STORY_FEATURES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <BookOpen size={20} color="#0052ff" strokeWidth={2} />,
    title: "Classic stories, organized by category",
    body: "Fairy tales, short fiction, folklore, and more, curated from each language’s literary tradition. Browse by mood, length, or era — or just take the next chapter of what you were reading.",
  },
  {
    icon: <GraduationCap size={20} color="#0052ff" strokeWidth={2} />,
    title: "Every story leveled A1–B2 (CEFR)",
    body: "Difficulty always matches your ability, so you’re challenged, not overwhelmed. Levels are assigned per story, then checked chapter by chapter.",
  },
  {
    icon: <Clock size={20} color="#0052ff" strokeWidth={2} />,
    title: "Split into short chapters",
    body: "Read in 5-minute sessions; pick up exactly where you left off, on any device. Your place, your saved words, and your audio position all travel with you.",
  },
  {
    icon: <CalendarDays size={20} color="#0052ff" strokeWidth={2} />,
    title: "New stories every week",
    body: "Each library grows with new titles at every level, recorded with native narration before they ship.",
  },
];

export function StoriesSection() {
  return (
    <section
      id="stories"
      className="rtl-section"
      style={{ padding: "96px 32px" }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0052ff",
            }}
          >
            Reading
          </span>
          <h2
            className="balance"
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-1.4px",
              maxWidth: "18ch",
            }}
          >
            A library built for exactly where you are
          </h2>
        </div>

        <div
          className="rtl-grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {STORY_FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#f7f7f7",
                borderRadius: 24,
                padding: 32,
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 9999,
                  background: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                {f.icon}
              </span>
              <div style={{ flex: 1 }} />
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: 1.33,
                    color: "#0a0b0d",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  className="balance"
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "#5b616e",
                  }}
                >
                  {f.body}
                </p>
              </div>
              <a
                href="#start"
                className="btn-dark"
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  height: 44,
                  padding: "0 22px",
                  borderRadius: 100,
                  background: "#0a0b0d",
                  color: "#ffffff",
                  fontSize: 15,
                  fontWeight: 600,
                  marginTop: 4,
                }}
              >
                Learn more
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared feature list (Understanding + Practice)                             */
/* -------------------------------------------------------------------------- */

type Feature = { icon: ReactNode; title: string; body: string };

function FeatureList({ items }: { items: Feature[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 28,
        marginTop: 8,
      }}
    >
      {items.map((f) => (
        <div key={f.title} style={{ display: "flex", gap: 16 }}>
          <span
            style={{
              width: 40,
              height: 40,
              borderRadius: 9999,
              background: "#eef0f3",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
            }}
          >
            {f.icon}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.33 }}
            >
              {f.title}
            </span>
            <span
              style={{ fontSize: 16, lineHeight: 1.5, color: "#5b616e" }}
            >
              {f.body}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Understanding                                                              */
/* -------------------------------------------------------------------------- */

const UNDERSTANDING: Feature[] = [
  {
    icon: <MousePointerClick size={18} color="#0052ff" strokeWidth={2} />,
    title: "Tap any word for instant translation",
    body: "A small popup appears right where you're reading — no dictionary, no app-switching",
  },
  {
    icon: <Headphones size={18} color="#0052ff" strokeWidth={2} />,
    title: "Read-along narration",
    body: "Hear native pronunciation as you follow along, so you build listening comprehension for free",
  },
  {
    icon: <Bookmark size={18} color="#0052ff" strokeWidth={2} />,
    title: "Automatic word collection",
    body: "Every word you tap is saved automatically — you never have to manually add vocabulary",
  },
];

export function UnderstandingSection() {
  return (
    <section className="rtl-section" style={{ padding: "96px 32px" }}>
      <div
        className="rtl-split"
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#0a0b0d",
            borderRadius: 24,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 22,
            color: "#ffffff",
          }}
        >
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.85 }}>
            The wanderer laid his coat on the bench and said nothing. A thin mist
            lay over the valley, and the road ahead of him was still{" "}
            <span
              style={{
                display: "inline-block",
                background: "rgba(0,82,255,0.22)",
                borderRadius: 4,
                padding: "0 4px",
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              long
            </span>
            .
          </p>
          <div
            style={{
              position: "relative",
              alignSelf: "stretch",
              maxWidth: 280,
              padding: "12px 14px",
              borderRadius: 12,
              background: "#ffffff",
              color: "#0a0b0d",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              animation: "tipIn 3600ms ease both",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -4,
                left: 22,
                width: 10,
                height: 10,
                background: "#ffffff",
                transform: "rotate(45deg)",
                display: "block",
              }}
            />
            <span
              style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}
            >
              weit &middot; far, a long way
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 11,
                fontWeight: 500,
                color: "#5b616e",
              }}
            >
              German &middot; adjective
            </span>
            <span
              style={{ height: 1, background: "#eef0f3", margin: "2px 0" }}
            />
            <span
              style={{ fontSize: 13, color: "#0052ff", fontWeight: 600 }}
            >
              Saved to your words
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 16px",
              borderRadius: 16,
              background: "#16181c",
              marginTop: 8,
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 9999,
                background: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
              }}
            >
              <PlayCircle size={20} color="#0a0b0d" strokeWidth={2} />
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 3,
                height: 26,
                flex: 1,
              }}
            >
              <WaveBars count={16} color="#a8acb3" height={24} />
            </div>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 11,
                fontWeight: 500,
                color: "#a8acb3",
              }}
            >
              0:54
            </span>
          </div>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: "#7c828a",
              textAlign: "center",
            }}
          >
            reading view &middot; tap-to-translate
          </span>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0052ff",
            }}
          >
            Understanding
          </span>
          <h2
            className="balance"
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3.2vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.09,
              letterSpacing: "-1px",
            }}
          >
            Never break your reading flow
          </h2>
          <FeatureList items={UNDERSTANDING} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Practice                                                                   */
/* -------------------------------------------------------------------------- */

const PRACTICE: Feature[] = [
  {
    icon: <Layers size={18} color="#0052ff" strokeWidth={2} />,
    title: "Your collection becomes a review list",
    body: "Every saved word feeds into spaced, bite-sized review sessions",
  },
  {
    icon: <Target size={18} color="#0052ff" strokeWidth={2} />,
    title: "A daily goal you set yourself",
    body: "Chosen during onboarding, based on your pace and available time",
  },
  {
    icon: <Flame size={18} color="#f4b000" strokeWidth={2} />,
    title: "Streaks and progress tracking",
    body: "Visual progress toward your goal keeps momentum without feeling forced",
  },
];

export function PracticeSection() {
  return (
    <section
      className="rtl-section"
      style={{ padding: "96px 32px", background: "#f7f7f7" }}
    >
      <div
        className="rtl-split"
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0052ff",
            }}
          >
            Practice
          </span>
          <h2
            className="balance"
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3.2vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.09,
              letterSpacing: "-1px",
            }}
          >
            What you read becomes what you know
          </h2>
          <FeatureList items={PRACTICE} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dee1e6",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 20,
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
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#7c828a",
                }}
              >
                REVIEW &middot; 4 OF 12
              </span>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "#eef0f3",
                  fontFamily: MONO,
                  fontSize: 11,
                  fontWeight: 500,
                }}
              >
                A2
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                padding: "32px 0 24px",
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 400,
                  letterSpacing: "-0.5px",
                }}
              >
                der Nebel
              </span>
              <span style={{ fontSize: 15, color: "#5b616e" }}>
                from &ldquo;The Wanderer&rdquo;, Ch. 1
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <span
                style={{
                  height: 48,
                  borderRadius: 100,
                  background: "#eef0f3",
                  color: "#0a0b0d",
                  fontSize: 16,
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Again
              </span>
              <span
                style={{
                  height: 48,
                  borderRadius: 100,
                  background: "#0052ff",
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                I knew it
              </span>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dee1e6",
              borderRadius: 24,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <span
              style={{
                width: 64,
                height: 64,
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
                  width: 48,
                  height: 48,
                  borderRadius: 9999,
                  background: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: MONO,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                68%
              </span>
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                flex: 1,
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600 }}>
                Daily goal &middot; 17 of 25 words
              </span>
              <span style={{ fontSize: 14, color: "#5b616e" }}>
                A few minutes left today
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <Flame size={18} color="#f4b000" strokeWidth={2} />
              <span
                style={{ fontFamily: MONO, fontSize: 18, fontWeight: 500 }}
              >
                31
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  How it works                                                               */
/* -------------------------------------------------------------------------- */

const STEPS = [
  {
    n: "01",
    title: "Pick a story at your level",
    body: "Browse by category or continue your last chapter",
  },
  {
    n: "02",
    title: "Read, tap, and listen",
    body: "Translate words instantly, hear native narration",
  },
  {
    n: "03",
    title: "Review each day",
    body: "A few minutes of practice turns new words into memory",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="rtl-section" style={{ padding: "96px 32px" }}>
      <div style={{ ...WRAP, display: "flex", flexDirection: "column", gap: 56 }}>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(30px, 3.2vw, 44px)",
            fontWeight: 400,
            lineHeight: 1.09,
            letterSpacing: "-1px",
            maxWidth: "20ch",
          }}
        >
          How it works
        </h2>
        <div
          className="rtl-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                paddingTop: 28,
                borderTop: "1px solid #dee1e6",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#0052ff",
                }}
              >
                {s.n}
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  letterSpacing: "-0.4px",
                }}
              >
                {s.title}
              </span>
              <span
                style={{ fontSize: 16, lineHeight: 1.5, color: "#5b616e" }}
              >
                {s.body}
              </span>
            </div>
          ))}
        </div>
        <a
          href="#start"
          style={{ fontSize: 16, fontWeight: 600, color: "#0052ff" }}
        >
          Try your first story free &rarr;
        </a>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                               */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      "The tap-to-translate feature means I actually finish stories instead of giving up halfway.",
    name: "Marta K.",
    meta: "learning German for 8 months",
  },
  {
    quote:
      "Finally an app where I'm reading real stories, not just matching flashcards.",
    name: "Daniel R.",
    meta: "B1, self-taught for two years",
  },
  {
    quote:
      "The daily streak is what's kept me consistent for the first time ever.",
    name: "Priya S.",
    meta: "started at A1 in January",
  },
];

export function Testimonials() {
  return (
    <section
      className="rtl-section"
      style={{ padding: "96px 32px", background: "#f7f7f7" }}
    >
      <div
        className="rtl-grid-3"
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            style={{
              background: "#ffffff",
              border: "1px solid #dee1e6",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Stars size={13} />
            </div>
            <p
              className="balance"
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 600 }}>{t.name}</span>
              <span style={{ fontSize: 14, color: "#7c828a" }}>{t.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Library preview                                                            */
/* -------------------------------------------------------------------------- */

const GRAD_A =
  "repeating-linear-gradient(135deg, #eef0f3 0 9px, #f7f7f7 9px 18px)";
const GRAD_B =
  "repeating-linear-gradient(135deg, #e6e9ee 0 9px, #f2f4f7 9px 18px)";

const BOOKS = [
  { grad: GRAD_A, level: "A1", title: "The Hare and the Hedgehog", category: "Fairy tales" },
  { grad: GRAD_B, level: "A1", title: "The Woman at the Well", category: "Folklore" },
  { grad: GRAD_A, level: "A2", title: "The Town Musicians", category: "Fairy tales" },
  { grad: GRAD_B, level: "B1", title: "The Wanderer", category: "Short fiction" },
  { grad: GRAD_A, level: "B2", title: "Letters from the North", category: "Short fiction" },
];

export function LibraryPreview() {
  return (
    <section
      id="levels"
      className="rtl-section"
      style={{ padding: "96px 32px" }}
    >
      <div style={{ ...WRAP, display: "flex", flexDirection: "column", gap: 40 }}>
        <div
          className="rtl-header-row"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3.2vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.09,
              letterSpacing: "-1px",
              maxWidth: "18ch",
            }}
          >
            A taste of the library
          </h2>
          <span
            style={{ fontSize: 15, color: "#5b616e", paddingBottom: 6 }}
          >
            Hundreds more inside
          </span>
        </div>

        <div
          className="rtl-grid-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 20,
          }}
        >
          {BOOKS.map((b) => (
            <div
              key={b.title}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <div
                style={{
                  aspectRatio: "3 / 4",
                  borderRadius: 16,
                  background: b.grad,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 12,
                }}
              >
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: 100,
                    background: "#ffffff",
                    fontFamily: MONO,
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  {b.level}
                </span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <span style={{ fontSize: 15, fontWeight: 600 }}>{b.title}</span>
                <span style={{ fontSize: 13, color: "#7c828a" }}>
                  {b.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing CTA                                                                */
/* -------------------------------------------------------------------------- */

export function StartCta() {
  return (
    <section
      id="start"
      className="rtl-section"
      style={{ padding: "96px 32px", background: "#0a0b0d", color: "#ffffff" }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          textAlign: "center",
        }}
      >
        <h2
          className="balance"
          style={{
            margin: 0,
            fontSize: "clamp(34px, 3.8vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.04,
            letterSpacing: "-1.3px",
          }}
        >
          Your next chapter starts here
        </h2>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {(["App Store", "Google Play"] as const).map((store) => (
            <span
              key={store}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                height: 48,
                padding: "0 20px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.28)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {store === "App Store" ? (
                <Smartphone size={16} color="#ffffff" strokeWidth={2} />
              ) : (
                <PlayCircle size={16} color="#ffffff" strokeWidth={2} />
              )}
              {store}
            </span>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 13, color: "#7c828a" }}>
          Free to start &middot; Cancel anytime
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */

const FOOTER_COLS = [
  { head: "Product", links: ["Stories", "Levels", "Pricing"] },
  { head: "Company", links: ["About", "Blog", "Careers"] },
  { head: "Support", links: ["Help Center", "Contact"] },
  { head: "Legal", links: ["Privacy", "Terms"] },
];

export function SiteFooter() {
  return (
    <footer
      id="pricing"
      style={{
        padding: "64px 32px 32px",
        background: "#ffffff",
        borderTop: "1px solid #dee1e6",
      }}
    >
      <div style={{ ...WRAP, display: "flex", flexDirection: "column", gap: 48 }}>
        <div
          className="rtl-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(4, 1fr)",
            gap: 32,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <img
                src="/appicon.jpg"
                alt="Blatt app icon"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  objectFit: "cover",
                  display: "block",
                  flex: "none",
                }}
              />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.2px",
                  color: "#0a0b0d",
                }}
              >
                Blatt
              </span>
            </div>
            <span
              style={{
                fontSize: 14,
                lineHeight: 1.5,
                color: "#5b616e",
                maxWidth: "26ch",
              }}
            >
              Languages, learned by reading real stories.
            </span>
          </div>

          {FOOTER_COLS.map((col) => (
            <div
              key={col.head}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#0a0b0d",
                }}
              >
                {col.head}
              </span>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{ fontSize: 14, color: "#5b616e" }}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "#dee1e6" }} />

        <div
          className="rtl-header-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: 16 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                height: 44,
                padding: "0 20px",
                borderRadius: 100,
                background: "#eef0f3",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <Globe size={14} color="#5b616e" strokeWidth={2} />
              English
            </span>
            <span style={{ fontSize: 13, color: "#7c828a" }}>
              &copy; 2026 Read to Learn
            </span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            {([
              { href: "#", label: "X", Icon: Share2 },
              { href: "#", label: "Instagram", Icon: Camera },
              { href: "#", label: "YouTube", Icon: Video },
            ] as const).map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9999,
                  background: "#eef0f3",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={15} color="#5b616e" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
