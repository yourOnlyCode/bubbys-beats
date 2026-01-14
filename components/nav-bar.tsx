"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Music } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/cinema", label: "Cinema" },
    { href: "/video-games", label: "Video Games" },
    { href: "/beats", label: "Beats" },
    { href: "/custom-work", label: "Custom Work" },
    { href: "/licenses", label: "Licenses" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center gap-6 border border-gray-200">
        <Link href="/" className="flex items-center gap-2 font-bold text-purple-600 mr-2">
          <Music size={24} />
          <span className="hidden sm:inline">Bubby&apos;s</span>
        </Link>
        
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
