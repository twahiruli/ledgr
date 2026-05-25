import BottomNav from "../components/BottomNav";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-950">

      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Good morning,</p>
          <h1 className="text-lg font-medium text-white">James</h1>
        </div>
        <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center">
          <span className="text-sm font-medium text-blue-300">JD</span>
        </div>
      </div>

      {/* Hero card */}
      <div className="mx-4 mt-4 bg-gray-800 rounded-2xl p-5">
        <p className="text-sm text-gray-400 mb-1">Spent this month</p>
        <p className="text-4xl font-medium text-white mb-4">£1,284<span className="text-2xl text-gray-500">.50</span></p>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-700 rounded-xl p-3">
            <p className="text-xs text-gray-400 mb-1">Income</p>
            <p className="text-base font-medium text-white">£3,200</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-3">
            <p className="text-xs text-gray-400 mb-1">Remaining</p>
            <p className="text-base font-medium text-white">£1,915</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-3">
            <p className="text-xs text-gray-400 mb-1">Savings</p>
            <p className="text-base font-medium text-white">£400</p>
          </div>
        </div>
      </div>

      {/* Budgets */}
      <div className="mx-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-medium text-white">Budgets</h2>
          <span className="text-sm text-blue-400 cursor-pointer">See all</span>
        </div>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-4 flex flex-col gap-4">

          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-gray-300">🛒 Groceries</span>
              <span className="text-sm text-gray-400">£187 / £250</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{width: "75%"}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-gray-300">🍽️ Eating out</span>
              <span className="text-sm text-red-400">£148 / £120</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{width: "100%"}}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-gray-300">🚇 Transport</span>
              <span className="text-sm text-gray-400">£54 / £100</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{width: "54%"}}></div>
            </div>
          </div>

        </div>
      </div>

      {/* Recent transactions */}
      <div className="mx-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-medium text-white">Recent transactions</h2>
          <span className="text-sm text-blue-400 cursor-pointer">See all</span>
        </div>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 divide-y divide-gray-800">

          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-base">🛒</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Tesco Express</p>
              <p className="text-xs text-gray-500">Groceries · Today</p>
            </div>
            <span className="text-sm font-medium text-red-400">−£23.40</span>
          </div>

          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-base">🍽️</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Dishoom</p>
              <p className="text-xs text-gray-500">Eating out · Yesterday</p>
            </div>
            <span className="text-sm font-medium text-red-400">−£47.00</span>
          </div>

          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-base">🚇</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">TfL</p>
              <p className="text-xs text-gray-500">Transport · Yesterday</p>
            </div>
            <span className="text-sm font-medium text-red-400">−£4.80</span>
          </div>

          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-base">🏦</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Salary</p>
              <p className="text-xs text-gray-500">Income · 1 May</p>
            </div>
            <span className="text-sm font-medium text-green-400">+£3,200</span>
          </div>

        </div>
      </div>

      {/* Ask AI button */}
      <div className="mx-4 mt-6 mb-24">
        <button className="w-full border border-gray-700 bg-gray-900 rounded-2xl py-4 text-sm text-gray-300 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
          <span>💬</span>
          Ask AI about your finances
        </button>
      </div>

      <BottomNav />

    </main>
  );
}