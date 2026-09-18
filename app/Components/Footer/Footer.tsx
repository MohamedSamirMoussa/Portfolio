"use client";

import { useLan } from "@/app/hooks/useLan";

const translations = {
  en: {
    name: "Mohamed Samir Moussa",
    role: "Full-Stack & Odoo Developer",
    navigation: "Footer navigation",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    links: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  ar: {
    name: "محمد سمير موسى",
    role: "مطور تطبيقات ويب متكاملة وأنظمة Odoo",
    navigation: "روابط أسفل الصفحة",
    rights: "جميع الحقوق محفوظة.",
    backToTop: "العودة للأعلى",
    links: [
      { label: "أعمالي", href: "#work" },
      { label: "عنّي", href: "#about" },
      { label: "تواصل معي", href: "#contact" },
    ],
  },
};

const linkClassName =
  "inline-flex min-h-11 items-center text-sm text-[#a5b7c5] transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary";

const Footer = () => {
  const { language } = useLan();
  const t = translations[language];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-screen-xl px-5 py-8 sm:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#"
              className="text-lg font-bold text-white transition-colors hover:text-secondary"
            >
              {t.name}
            </a>

            <p className="mt-2 text-sm text-[#a5b7c5]">{t.role}</p>
          </div>

          <nav aria-label={t.navigation}>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {t.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClassName}>
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="https://github.com/MohamedSamirMoussa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  <span lang="en" dir="ltr">
                    GitHub ↗
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#a5b7c5] sm:text-sm">
            © {new Date().getFullYear()} {t.name}. {t.rights}
          </p>

          <a
            href="#"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
          >
            {t.backToTop}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
