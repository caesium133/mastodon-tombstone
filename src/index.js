export default {
  async fetch(request) {
    const accept = request.headers.get("accept") || "";
    const url = new URL(request.url);

    const isAp =
      accept.includes("application/activity+json") ||
      accept.includes("application/ld+json") ||
      accept.includes("application/json");

    if (isAp) {
      const body = {
        "@context": "https://www.w3.org/ns/activitystreams",
        type: "Tombstone",
        id: url.origin + url.pathname,
        deleted: new Date().toISOString(),
        summary: "This server has been shut down.",
      };
      return new Response(JSON.stringify(body), {
        status: 410,
        headers: {
          "content-type": "application/activity+json; charset=utf-8",
          "cache-control": "public, max-age=3600",
        },
      });
    }

    return new Response("This Fediverse instance has been shut down.", {
      status: 410,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};