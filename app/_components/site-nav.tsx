"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#stories", label: "Stories" },
  { href: "#how", label: "How it Works" },
  { href: "#levels", label: "Levels" },
  { href: "#languages", label: "Languages" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    // An IntersectionObserver on a top sentinel is immune to which element
    // actually scrolls (`overflow: clip` on <body> can shift that around).
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-40px 0px 0px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const text = scrolled ? "#0a0b0d" : "#ffffff";
  const linkStyle = {
    fontSize: 15,
    fontWeight: 500,
    whiteSpace: "nowrap" as const,
    color: text,
    transition: "color 240ms ease",
  };

  return (
    <>
      <div ref={sentinel} aria-hidden style={{ height: 1 }} />
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: 80,
          display: "flex",
          alignItems: "center",
          transition: "background 240ms ease, border-color 240ms ease",
          background: scrolled ? "#ffffff" : "#0a0b0d",
          borderBottom: `1px solid ${scrolled ? "#dee1e6" : "transparent"}`,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: text,
              textDecoration: "none",
            }}
          >
            <img
              src="/appicon.jpg"
              alt="Read to Learn app icon"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                objectFit: "cover",
                flex: "none",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "-0.4px",
                whiteSpace: "nowrap",
                color: text,
                transition: "color 240ms ease",
              }}
            >
              Blatt
            </span>
          </a>

          <div
            className="rtl-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
              marginLeft: 8,
            }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle}>
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a href="#login" style={linkStyle} className="rtl-nav-cta">
              Log in
            </a>
            <a
              href="#start"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 48,
                padding: "0 24px",
                borderRadius: 100,
                background: "#0052ff",
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 600,
                whiteSpace: "nowrap",
                flex: "none",
                textDecoration: "none",
              }}
            >
              Start Reading
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
