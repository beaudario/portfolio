export async function GET() {
  return new Response(
    JSON.stringify({
      "m.homeserver": {
        base_url: "https://matrix.dariodouma.com",
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}

