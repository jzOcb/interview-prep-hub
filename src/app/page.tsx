import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Ace Your Tech Interview
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master System Design and LeetCode with structured learning paths, 
          progress tracking, and curated content from top resources.
        </p>
        <div className="flex gap-4 justify-center">
          {session ? (
            <Link
              href="/dashboard"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Go to Dashboard
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Get Started Free
            </Link>
          )}
          <Link
            href="/system-design"
            className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition"
          >
            Explore Content
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { value: "30+", label: "System Design Concepts" },
          { value: "150", label: "LeetCode Problems" },
          { value: "15", label: "Pattern Categories" },
          { value: "∞", label: "Practice Sessions" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-8 shadow-sm border">
          <div className="text-3xl mb-4">🏗️</div>
          <h3 className="text-xl font-semibold mb-2">System Design</h3>
          <p className="text-gray-600 mb-4">
            30 core concepts from Hello Interview, including trade-offs, 
            estimation, and real design problems.
          </p>
          <Link href="/system-design" className="text-indigo-600 font-medium hover:underline">
            Start Learning →
          </Link>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border">
          <div className="text-3xl mb-4">💻</div>
          <h3 className="text-xl font-semibold mb-2">NeetCode 150</h3>
          <p className="text-gray-600 mb-4">
            The essential LeetCode problems with pattern labels, 
            difficulty filters, and progress tracking.
          </p>
          <Link href="/neetcode" className="text-indigo-600 font-medium hover:underline">
            Start Grinding →
          </Link>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border">
          <div className="text-3xl mb-4">🎴</div>
          <h3 className="text-xl font-semibold mb-2">Flashcards</h3>
          <p className="text-gray-600 mb-4">
            Interview-focused Q&A cards for quick review before your 
            interviews. Available in English and Chinese.
          </p>
          <Link href="/flashcards" className="text-indigo-600 font-medium hover:underline">
            Quick Review →
          </Link>
        </div>
      </div>

      {/* CTA */}
      {!session && (
        <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Track Your Progress Across Devices
          </h2>
          <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
            Sign in with GitHub to sync your learning progress, 
            track completed problems, and never lose your streak.
          </p>
          <Link
            href="/api/auth/signin"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Sign in with GitHub
          </Link>
        </div>
      )}
    </div>
  );
}
