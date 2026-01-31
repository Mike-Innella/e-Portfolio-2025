import { ImageResponse } from "@vercel/og";
import { projects } from "@/content/projects";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

const truncate = (text: string, max: number) => {
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 1)).trim()}…`;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug")?.trim();
  const project = slug ? projects.find((p) => p.slug === slug) : undefined;

  const title = project?.title ?? "Project not found";
  const subtitle =
    project?.subtitle ?? project?.summary ?? "Mike Innella Portfolio";
  const tags = project?.tags ?? [];

  const response = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #10131a 60%, #0a0a0a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.4 }}>
              Mike Innella
            </div>
            <div style={{ fontSize: 16, opacity: 0.7, letterSpacing: 1.4 }}>
              PORTFOLIO
            </div>
          </div>

          <div
            style={{
              width: 170,
              height: 110,
              borderRadius: 14,
              border: "1px solid #2b3346",
              background: "linear-gradient(135deg, #0f1116, #161b24)",
              display: "flex",
              flexDirection: "column",
              padding: "10px 12px",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ff5f56",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#27c93f",
                }}
              />
            </div>
            <div
              style={{
                height: 2,
                width: "100%",
                background: "linear-gradient(90deg, #3f8cff, transparent)",
                borderRadius: 999,
                opacity: 0.7,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 18,
            padding: "0 60px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
            {truncate(title, 48)}
          </div>
          <div style={{ fontSize: 26, opacity: 0.85, lineHeight: 1.4 }}>
            {truncate(subtitle, 140)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            minHeight: 40,
          }}
        >
          {tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              style={{
                padding: "6px 14px",
                fontSize: 16,
                borderRadius: 999,
                border: "1px solid #2a3346",
                background: "rgba(19, 23, 32, 0.8)",
                color: "#d2e1f7",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  );

  response.headers.set(
    "Cache-Control",
    "public, max-age=86400, stale-while-revalidate=604800"
  );

  return response;
}
