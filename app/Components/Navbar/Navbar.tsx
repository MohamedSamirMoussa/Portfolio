"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

import icon from "../../icon.png";

const links = [
  { labelKey: "navbar.work", href: "#work" },
  { labelKey: "navbar.about", href: "#about" },
  { labelKey: "navbar.contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage === "ar" ? "ar" : "en";
  const nextLanguage = language === "en" ? "ar" : "en";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    void i18n.changeLanguage(nextLanguage);
    setIsOpen(false);
  };

  return (
    <nav
      aria-label={t("navbar.mainNavigation")}
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-bg transition-[padding] duration-300 ease-in-out motion-reduce:transition-none ${
        scroll ? "py-2" : "py-0"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-x-4 px-4 py-3">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex min-w-0 items-center gap-2"
        >
          <Image src={icon} alt={t("navbar.logo")} className="h-auto w-10" />
        </Link>

        <div className="flex items-center gap-2 md:order-2">
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hidden rounded-lg bg-bg px-4 py-2 text-sm font-medium text-white outline-1 outline-border hover:bg-secondary hover:text-bg hover:outline-0 sm:inline-flex"
          >
            {t("navbar.getInTouch")}
          </Link>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("navbar.switchLanguage")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
          >
            <span
              lang={nextLanguage}
              dir={nextLanguage === "ar" ? "rtl" : "ltr"}
            >
              {nextLanguage === "ar" ? "العربية" : "English"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-secondary md:hidden"
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
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:bg-gray-800 hover:text-gray-300 md:px-0 md:hover:bg-transparent"
                  >
                    {t(link.labelKey)}
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
