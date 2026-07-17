export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Contact form submission:", data);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
}
