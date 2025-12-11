// components/RukonGithubSection.jsx
import { useState } from "react";

export default function RukonGithubSection() {
  const username = "rukonpro"; // তোমার আসল ইউজারনেম

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Animated Background Blobs */}
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

          {/* 1. Current Streak */}
          <GithubCard title="Current Streak" gradient="from-purple-600 to-pink-600">
            <LazyImage
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true&border_radius=24&fire=ff6bcb&ring=a855f7&currStreakLabel=a855f7&sideLabels=cdd6f4&dates=89b4fa&currStreakNum=ffffff`}
              alt="GitHub Streak"
            />
          </GithubCard>

          {/* 2. Overall Stats */}
          <GithubCard title="GitHub Stats" gradient="from-cyan-600 to-blue-600">
            <LazyImage
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&border_radius=24&title_color=a855f7&icon_color=89b4fa&text_color=cdd6f4&bg_color=0d1117`}
              alt="GitHub Stats"
            />
          </GithubCard>

          {/* 3. Top Languages */}
          <GithubCard title="Top Languages" gradient="from-pink-600 to-rose-600">
            <LazyImage
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=donut&theme=tokyonight&hide_border=true&border_radius=24&langs_count=8&bg_color=0d1117&title_color=89b4fa&text_color=cdd6f4`}
              alt="Top Languages"
            />
          </GithubCard>

          {/* 4. Trophies */}
          <GithubCard title="GitHub Trophies" gradient="from-yellow-500 to-orange-500">
            <LazyImage
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&margin-w=15&margin-h=15&row=1&column=8`}
              alt="GitHub Trophies"
            />
          </GithubCard>

          {/* 5. Pinned Repositories - Full Width */}
          <div className="xl:col-span-12">
            <GithubCard title="Pinned Repositories" gradient="from-purple-600 via-pink-600 to-cyan-600" fullWidth>
              <LazyImage
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&theme=tokyonight&hide_border=true&border_radius=24&show_owner=true&bg_color=0d1117`}
                alt="Pinned Repositories"
              />
            </GithubCard>
          </div>

          {/* 6. Activity Graph - Full Width */}
          <div className="xl:col-span-12">
            <GithubCard title="Contribution Activity Graph" gradient="from-green-600 to-emerald-600" fullWidth>
              <LazyImage
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&border_radius=24&bg_color=0d1117&color=89b4fa&line=a855f7&point=cdd6f4`}
                alt="Activity Graph"
              />
            </GithubCard>
          </div>

          {/* 7. LeetCode Stats */}
          <GithubCard title="LeetCode Stats" gradient="from-orange-600 to-red-600">
            <LazyImage
              src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Inter&ext=heatmap`}
              alt="LeetCode Stats"
            />
          </GithubCard>

          {/* 8. Contribution Snake */}
          <GithubCard title="Contribution Snake" gradient="from-purple-600 via-pink-600 to-cyan-600" fullWidth>
            <LazyImage
              src={`https://raw.githubusercontent.com/\( {username}/ \){username}/output/github-contribution-grid-snake-dark.svg`}
              alt="Contribution Snake"
              fallbackSrc="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg"
              className="border-4 border-purple-500/30"
            />
          </GithubCard>

        </div>

        {/* CTA Button */}
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
            Explore My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// Reusable Card
function GithubCard({ title, gradient, children, fullWidth }) {
  return (
    <div className={`${fullWidth ? 'xl:col-span-12' : 'xl:col-span-6'} bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-xl transition-all duration-500 group`}>
      <h3 className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h3>
      {children}
    </div>
  );
}

// Lazy Image with Skeleton + Shimmer
function LazyImage({ src, alt, fallbackSrc, className = "" }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Skeleton */}
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 background-animate">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
        </div>
      )}

      {/* Image */}
      <img
        src={error && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`w-full transition-opacity duration-700 \( {loading ? 'opacity-0' : 'opacity-100'} \){className}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        loading="lazy"
      />

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .background-animate {
          background-size: 400% 100%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
