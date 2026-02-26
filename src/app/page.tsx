import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span>🚀</span>
          <span>Free & Open Source</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Ace Your{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tech Interview
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Master System Design and LeetCode with structured learning paths, 
          progress tracking, and curated content from top resources.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          {session ? (
            <Link 
              href="/dashboard" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Go to Dashboard →
            </Link>
          ) : (
            <Link 
              href="/api/auth/signin" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Get Started Free →
            </Link>
          )}
          <Link 
            href="/neetcode" 
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transition"
          >
            Explore NeetCode 150
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {[
          { value: "30+", label: "System Design Concepts", icon: "🏗️" },
          { value: "150", label: "LeetCode Problems", icon: "💻" },
          { value: "15", label: "Pattern Categories", icon: "🎯" },
          { value: "∞", label: "Practice Sessions", icon: "🔄" },
        ].map((stat, i) => (
          <div 
            key={i} 
            className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100 text-center"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Everything You Need to Prepare
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-indigo-100 hover:shadow-md transition cursor-pointer">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
              🏗️
            </div>
            <h3 className="text-xl font-semibold mb-3">System Design</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              30 core concepts from Hello Interview, including trade-offs, 
              estimation, and real design problems.
            </p>
            <Link href="/system-design" className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center gap-1">
              Start Learning →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-indigo-100 hover:shadow-md transition cursor-pointer">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
              💻
            </div>
            <h3 className="text-xl font-semibold mb-3">NeetCode 150</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The essential LeetCode problems with pattern labels, 
              difficulty filters, and progress tracking.
            </p>
            <Link href="/neetcode" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-1">
              Start Grinding →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-indigo-100 hover:shadow-md transition cursor-pointer">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
              🎴
            </div>
            <h3 className="text-xl font-semibold mb-3">Flashcards</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Interview-focused Q&A cards for quick review before your 
              interviews. Available in English and Chinese.
            </p>
            <Link href="/flashcards" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-1">
              Quick Review →
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Sync CTA */}
      {!session && (
        <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>✨</span>
              <span>Sync Across Devices</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Track Your Progress Everywhere
            </h2>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
              Sign in with GitHub to sync your learning progress, 
              track completed problems, and never lose your streak.
            </p>
            
            <Link
              href="/api/auth/signin"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Sign in with GitHub
            </Link>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-slate-500 text-sm">
        <p>
          Built with ❤️ for the dev community • 
          <a href="https://github.com/jzOcb/interview-prep-hub" className="text-indigo-600 hover:underline ml-1">
            Open Source on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
