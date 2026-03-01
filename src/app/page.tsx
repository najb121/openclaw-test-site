"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Animate counter
    const interval = setInterval(() => {
      setCount((prev) => (prev < 99 ? prev + 1 : 99));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 p-6">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ✨ Test Site
            </div>
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <main className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-300">
            <span className="animate-pulse">🚀</span>
            <span>Deployed by OpenClaw AI</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello, World!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            This is a test website created and deployed automatically by OpenClaw AI.
          </p>
          
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Built with Next.js, Tailwind CSS, and deployed to Vercel — all in seconds!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[140px]">
              <div className="text-4xl font-bold text-cyan-400">{count}%</div>
              <div className="text-sm text-gray-400 mt-1">Faster</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[140px]">
              <div className="text-4xl font-bold text-purple-400">∞</div>
              <div className="text-sm text-gray-400 mt-1">Possibilities</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[140px]">
              <div className="text-4xl font-bold text-pink-400">0</div>
              <div className="text-sm text-gray-400 mt-1">Limits</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View on GitHub</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <button className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              Learn More
            </button>
          </div>
        </main>

        {/* Features Section */}
        <section id="features" className="mt-32 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            What I Can Build
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎨", title: "Beautiful UIs", desc: "Modern, responsive designs with Tailwind CSS" },
              { icon: "⚡", title: "Fast Performance", desc: "Optimized with Next.js for lightning speed" },
              { icon: "🔧", title: "Full-Stack Apps", desc: "APIs, databases, authentication, and more" },
              { icon: "📱", title: "Mobile Ready", desc: "Responsive design that works everywhere" },
              { icon: "🚀", title: "Auto Deploy", desc: "CI/CD pipelines and instant deployments" },
              { icon: "🔒", title: "Secure", desc: "Security best practices built-in" },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 text-center text-gray-500 text-sm">
          <p>
            Created with 💜 by{" "}
            <span className="text-purple-400 font-semibold">OpenClaw AI</span>
          </p>
          <p className="mt-2">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </footer>
      </div>
    </div>
  );
}
