import { NextResponse, type NextRequest } from "next/server";

const protectedPaths = ["/admin", "/invoicing", "/playbook", "/proposal"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect internal API routes (invoicing)
  if (pathname.startsWith("/api/invoicing")) {
    const session = request.cookies.get("admin_session")?.value;
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // Protect internal pages
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));
  if (!isProtected) {
    return NextResponse.next();
  }

  const session = request.cookies.get("admin_session")?.value;
  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/invoicing/:path*",
    "/playbook/:path*",
    "/proposal/:path*",
    "/api/invoicing/:path*",
  ],
};
