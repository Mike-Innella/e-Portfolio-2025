import { projects } from "@/content/projects";

export const runtime = "edge";

const buildScreenshotOneUrl = (targetUrl: string, accessKey: string) => {
  const url = new URL("https://api.screenshotone.com/take");
  url.searchParams.set("access_key", accessKey);
  url.searchParams.set("url", targetUrl);
  url.searchParams.set("format", "png");
  url.searchParams.set("viewport_width", "1200");
  url.searchParams.set("viewport_height", "630");
  url.searchParams.set("image_width", "1200");
  url.searchParams.set("image_height", "630");
  url.searchParams.set("full_page", "false");
  url.searchParams.set("device_scale_factor", "1");
  url.searchParams.set("reduced_motion", "true");
  url.searchParams.set("block_ads", "true");
  url.searchParams.set("block_trackers", "true");
  url.searchParams.set("block_cookie_banners", "true");
  url.searchParams.set("block_chats", "true");
  url.searchParams.set("block_banners_by_heuristics", "true");
  url.searchParams.set("wait_until", "domcontentloaded");
  url.searchParams.set("delay", "2");
  url.searchParams.set("timeout", "60");
  url.searchParams.set("navigation_timeout", "25");
  url.searchParams.set(
    "user_agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
  );
  return url.toString();
};

const buildFallbackOgUrl = (req: Request, slug?: string | null) => {
  const fallback = new URL("/api/og", req.url);
  if (slug) fallback.searchParams.set("slug", slug);
  return fallback.toString();
};

const fetchImageResponse = async (url: string) => {
  const imageRes = await fetch(url);
  if (!imageRes.ok) return null;
  const contentType = imageRes.headers.get("content-type") ?? "image/png";
  const body = await imageRes.arrayBuffer();
  return new Response(body, {
    headers: {
      "content-type": contentType,
      "cache-control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
};

const buildCandidateUrls = (liveLink: string) => {
  const candidates = new Set<string>();
  candidates.add(liveLink);

  try {
    const parsed = new URL(liveLink);
    if (parsed.hostname.startsWith("www.")) {
      const noWww = new URL(parsed.toString());
      noWww.hostname = parsed.hostname.replace(/^www\./, "");
      candidates.add(noWww.toString());
    } else {
      const withWww = new URL(parsed.toString());
      withWww.hostname = `www.${parsed.hostname}`;
      candidates.add(withWww.toString());
    }
  } catch {
    // ignore malformed URLs; fallback handled by caller
  }

  return Array.from(candidates);
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug")?.trim();
  const project = slug ? projects.find((p) => p.slug === slug) : undefined;
  const liveLink = project?.links?.find((link) => link.type === "live")?.link;
  const accessKey = process.env.SCREENSHOTONE_ACCESS_KEY;

  if (!liveLink || !accessKey) {
    const fallbackUrl = buildFallbackOgUrl(req, slug);
    return fetchImageResponse(fallbackUrl);
  }

  try {
    const candidates = buildCandidateUrls(liveLink);
    for (const candidate of candidates) {
      const screenshotUrl = buildScreenshotOneUrl(candidate, accessKey);
      const screenshotResponse = await fetchImageResponse(screenshotUrl);
      if (screenshotResponse) return screenshotResponse;
    }
    const fallbackUrl = buildFallbackOgUrl(req, slug);
    return fetchImageResponse(fallbackUrl);
  } catch {
    const fallbackUrl = buildFallbackOgUrl(req, slug);
    return fetchImageResponse(fallbackUrl);
  }
}
