import './globals.css'
import {chewy} from "@/app/utils/fonts/fonts";


export const metadata = {
  title: 'MERN Stack Dev. - Rukon.Pro',
  description: 'Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={chewy.className}>
      {children}
      </body>
    </html>
  )
}
