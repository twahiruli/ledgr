export default function Insights() {
  const categories = [
    { name: "Groceries", amount: 187, percentage: 15, icon: "🛒", color: "bg-green-500" },
    { name: "Eating out", amount: 148, percentage: 12, icon: "🍽️", color: "bg-red-500" },
    { name: "Transport", amount: 54, percentage: 4, icon: "🚇", color: "bg-blue-500" },
    { name: "Subscriptions", amount: 30, percentage: 2, icon: "📺", color: "bg-purple-500" },
    { name: "Shopping", amount: 35, percentage: 3, icon: "📦", color: "bg-amber-500" },
  ];

  const months = [
    { month: "Jan", amount: 980 },
    { month: "Feb", amount: 1100 },
    { month: "Mar", amount: 1050 },
    { month: "Apr", amount: 1320 },
    { month: "May", amount: 1284 },
  ];

  const maxAmount = Math.max(...months.map((m) => m.amount));

  return (
    <main className="min-h-screen bg-gray-950">

      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-4">
        <h1 className="text-lg font-medium text-white">Insights</h1>
        <p className="text-sm text-gray-400">May 2025</p>
      </div>

      {/* Spending trend chart */}
      <div className="mx-4 mt-4 bg-gray-900 rounded-2xl border border-gray-800 p-4">
        <h2 className="text-sm font-medium text-white mb-4">Monthly spending</h2>
        <div className="flex items-end gap-2 h-32">
          {months.map((m) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400">£{m.amount}</span>
              <div
                className={`w-full rounded-t-lg ${m.month === "May" ? "bg-blue-500" : "bg-gray-700"}`}
                style={{ height: `${(m.amount / maxAmount) * 80}px` }}
              ></div>
              <span className="text-xs text-gray-500">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI insight card */}
      <div className="mx-4 mt-4 bg-blue-950 rounded-2xl border border-blue-900 p-4">
        <div className="flex items-start gap-3">
          <span className="text-xl shrink-0">💡</span>
          <div>
            <p className="text-sm font-medium text-blue-300 mb-1">AI insight</p>
            <p className="text-sm text-blue-200 leading-relaxed">
              You spent 23% more in April than your 3-month average. Most of the increase came from eating out. Consider setting a stricter budget for next month.
            </p>
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="mx-4 mt-4">
        <h2 className="text-sm font-medium text-white mb-3">Spending by category</h2>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 divide-y divide-gray-800">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-3 p-4">
              <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-base shrink-0">
                {cat.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-gray-300">{cat.name}</span>
                  <span className="text-sm text-gray-400">£{cat.amount}</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cat.color}`}
                    style={{ width: `${cat.percentage * 8}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Month over month */}
      <div className="mx-4 mt-4 mb-24">
        <h2 className="text-sm font-medium text-white mb-3">Month over month</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-4">
            <p className="text-xs text-gray-400 mb-1">vs last month</p>
            <p className="text-xl font-medium text-red-400">+£236</p>
            <p className="text-xs text-gray-500 mt-1">You spent more</p>
          </div>
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-4">
            <p className="text-xs text-gray-400 mb-1">Biggest jump</p>
            <p className="text-xl font-medium text-white">🍽️</p>
            <p className="text-xs text-gray-500 mt-1">Eating out</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 flex justify-around py-3 px-4">
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <span className="text-xl">🏠</span>
          <span className="text-xs text-gray-500">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <span className="text-xl">📋</span>
          <span className="text-xs text-gray-500">Transactions</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <span className="text-xl">💬</span>
          <span className="text-xs text-gray-500">Chat</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <span className="text-xl">📊</span>
          <span className="text-xs text-blue-400">Insights</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <span className="text-xl">⚙️</span>
          <span className="text-xs text-gray-500">Settings</span>
        </div>
      </div>

    </main>
  );
}