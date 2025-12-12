"use client"
// components/RukonGithubSection.jsx
import Card from "@/app/components/ui/Card/Card";
import Image from "next/image";
import { useState } from "react";

const githubCards = [
    {
        id: 1,
        span: "xl:col-span-7",
        title: "Current Streak",
        color: "purple",
        imgSrc: (username) => `https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=tokyonight&hide_border=true&border_radius=24&fire=ff6bcb&ring=a855f7`,
    },
    {
        id: 2,
        span: "xl:col-span-5",
        title: "GitHub Stats",
        color: "cyan",
        imgSrc: (username) => `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&border_radius=24`,
    },
    {
        id: 3,
        span: "xl:col-span-5",
        title: "Top Languages",
        color: "pink",
        imgSrc: (username) => `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=donut&theme=tokyonight&hide_border=true&border_radius=24&langs_count=10`,
    },
    {
        id: 4,
        span: "xl:col-span-7",
        title: "GitHub Trophies",
        color: "yellow",
        imgSrc: (username) => `https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&row=1&column=8&margin-w=15`,
    },
    {
        id: 6,
        span: "xl:col-span-6",
        title: "Profile Views",
        color: "pink",
        imgSrc: (username) => `https://komarev.com/ghpvc/?username=${username}&color=7c3aed&style=for-the-badge`,
    },
    {
        id: 7,
        span: "xl:col-span-6",
        title: "Total Stars Earned",
        color: "yellow",
        imgSrc: (username) => `https://img.shields.io/github/stars/${username}?affiliations=OWNER&style=for-the-badge&color=ff6bcb`,
    },
    {
        id: 8,
        span: "xl:col-span-12",
        title: "Pinned Repositories",
        gradient: "from-purple-600 via-pink-600 to-cyan-600",
        imgSrc: (username) => `https://github-readme-stats.vercel.app/api/pin/?username=${username}&theme=tokyonight&hide_border=true&show_owner=true`,
    },
    {
        id: 9,
        span: "xl:col-span-12",
        title: "Activity Graph",
        color: "green",
        imgSrc: (username) => `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true`,
    },
    {
        id: 10,
        span: "xl:col-span-6",
        title: "LeetCode Mastery",
        color: "orange",
        imgSrc: (username) => `https://leetcard.jacoblin.cool/${username}?theme=dark&ext=heatmap`,
    },
    {
        id: 11,
        span: "xl:col-span-6",
        title: "Contribution Snake",
        gradient: "from-purple-600 to-cyan-600",
        imgSrc: (username) => `https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg`,
        fallbackSrc: "https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg",
        className: "border-4 border-purple-500/30",
    },
    {
        id: 12,
        span: "xl:col-span-12",
        title: "Advanced Metrics",
        gradient: "from-indigo-600 via-purple-600 to-pink-600",
        imgSrc: (username) => `https://metrics.lecoq.io/${username}?template=classic&isocalendar=true&languages=true&achievements=true&habits=true`,
    },
    {
        id: 13,
        span: "xl:col-span-12",
        title: "rukonpro.exe",
        gradient: "from-purple-600 via-pink-600 to-cyan-600",
        imgSrc: () => "https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=36&duration=4000&pause=1000&color=A855F7&center=true&vCenter=true&width=1000&lines=Full+Stack+Sorcerer;Next.js+%26+Node.js+Master;Building+the+Future;Never+Stop+Coding+%F0%9F%94%A5",
    },
    {
        id: 14,
        span: "xl:col-span-6",
        title: "Most Used Languages",
        color: "teal",
        imgSrc: (username) => `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`,
    },
    {
        id: 15,
        span: "xl:col-span-6",
        title: "Portfolio Visitors",
        color: "green",
        imgSrc: () => "https://visitor-badge.laobi.icu/badge?page_id=rukonpro.portfolio&left_color=1a1a1a&right_color=7c3aed",
    },
    {
        id: 16,
        span: "xl:col-span-12",
        title: "My Badges & Achievements",
        gradient: "from-blue-600 to-purple-600",
        imgSrc: (username) => `https://holopin.me/${username}`,
    },
    {
        id: 17,
        span: "xl:col-span-6",
        title: "Dev Card",
        color: "indigo",
        imgSrc: (username) => `https://api.devcard.dev/@${username}?theme=dark`,
    },
    {
        id: 18,
        span: "xl:col-span-6",
        title: "Support My Work",
        color: "rose",
        imgSrc: () => "https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black",
    },
    {
        id: 19,
        span: "xl:col-span-12",
        title: "neofetch --ascii",
        color: "green",
        imgSrc: (username) => `https://raw.githubusercontent.com/${username}/${username}/main/neofetch.svg`,
        fallbackSrc: "https://i.imgur.com/5l0c9gP.png",
    },
    {
        id: 20,
        span: "xl:col-span-12",
        title: "My Philosophy",
        gradient: "from-gray-700 to-gray-900",
        imgSrc: () => "https://quotes-github-readme.vercel.app/api?theme=dark&quote=Code+is+like+humor.+When+you+have+to+explain+it%2C+it%E2%80%99s+bad.",
    },
];


export default function RukonGithubSection() {
  const username = "rukonpro";

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          GitHub Universe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8">
            {githubCards.map(card => {
                const [currentSrc, setCurrentSrc] = useState(card.imgSrc(username));
                const handleError = () => {
                    if (card.fallbackSrc && currentSrc !== card.fallbackSrc) {
                        setCurrentSrc(card.fallbackSrc);
                    }
                };

                return (
                    <Card key={card.id} {...card}>
                        <Image
                            src={currentSrc}
                            alt={card.title}
                            width={1200}
                            height={400}
                            priority={card.id <= 4}
                            className={`${card.className || ''} rounded-2xl`}
                            style={{ width: '100%', height: 'auto' }}
                            onError={handleError}
                        />
                    </Card>
                );
            })}
        </div>
      </div>
    </section>
  );
}