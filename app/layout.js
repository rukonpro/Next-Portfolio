import "./globals.css";
import "aos/dist/aos.css";
import "react-quill/dist/quill.snow.css";
import {inter} from "@/app/utils/fonts/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import AppSessionProvider from "./Context/AppSessionProvider";
import CustomCursor from "@/app/components/ui/customCursor/CustomCursor";
export const metadata = {
  metadataBase: new URL("https://rukonpro.vercel.app"),
  title: {
    default: "Full Stack Dev. - Rukon.Pro",
    template: `%s - Rukon.Pro`,
  },
  description:
    "Explore the portfolio of Rukon Pro, a skilled Full stack developer with expertise in building robust web applications.",
  openGraph: {
    title: "Full Stack Dev. - Rukon.Pro",
    description: "Explore the portfolio of Rukon Pro, a skilled Full stack developer with expertise in building robust web applications.",
    url: "https://rukonpro.vercel.app",
    siteName: "Rukon.Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Full Stack Dev. - Rukon.Pro",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html
      lang="en"
      className="scroll-smooth "
      suppressHydrationWarning
    >
      <body className={`${inter.variable} font-sans overflow-x-hidden overflow-y-auto`}>
        <main className="!cursor-none bg-black relative">
          <CustomCursor />
          <AppSessionProvider>
            {children}
          </AppSessionProvider>
          <Analytics />
          <SpeedInsights/>
        </main>
      </body>
    </html>
  );
}
