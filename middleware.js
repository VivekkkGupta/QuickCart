import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/profile(.*)"]);

export default clerkMiddleware(async(auth, req) => {
  const { userId } = await auth(); // Get userId

  if (isProtectedRoute(req)) {
    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("returnUrl", req.url); // Store intended URL
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next(); // Allow authenticated users to proceed
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
