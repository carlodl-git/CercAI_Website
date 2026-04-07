import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RicercAI — Agenzia GEO Italia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 16,
          }}
        >
          RicercAI
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Agenzia GEO Italia — Generative Engine Optimization
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#64748b",
            marginTop: 24,
          }}
        >
          Portiamo il tuo brand nelle risposte AI
        </div>
      </div>
    ),
    { ...size }
  );
}
