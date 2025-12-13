// app/components/ui/Card/Card.js
export default function Card({ span = "xl:col-span-6", title, color = "purple", gradient, children }) {
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
    <div className={`${span} bg-white/5 backdrop-blur-2xl border ${colors[color] || ''} rounded-3xl p-8 shadow-2xl transition-all duration-500 group`}>
      <h3 className={`text-3xl font-bold text-center mb-6 ${gradient ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent` : ''}`}>
        {title}
      </h3>
      {children}
    </div>
  );
}