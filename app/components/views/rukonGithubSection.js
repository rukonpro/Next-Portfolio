// next/image ইম্পোর্ট না করলেও চলবে যদি সব ছবি <img> ট্যাগ দিয়ে লোড করেন।
// import Image from "next/image";

export default function RukonGithubSection() {
  const username = "rukonpro";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Blobs (ডিজাইন অপরিবর্তিত) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          GitHub Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-12 gap-8">

          {/* Current Streak (using <img>) */}
          <div className="lg:col-span-7 bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/30 transition-all">
            <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Current Streak</h3>
            <img
              // ✅ সংশোধিত src: https:// এবং ? যুক্ত করা হয়েছে
              src={`https://streak-stats.demolab.com/${username}?theme=transparent&background=00000000&border=7c3aed&stroke=a855f7&ring=a855f7&fire=a855f7&currStreakNum=fff&sideNums=a855f7&currStreakLabel=a855f7&sideLabels=fff&dates=8899ff&border_radius=24`}
              alt="GitHub Streak"
              width={900}
              height={300}
              className="w-full rounded-2xl"
            />
          </div>

          {/* Overall Stats (using <img>) */}
          <div className="lg:col-span-5 bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/30 transition-all">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Overall Stats</h3>
            <img
              // ✅ সংশোধিত src: https:// এবং /api?username= যুক্ত করা হয়েছে
              src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=transparent&bg_color=00000000&border_color=7c3aed&text_color=fff&title_color=a855f7&icon_color=a855f7&hide_border=false&show_icons=true&count_private=true&include_all_commits=true&border_radius=24`}
              alt="GitHub Stats"
              width={700}
              height={300}
              className="w-full rounded-2xl"
            />
          </div>

          {/* Top Languages (using <img>) */}
          <div className="lg:col-span-5 bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/30 transition-all">
            <h3 className="text-2xl font-bold text-pink-300 mb-6 text-center">Top Languages</h3>
            <img
              // ✅ সংশোধিত src: https:// এবং /api/top-langs?username= যুক্ত করা হয়েছে
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&layout=donut&theme=transparent&bg_color=00000000&border_color=06b6d4&text_color=fff&title_color=06b6d4&hide_border=false&border_radius=24`}
              alt="Top Languages"
              width={700}
              height={400}
              className="w-full rounded-2xl"
            />
          </div>

          {/* Trophy (using <img>) */}
          <div className="lg:col-span-7 bg-black/40 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/30 transition-all">
            <h3 className="text-2xl font-bold text-pink-300 mb-6 text-center">Achievements</h3>
            <img
              // ✅ সংশোধিত src: https:// এবং ?username= যুক্ত করা হয়েছে
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=onestar&no-frame=true&margin-w=20&row=1&column=8`}
              alt="GitHub Trophy"
              width={1000}
              height={300}
              className="w-full rounded-2xl"
            />
          </div>

          {/* Snake Animation – Full Width (using <img>) */}
          <div className="lg:col-span-12 bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Contribution Snake
            </h3>
            <img
              // ✅ সংশোধিত src: আপনার প্রোফাইল রেপোজিটরি থেকে লোড করার জন্য সঠিক URL
              src={`https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg`}
              alt="GitHub Contribution Snake"
              width={1400}
              height={600}
              className="w-full rounded-2xl border-4 border-purple-500/30"
            />
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a
              href={`https://github.com/${username}`} // GitHub লিংক ঠিক করা হলো
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:from-purple-500 hover:to-cyan-500 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Explore All Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}