import { NextResponse } from "next/server";
import { createContactRecord } from "@/lib/airtable";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { error: "Invalid payload" },
      { status: 400 },
    );
  }

  await createContactRecord({
    name: body.name,
    email: body.email,
    phone: body.phone,
    message: body.message,
  });

  return NextResponse.json({ ok: true });
}
