import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();
  
  if (!session) {
    redirect("/api/auth/signin");
  }

  // Mock data - will be replaced with Supabase queries
  const stats = {
    neetcodeCompleted: 0,
    neetcodeTotal: 150,
    systemDesignCompleted: 0,
    systemDesignTotal: 30,
    flashcardsReviewed: 0,
    streak: 0,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {session.user?.name?.split(" ")[0]}! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Track your interview prep progress and keep grinding.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="text-sm text-gray-500 mb-1">NeetCode Progress</div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.neetcodeCompleted}/{stats.neetcodeTotal}
          </div>
          <div className="h-2 bg-gray-100 rounded-full mt-2">
            <div 
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${(stats.neetcodeCompleted / stats.neetcodeTotal) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="text-sm text-gray-500 mb-1">System Design</div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.systemDesignCompleted}/{stats.systemDesignTotal}
          </div>
          <div className="h-2 bg-gray-100 rounded-full mt-2">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${(stats.systemDesignCompleted / stats.systemDesignTotal) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="text-sm text-gray-500 mb-1">Flashcards Reviewed</div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.flashcardsReviewed}
          </div>
          <div className="text-sm text-gray-400 mt-2">Today</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="text-sm text-gray-500 mb-1">Current Streak</div>
          <div className="text-2xl font-bold text-gray-900">
            🔥 {stats.streak} days
          </div>
          <div className="text-sm text-gray-400 mt-2">Keep it up!</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link 
            href="/neetcode"
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="text-2xl">💻</div>
            <div>
              <div className="font-medium">Continue NeetCode</div>
              <div className="text-sm text-gray-500">Pick up where you left off</div>
            </div>
          </Link>
          
          <Link 
            href="/flashcards"
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="text-2xl">🎴</div>
            <div>
              <div className="font-medium">Review Flashcards</div>
              <div className="text-sm text-gray-500">Quick 5-minute review</div>
            </div>
          </Link>
          
          <Link 
            href="/system-design"
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="text-2xl">🏗️</div>
            <div>
              <div className="font-medium">Learn System Design</div>
              <div className="text-sm text-gray-500">Study core concepts</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="text-gray-500 text-center py-8">
          <div className="text-4xl mb-2">📝</div>
          <p>No activity yet. Start solving problems to see your progress!</p>
          <Link 
            href="/neetcode"
            className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
          >
            Start with NeetCode 150 →
          </Link>
        </div>
      </div>
    </div>
  );
}
