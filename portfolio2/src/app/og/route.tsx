/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const brand = "#3f8cff";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #10131a 60%, #0a0a0a 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
          Mike Innella
        </div>
        <div style={{ marginTop: 12, fontSize: 28, opacity: 0.9 }}>
          Frontend-focused Full-Stack Developer · Richmond, VA
        </div>
        <div
          style={{
            marginTop: 28,
            width: 120,
            height: 8,
            background: brand,
            borderRadius: 8,
          }}
        />
        <div style={{ marginTop: 24, fontSize: 22, opacity: 0.85, lineHeight: 1.4 }}>
          Clean, performant apps with React, Next.js, and TypeScript — polished UX,
          robust APIs, production-ready code.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
