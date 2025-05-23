import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the user is trying to access a protected route
  const isAuthRoute = request.nextUrl.pathname.startsWith("/login")
  const isProtectedRoute =
    !isAuthRoute &&
    !request.nextUrl.pathname.startsWith("/_next") &&
    !request.nextUrl.pathname.startsWith("/api") &&
    !request.nextUrl.pathname.includes(".")

  if (isProtectedRoute) {
    // Check for authentication token
    const authToken = request.cookies.get("authToken")?.value

    if (!authToken) {
      // If no token is found in cookies, check Authorization header
      const authHeader = request.headers.get("Authorization")
      const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null

      if (!tokenFromHeader) {
        // No token found, redirect to login
        return NextResponse.redirect(new URL("/login", request.url))
      }
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
