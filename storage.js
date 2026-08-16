import { getStore } from "@netlify/blobs";

// One shared "drawer" for the whole friend group's data.
const store = () => getStore("gangcobra");

export default async (req) => {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");

  if (!key) {
    return new Response(JSON.stringify({ error: "missing key" }), { status: 400 });
  }

  if (req.method === "GET") {
    const value = await store().get(key);
    return new Response(JSON.stringify({ value: value ?? null }), {
      headers: { "content-type": "application/json" },
    });
  }

  if (req.method === "POST") {
    const body = await req.json();
    await store().set(key, body.value);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "content-type": "application/json" },
    });
  }

  return new Response("method not allowed", { status: 405 });
};

export const config = { path: "/api/storage" };
