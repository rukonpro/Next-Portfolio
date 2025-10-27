import "./globals.css";
import "aos/dist/aos.css";
import "react-quill/dist/quill.snow.css";
import {inter} from "@/app/utils/fonts/fonts";
import { Analytics } from "@vercel/analytics/react";
import AppSessionProvider from "./Context/AppSessionProvider";
import CustomCursor from "@/app/components/ui/customCursor/CustomCursor";
export const metadata = {
  metadataBase: new URL('https://rukonpro.vercel.app'),
  title: "Full Stack Dev. - Rukon.Pro",
  description:
    "Explore the portfolio of Your Name, a skilled Full stack developer with expertise in building robust web applications.",
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
        </main>
      </body>
    </html>
  );
}
