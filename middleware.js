import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuthPage = req.nextUrl.pathname === "/auth/signin" || req.nextUrl.pathname === "/auth/signup";

    // If user is logged in and tries to access signin/signup pages, redirect to home
    if (token && token.id && isAuthPage) {
      return NextResponse.redirect(new URL("/", req.url)); // Use redirect, as it's the correct behavior
    }

    // Admin dashboard access control
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      token?.role !== "ADMIN"
    ) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage = req.nextUrl.pathname === "/auth/signin" || req.nextUrl.pathname === "/auth/signup";

        // Allow unauthenticated users to access auth pages
        if (!token && isAuthPage) {
          return true; // Allow access to signin/signup if not logged in
        }

        // For all other matched routes (like dashboard, profile), require authentication
        // If not authenticated, withAuth will redirect to pages.signIn
        return !!token;
      },
    },
    pages: {
      signIn: "/auth/signin",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/profile", "/auth/signin", "/auth/signup"],
};
