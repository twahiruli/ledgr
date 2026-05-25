"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Home", icon: "🏠" },
  { href: "/transactions", label: "Transactions", icon: "📋" },
  { href: "/chat", label: "Chat", icon: "💬" },
  { href: "/insights", label: "Insights", icon: "📊" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 flex justify-around py-3 px-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex flex-col items-center gap-1 cursor-pointer no-underline"
        >
          <span className="text-xl">{link.icon}</span>
          <span className={`text-xs ${pathname === link.href ? "text-blue-400" : "text-gray-500"}`}>
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
}