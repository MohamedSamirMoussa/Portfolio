"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import me from "../../../public/me.jpeg";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-border"
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-x-4 px-4 py-3">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex min-w-0 items-center gap-2"
        >
          <Image
            src={me}
            alt="Mohamed Samir Moussa"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />

          <span className="text-sm font-semibold hover:text-gray-300 text-gray-400 sm:text-base">
            Mohamed Samir Moussa
          </span>
        </Link>

        <div className="flex items-center gap-2 md:order-2">
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hidden rounded-lg bg-bg outline-1 outline-border px-4 py-2 text-sm font-medium text-white hover:bg-secondary hover:text-bg hover:outline-0 sm:inline-flex"
          >
            Get started
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600 md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={isOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div
          id="navbar-menu"
          className={`grid w-full transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none md:visible md:order-1 md:w-auto md:grid-rows-[1fr] md:opacity-100 ${
            isOpen
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="mt-3 flex flex-col gap-1 border-t border-border py-3 md:mt-0 md:flex-row md:gap-6 md:border-0 md:py-0">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-300 md:px-0 md:hover:bg-transparent transition-all duration-300 ease-in-out"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
