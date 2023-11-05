import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/dashboard", req.url));

  // return NextResponse.next()
}

export const config = {
  matcher: "/"
}