import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@aquevrasolutions.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "AquevraAdmin2024!";
const SESSION_COOKIE = "aquevra_admin_session";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD && ADMIN_PASSWORD !== "") {
      const cookieStore = await cookies();
      cookieStore.set(SESSION_COOKIE, "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  return NextResponse.json({ success: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  return NextResponse.json({ authenticated: !!session });
}
