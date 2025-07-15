import { NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";

import i18nConfig from "../i18nConfig";

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO robots file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|mp4)$).*)",
  ],
};
