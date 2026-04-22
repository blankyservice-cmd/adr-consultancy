import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ADR Consultancy - End-to-End AI Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1F4E78 0%, #152F4A 50%, #1F4E78 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #D4A574, #B8884F, #D4A574)",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: -1,
              background: "linear-gradient(90deg, #4A90E2, #6AABF0)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ADR
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 400,
              color: "white",
              letterSpacing: -0.5,
            }}
          >
            Consultancy
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: 0.5,
            marginBottom: 40,
          }}
        >
          End-to-End AI Solutions for Your Business
        </div>

        {/* Pillars */}
        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 900,
          }}
        >
          {[
            "Strategy",
            "Software",
            "Automation",
            "Marketing",
            "Sales",
            "Training",
            "Governance",
          ].map((pillar) => (
            <div
              key={pillar}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "8px 20px",
                fontSize: 16,
                color: "#D4A574",
                fontWeight: 600,
                border: "1px solid rgba(212,165,116,0.2)",
              }}
            >
              {pillar}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 16,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: 1,
          }}
        >
          adrconsultancy.ca
        </div>
      </div>
    ),
    { ...size }
  );
}
