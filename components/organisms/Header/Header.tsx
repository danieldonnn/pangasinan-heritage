"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-400 bg-white">
      <nav className="mx-auto flex items-center justify-between px-2 py-3 md:px-10 md:py-0">

        {/* Logo */}
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl font-bold leading-none text-[#2F8CBF] md:text-3xl">
              PANGASINAN
            </h1>

            <p className="text-sm font-semibold text-[#2F8CBF] md:text-1xl">
              PROVINCIAL TOURISM
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-11 md:-translate-y-2 md:flex">

          <Link
            href="/"
            className={
              pathname === "/"
                ? "rounded-full bg-[#2F8CBF] px-3 py-2 text-base font-semibold text-white"
                : "px-3 py-2 text-base font-semibold text-gray-900 hover:text-[#2F8CBF]"
            }
          >
            Home
          </Link>

          <Link
            href="/heritage"
            className={
              pathname === "/heritage"
                ? "rounded-full bg-[#2F8CBF] px-3 py-2 text-base font-semibold text-white"
                : "px-3 py-2 text-base font-semibold text-gray-900 hover:text-[#2F8CBF]"
            }
          >
            Heritage Site
          </Link>

          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "rounded-full bg-[#2F8CBF] px-3 py-2 text-base font-semibold text-white"
                : "px-3 py-2 text-base font-semibold text-gray-900 hover:text-[#2F8CBF]"
            }
          >
            About
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded-full bg-[#2F4858] px-3 py-2 text-xl text-white"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={
                pathname === "/"
                  ? "rounded-full bg-[#2F8CBF] px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full px-4 py-2 text-sm font-semibold text-gray-900"
              }
            >
              Home
            </Link>

            <Link
              href="/heritage"
              onClick={() => setMenuOpen(false)}
              className={
                pathname === "/heritage"
                  ? "rounded-full bg-[#2F8CBF] px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full px-4 py-2 text-sm font-semibold text-gray-900"
              }
            >
              Heritage Site
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={
                pathname === "/about"
                  ? "rounded-full bg-[#2F8CBF] px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full px-4 py-2 text-sm font-semibold text-gray-900"
              }
            >
              About
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}