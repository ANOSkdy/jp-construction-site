"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/company", label: "Company" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact us" },
  { href: "/recruit", label: "Recruit" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-neutral-100">
        <div className="text-lg font-semibold tracking-widest text-white">
          建設株式会社
        </div>
        <nav
          className="flex flex-wrap items-center gap-4 text-xs text-neutral-200 sm:gap-6 sm:text-sm"
          aria-label="主要ナビゲーション"
        >
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "relative uppercase tracking-wide transition " +
                  (active
                    ? "text-yellow-400 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-yellow-400"
                    : "hover:text-white") +
                  " rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                }
                aria-current={active ? "page" : undefined}
                aria-label={`${item.label}ページへ移動`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
