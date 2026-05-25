import BottomNav from "../components/BottomNav";

export default function Transactions() {
  const transactions = [
    { id: 1, name: "Tesco Express", category: "Groceries", date: "Today", amount: -23.40, icon: "🛒" },
    { id: 2, name: "Dishoom", category: "Eating out", date: "Yesterday", amount: -47.00, icon: "🍽️" },
    { id: 3, name: "TfL", category: "Transport", date: "Yesterday", amount: -4.80, icon: "🚇" },
    { id: 4, name: "Salary", category: "Income", date: "1 May", amount: 3200, icon: "🏦" },
    { id: 5, name: "Netflix", category: "Subscriptions", date: "1 May", amount: -17.99, icon: "📺" },
    { id: 6, name: "Sainsbury's", category: "Groceries", date: "30 Apr", amount: -54.20, icon: "🛒" },
    { id: 7, name: "Uber", category: "Transport", date: "29 Apr", amount: -12.50, icon: "🚗" },
    { id: 8, name: "Pret a Manger", category: "Eating out", date: "29 Apr", amount: -8.75, icon: "☕" },
    { id: 9, name: "Spotify", category: "Subscriptions", date: "28 Apr", amount: -11.99, icon: "🎵" },
    { id: 10, name: "Amazon", category: "Shopping", date: "27 Apr", amount: -34.99, icon: "📦" },
  ];

  return (
    <main className="min-h-screen bg-gray-950">

      <div className="bg-gray-900 border-b border-gray-800 px-4 py-4">
        <h1 className="text-lg font-medium text-white">Transactions</h1>
        <p className="text-sm text-gray-400">May 2025</p>
      </div>

      <div className="mx-4 mt-4">
        <input
          type="text"
          placeholder="Search transactions..."
          className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-600"
        />
      </div>

      <div className="flex gap-2 px-4 mt-3 overflow-x-auto pb-1">
        {["All", "Groceries", "Eating out", "Transport", "Subscriptions", "Shopping"].map((filter) => (
          <button
            key={filter}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border ${
              filter === "All"
                ? "bg-white text-gray-900 border-white"
                : "bg-transparent text-gray-400 border-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mx-4 mt-4 bg-gray-900 rounded-2xl border border-gray-800 divide-y divide-gray-800 mb-24">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-base shrink-0">
              {tx.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{tx.name}</p>
              <p className="text-xs text-gray-500">{tx.category} · {tx.date}</p>
            </div>
            <span className={`text-sm font-medium shrink-0 ${tx.amount > 0 ? "text-green-400" : "text-red-400"}`}>
              {tx.amount > 0 ? "+" : ""}£{Math.abs(tx.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <BottomNav />

    </main>
  );
}