// app/components/ui/LazyImage/LazyImage.js
"use client"
import { useState } from "react";

export default function LazyImage({ src, fallbackSrc, alt, className = "" }) {
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
        className={`w-full transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'} ${className}`}
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