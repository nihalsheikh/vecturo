import {
	convexAuthNextjsMiddleware,
	createRouteMatcher,
	nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
import {
	isBypassRoutes,
	isProtectedRoutes,
	isPublicRoutes,
} from "./lib/permissions";
import { NextResponse } from "next/server";

const PublicMatcher = createRouteMatcher(isPublicRoutes);
const BypassMatcher = createRouteMatcher(isBypassRoutes);
const ProtectedMatcher = createRouteMatcher(isProtectedRoutes);

export default convexAuthNextjsMiddleware(
	async (request, { convexAuth }) => {
		if (BypassMatcher(request)) return;

		// check if user is authenticated
		const authed = await convexAuth.isAuthenticated();

		// when user is authenticated, send them to "/dashboard"
		if (PublicMatcher(request) && authed) {
			return nextjsMiddlewareRedirect(request, `/dashboard`);
		}

		// when user is not authenticated, send user to "sign-in" or "sign-up" page
		if (ProtectedMatcher(request) && !authed) {
			return nextjsMiddlewareRedirect(request, `/auth/sign-in`);
		}

		return;
	},
	{
		cookieConfig: { maxAge: 60 * 60 * 24 * 30 }, // 30 days
	}
);

export const config = {
	// The following matcher runs middleware on all routes
	// except static assets.
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
