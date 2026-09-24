import type { Metadata } from "next";
import Link from "next/link";

const MONO = "var(--font-jetbrains-mono), monospace";

const CONTACT_EMAIL = "ebruge1190@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy — Blatt",
  description:
    "How we collect, use, share, and protect personal information when you use our mobile applications.",
};

type Item = { label?: string; text: string; sub?: string[] };
type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: Item[] };
type Section = { id: string; title: string; blocks: Block[] };

const SECTIONS: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {
        kind: "p",
        text: "Welcome to our mobile applications and services (“we,” “us,” or “our”). This Privacy Policy explains how we collect, use, share, and protect personal information when you use our mobile applications (“Apps”). By using our Apps, you consent to the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    id: "who-we-are",
    title: "1. Who We Are",
    blocks: [
      {
        kind: "p",
        text: "Our applications are published by BubbleApp Studio and are designed for users worldwide. We comply with relevant data protection regulations, including the General Data Protection Regulation (GDPR) where applicable.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    blocks: [
      { kind: "h3", text: "2.1 Information You Provide Voluntarily" },
      {
        kind: "ul",
        items: [
          {
            label: "Account Information:",
            text: "If you choose to create an account, we collect your email and name.",
          },
          {
            label: "User Data:",
            text: "To provide personalized experiences and track your usage (e.g., preferences, progress, settings), we store this data under your account.",
          },
        ],
      },
      { kind: "h3", text: "2.2 Information We Collect Automatically" },
      {
        kind: "ul",
        items: [
          {
            label: "System Data:",
            text: "We automatically collect device identifiers, operating system version, device model, IP address, and advertising ID (if you consent).",
          },
          {
            label: "App Usage Data:",
            text: "We collect information about how you use the App (e.g., sessions, key actions, and in-app navigation).",
          },
          {
            label: "Payment Data:",
            text: "For paid subscriptions or purchases, we collect information necessary to process payments.",
          },
        ],
      },
      {
        kind: "p",
        text: "We do not collect health, geolocation, or government-issued identification data. Other than what is needed for payment processing, we do not collect detailed financial data.",
      },
    ],
  },
  {
    id: "how-we-collect-your-data",
    title: "3. How We Collect Your Data",
    blocks: [
      {
        kind: "ul",
        items: [
          {
            label: "App Registration:",
            text: "When you sign up for an account through the App’s dedicated sign-up screen.",
          },
          {
            label: "Automatic Collection:",
            text: "Certain data is collected automatically through your device when you use the App.",
          },
          {
            label: "Third-Party SDKs:",
            text: "We integrate with the following third-party service providers, who also collect data on our behalf or receive some of the data we collect:",
            sub: ["Firebase (Google)", "Analytics providers", "Payment processors"],
          },
        ],
      },
    ],
  },
  {
    id: "purposes",
    title: "4. Purposes for Collecting and Using Data",
    blocks: [
      {
        kind: "p",
        text: "We use the data we collect for the following purposes:",
      },
      {
        kind: "ul",
        items: [
          {
            label: "Performance and Bug Fixing:",
            text: "Analyze performance metrics to improve app stability and resolve technical issues.",
          },
          {
            label: "Customer Support:",
            text: "Assist with any inquiries or technical support requests you might have.",
          },
          {
            label: "Account Sync:",
            text: "Synchronize your data and preferences across devices if you create an account.",
          },
          {
            label: "Subscription Management:",
            text: "Process payments and manage premium features of our applications.",
          },
          {
            label: "Marketing and Analytics:",
            text: "Use aggregated user data for internal marketing campaign improvements. We do not show third-party ads within our applications.",
          },
        ],
      },
    ],
  },
  {
    id: "how-we-share-your-data",
    title: "5. How We Share Your Data",
    blocks: [
      {
        kind: "p",
        text: "We may share certain data with the following third parties to facilitate our services:",
      },
      {
        kind: "ul",
        items: [
          {
            text: "Firebase (Google) and other analytics providers to help us with analytics and user engagement.",
          },
          {
            label: "Payment Processors:",
            text: "To process subscription payments securely.",
          },
        ],
      },
      {
        kind: "p",
        text: "We do not sell or rent your personal data to third parties.",
      },
    ],
  },
  {
    id: "legal-basis",
    title: "6. Legal Basis for Processing",
    blocks: [
      {
        kind: "p",
        text: "Our legal bases for processing your data include:",
      },
      {
        kind: "ul",
        items: [
          {
            label: "Consent:",
            text: "When you create an account, you consent to the collection and use of your personal information (name, email).",
          },
          {
            label: "Legitimate Interests:",
            text: "Collecting system data (e.g., device identifiers, usage data) to improve our App’s functionality and ensure security.",
          },
          {
            label: "Contract:",
            text: "We process payment information to fulfill subscription services you purchase.",
          },
          {
            label: "Compliance with Laws:",
            text: "We may retain or disclose information if required by law.",
          },
        ],
      },
    ],
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    blocks: [
      {
        kind: "p",
        text: "We retain user data for as long as it is necessary to provide the App’s services and features. Currently, we do not have an automated data deletion mechanism; however, users can request deletion of their account as described in Section 8. We review and update our retention practices to ensure compliance with relevant regulations.",
      },
    ],
  },
  {
    id: "your-rights-and-choices",
    title: "8. Your Rights and Choices",
    blocks: [
      {
        kind: "ul",
        items: [
          {
            label: "Access and Update:",
            text: "You may access and update your account information directly within the App.",
          },
          {
            label: "Deletion:",
            text: "You can request account deletion by emailing us at info@bubbleappstudio.com or through the app’s support/request form.",
          },
          {
            label: "Opt-Out of Automatic Data Collection:",
            text: "Depending on your device settings, you may limit the collection of advertising IDs.",
          },
        ],
      },
      {
        kind: "p",
        text: "If you are located in the European Union, you have the right to request access to and rectification or erasure of your personal data, or to restrict or object to certain data processing activities under GDPR.",
      },
    ],
  },
  {
    id: "security",
    title: "9. Security",
    blocks: [
      {
        kind: "p",
        text: "We use industry-standard security measures, including HTTPS encryption for data in transit, to protect your information. Your data is stored on secure servers, and we regularly review our security practices to safeguard personal information from unauthorized access and disclosure.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "10. Children’s Privacy",
    blocks: [
      {
        kind: "p",
        text: "Our applications are designed for users aged 16 and above and are not intended for individuals under the age of 16. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us at info@bubbleappstudio.com, and we will promptly take steps to delete it.",
      },
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    blocks: [
      {
        kind: "p",
        text: "We may update this Privacy Policy from time to time. Any changes will be posted on our official Privacy Policy page within the App or on our website. We encourage you to review this page periodically to stay informed about how we protect your data.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    blocks: [
      {
        kind: "p",
        text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
      },
      { kind: "p", text: CONTACT_EMAIL },
      {
        kind: "p",
        text: "We are committed to resolving concerns and appreciate the opportunity to learn and improve our services through your feedback.",
      },
      {
        kind: "p",
        text: "By using our applications, you acknowledge that you have read and understood this Privacy Policy and agree to our collection, use, and sharing of your information as described.",
      },
    ],
  },
];

const EMAIL = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/;

/** Body text with any email address turned into a mailto link. */
function Text({ children }: { children: string }) {
  return (
    <>
      {children.split(EMAIL).map((part, i) =>
        i % 2 === 1 ? (
          <a key={i} href={`mailto:${part}`}>
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

const bodyText = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.7,
  color: "#5b616e",
} as const;

function renderBlock(block: Block, i: number) {
  switch (block.kind) {
    case "p":
      return (
        <p key={i} style={bodyText}>
          <Text>{block.text}</Text>
        </p>
      );
    case "h3":
      return (
        <h3
          key={i}
          style={{
            margin: "8px 0 -4px",
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.4,
            color: "#0a0b0d",
          }}
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={i}
          style={{
            margin: 0,
            paddingLeft: 22,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {block.items.map((item) => (
            <li key={item.label ?? item.text} style={bodyText}>
              {item.label && (
                <strong style={{ fontWeight: 600, color: "#0a0b0d" }}>
                  {item.label}{" "}
                </strong>
              )}
              <Text>{item.text}</Text>
              {item.sub && (
                <ul
                  style={{
                    margin: "8px 0 0",
                    paddingLeft: 22,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {item.sub.map((s) => (
                    <li key={s} style={bodyText}>
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      );
  }
}

export default function PrivacyPage() {
  return (
    <main style={{ background: "#ffffff", color: "#0a0b0d", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "40px 24px 96px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <span aria-hidden>←</span> Homepage
        </Link>

        <header
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            padding: "48px 0 40px",
            borderBottom: "1px solid #dee1e6",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-1.4px",
            }}
          >
            Privacy Policy
          </h1>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "#7c828a",
            }}
          >
            Last Updated: 2025-05-14
          </span>
        </header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 44,
            paddingTop: 44,
          }}
        >
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: "-0.3px",
                }}
              >
                {section.title}
              </h2>
              {section.blocks.map(renderBlock)}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
