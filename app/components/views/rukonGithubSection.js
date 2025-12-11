"use client"
// components/RukonGithubSection.jsx
import { useState } from "react";

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
        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          GitHub Universe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8">

          {/* 1. Current Streak - Big */}
          <Card span="xl:col-span-7" title="Current Streak" color="purple">
            <LazyImage src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true&border_radius=24&fire=ff6bcb&ring=a855f7`} />
          </Card>

          {/* 2. GitHub Stats */}
          <Card span="xl:col-span-5" title="GitHub Stats" color="cyan">
            <LazyImage src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&border_radius=24`} />
          </Card>

          {/* 3. Top Languages Donut */}
          <Card span="xl:col-span-5" title="Top Languages" color="pink">
            <LazyImage src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=donut&theme=tokyonight&hide_border=true&border_radius=24&langs_count=10`} />
          </Card>

          {/* 4. Trophies */}
          <Card span="xl:col-span-7" title="GitHub Trophies" color="yellow">
            <LazyImage src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&row=1&column=8&margin-w=15`} />
          </Card>

          {/* 5. 3D Skyline 2024 */}
          <Card span="xl:col-span-12" title="3D Skyline 2024" gradient="from-blue-600 to-purple-600">
            <LazyImage src={`https://skyline.github.com/${username}/2024`} />
          </Card>

          {/* 6. Profile Views */}
          <Card span="xl:col-span-6" title="Profile Views" color="pink">
            <LazyImage src={`https://komarev.com/ghpvc/?username=${username}&color=7c3aed&style=for-the-badge`} />
          </Card>

          {/* 7. Total Stars */}
          <Card span="xl:col-span-6" title="Total Stars Earned" color="yellow">
            <LazyImage src={`https://img.shields.io/github/stars/${username}?affiliations=OWNER&style=for-the-badge&color=ff6bcb`} />
          </Card>

          {/* 8. Pinned Repos */}
          <Card span="xl:col-span-12" title="Pinned Repositories" gradient="from-purple-600 via-pink-600 to-cyan-600">
            <LazyImage src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&theme=tokyonight&hide_border=true&show_owner=true`} />
          </Card>

          {/* 9. Activity Graph */}
          <Card span="xl:col-span-12" title="Activity Graph" color="green">
            <LazyImage src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true`} />
          </Card>

          {/* 10. LeetCode Stats */}
          <Card span="xl:col-span-6" title="LeetCode Mastery" color="orange">
            <LazyImage src={`https://leetcard.jacoblin.cool/${username}?theme=dark&ext=heatmap`} />
          </Card>

          {/* 11. Contribution Snake */}
          <Card span="xl:col-span-6" title="Contribution Snake" gradient="from-purple-600 to-cyan-600">
            <LazyImage src={`https://raw.githubusercontent.com/\( {username}/ \){username}/output/github-contribution-grid-snake-dark.svg`} fallbackSrc="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg" className="border-4 border-purple-500/30" />
          </Card>

          {/* 12. Advanced Metrics */}
          <Card span="xl:col-span-12" title="Advanced Metrics" gradient="from-indigo-600 via-purple-600 to-pink-600">
            <LazyImage src={`https://metrics.lecoq.io/${username}?template=classic&isocalendar=true&languages=true&achievements=true&habits=true`} />
          </Card>

          {/* 13. Typing SVG */}
          <Card span="xl:col-span-12" title="rukonpro.exe" gradient="from-purple-600 via-pink-600 to-cyan-600">
            <LazyImage src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=36&duration=4000&pause=1000&color=A855F7&center=true&vCenter=true&width=1000&lines=Full+Stack+Sorcerer;Next.js+%26+Node.js+Master;Building+the+Future;Never+Stop+Coding+%F0%9F%94%A5" />
          </Card>

          {/* 14. Language Bar */}
          <Card span="xl:col-span-6" title="Most Used Languages" color="teal">
            <LazyImage src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`} />
          </Card>

          {/* 15. Visitor Badge */}
          <Card span="xl:col-span-6" title="Portfolio Visitors" color="green">
            <LazyImage src="https://visitor-badge.laobi.icu/badge?page_id=rukonpro.portfolio&left_color=1a1a1a&right_color=7c3aed" />
          </Card>

          {/* 16. Holopin Badges */}
          <Card span="xl:col-span-12" title="My Badges & Achievements" gradient="from-blue-600 to-purple-600">
            <LazyImage src={`https://holopin.me/${username}`} />
          </Card>

          {/* 17. Dev Card */}
          <Card span="xl:col-span-6" title="Dev Card" color="indigo">
            <LazyImage src={`https://api.devcard.dev/@${username}?theme=dark`} />
          </Card>

          {/* 18. Support Me */}
          <Card span="xl:col-span-6" title="Support My Work" color="rose">
            <LazyImage src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" />
          </Card>

          {/* 19. Neofetch Style */}
          <Card span="xl:col-span-12" title="neofetch --ascii" color="green">
            <LazyImage src={`https://raw.githubusercontent.com/\( {username}/ \){username}/main/neofetch.svg`} fallbackSrc="https://i.imgur.com/5l0c9gP.png" />
          </Card>

          {/* 20. Final Quote */}
          <Card span="xl:col-span-12" title="My Philosophy" gradient="from-gray-700 to-gray-900">
            <LazyImage src="https://quotes-github-readme.vercel.app/api?theme=dark&quote=Code+is+like+humor.+When+you+have+to+explain+it%2C+it%E2%80%99s+bad." />
          </Card>

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/rukonpro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-600/60"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Enter My GitHub Empire
          </a>
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function Card({ span = "xl:col-span-6", title, color = "purple", gradient, children }) {
  const colors = {
    purple: "border-purple-500/30 hover:shadow-purple-500/40 text-purple-300",
    cyan: "border-cyan-500/30 hover:shadow-cyan-500/40 text-cyan-300",
    pink: "border-pink-500/30 hover:shadow-pink-500/40 text-pink-300",
    yellow: "border-yellow-500/30 hover:shadow-yellow-500/40 text-yellow-300",
    green: "border-green-500/30 hover:shadow-green-500/40 text-green-400",
    orange: "border-orange-500/30 hover:shadow-orange-500/40 text-orange-300",
    teal: "border-teal-500/30 hover:shadow-teal-500/40 text-teal-300",
    indigo: "border-indigo-500/30 hover:shadow-indigo-500/40 text-indigo-300",
    rose: "border-rose-500/30 hover:shadow-rose-500/40 text-rose-300",
  };

  return (
    <div className={`\( {span} bg-white/5 backdrop-blur-2xl border \){colors[color] || ''} rounded-3xl p-8 shadow-2xl transition-all duration-500 group`}>
      <h3 className={`text-3xl font-bold text-center mb-6 \( {gradient ? `bg-gradient-to-r \){gradient} bg-clip-text text-transparent` : ''}`}>
        {title}
      </h3>
      {children}
    </div>
  );
}

// Lazy Image with Skeleton
function LazyImage({ src, fallbackSrc, alt, className = "" }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 background-animate">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
        </div>
      )}
      <img
        src={error && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`w-full transition-opacity duration-700 \( {loading ? 'opacity-0' : 'opacity-100'} \){className}`}
        onLoad={() => setLoading(false)}
        onError={() => { setLoading(false); setError(true); }}
        loading="lazy"
      />
      <style jsx>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .background-animate { background-size: 400% 100%; animation: gradient 3s ease infinite; }
        @keyframes gradient { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      `}</style>
    </div>
  );
}