import BottomNav from "../components/BottomNav";

export default function Chat() {
  const messages = [
    {
      id: 1,
      role: "ai",
      text: "Hi James! I can answer any questions about your finances. What would you like to know?",
    },
    {
      id: 2,
      role: "user",
      text: "How much did I spend on eating out this month?",
    },
    {
      id: 3,
      role: "ai",
      text: "You've spent £148 on eating out this month across 6 transactions. That's £28 over your £120 budget. Your biggest expense was Dishoom at £47.",
    },
    {
      id: 4,
      role: "user",
      text: "What about groceries?",
    },
    {
      id: 5,
      role: "ai",
      text: "You've spent £187 on groceries this month — £63 under your £250 budget. You're on track! Most of that was Tesco (£23) and Sainsbury's (£54).",
    },
  ];

  const suggestions = [
    "Where did I overspend this month?",
    "What are my biggest expenses?",
    "How much have I saved?",
    "Any unusual transactions?",
  ];

  return (
    <main className="min-h-screen bg-gray-950 flex flex-col">

      <div className="bg-gray-900 border-b border-gray-800 px-4 py-4 shrink-0">
        <h1 className="text-lg font-medium text-white">Ask Ledgr</h1>
        <p className="text-sm text-gray-400">Powered by AI</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 mb-48">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                message.role === "user"
                  ? "bg-blue-600 text-white rounded-br-sm"
                  : "bg-gray-800 text-gray-200 rounded-bl-sm"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-20 left-0 right-0 px-4 mb-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="shrink-0 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-full px-3 py-2 hover:bg-gray-700 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Ask anything about your finances..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-500"
          />
          <button className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 hover:bg-blue-500 transition-colors">
            <span className="text-white text-base">↑</span>
          </button>
        </div>
      </div>

      <BottomNav />

    </main>
  );
}