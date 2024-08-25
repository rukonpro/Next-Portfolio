"use client"
import './globals.css'
import 'aos/dist/aos.css';
import 'react-quill/dist/quill.snow.css';
import { chewy } from "@/app/utils/fonts/fonts";
import { SessionProvider } from 'next-auth/react';

// export const metadata = {
//   title: 'MERN Stack Dev. - Rukon.Pro',
//   description: 'Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.',
// }

export default function RootLayout({ children }) {
  const isDev = process.env.NODE_ENV === 'development';


  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={isDev}>
      <body className={chewy.className} >
        <main>
          <SessionProvider>
              {children}
          </SessionProvider>

        </main>
      </body>
    </html>
  )
}
