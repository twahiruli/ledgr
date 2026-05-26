"use client";

import { useState } from "react";
import BottomNav from "../components/BottomNav";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      text: "Hi James! I can answer any questions about your finances. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Where did I overspend this month?",
    "What are my biggest expenses?",
    "How much have I saved?",
    "Any unusual transactions?",
  ];

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage = { id: messages.length + 1, role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      const aiMessage = {
        id: messages.length + 2,
        role: "ai",
        text: data.reply || "Sorry, I couldn't get a response.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: messages.length + 2, role: "ai", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

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

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3">
              <span className="text-gray-400 text-sm">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-20 left-0 right-0 px-4 mb-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => sendMessage(suggestion)}
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask anything about your finances..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-500"
          />
          <button
            onClick={() => sendMessage(input)}
            className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 hover:bg-blue-500 transition-colors"
          >
            <span className="text-white text-base">↑</span>
          </button>
        </div>
      </div>

      <BottomNav />

    </main>
  );
}