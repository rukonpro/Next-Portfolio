import "./globals.css";
import "aos/dist/aos.css";
import "react-quill/dist/quill.snow.css";
import {inter} from "@/app/utils/fonts/fonts";
import { Analytics } from "@vercel/analytics/react";
import AppSessionProvider from "./Context/AppSessionProvider";
import CustomCursor from "@/app/components/customCursor/CustomCursor";
export const metadata = {
  title: "MERN Stack Dev. - Rukon.Pro",
  description:
    "Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.",
};

export default function RootLayout({ children }) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html
      lang="en"
      className="scroll-smooth scroll-"
      suppressHydrationWarning={isDev}
    >
      <body className={`${inter.className} overflow-x-hidden overflow-y-auto`}>
        <main className="!cursor-none bg-black">
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
