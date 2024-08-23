import React from "react";
import HomePage from "@/app/home/page";


export const metadata = {
  title: 'MERN Stack Dev. - Rukon.Pro',
  description: 'Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.',
}


export default async function Home() {

  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  )
}
