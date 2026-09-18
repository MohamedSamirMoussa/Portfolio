const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-screen-xl px-5 py-8 sm:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#"
              className="text-lg font-bold text-white transition-colors hover:text-secondary"
            >
              Mohamed Samir Moussa
            </a>

            <p className="mt-2 text-sm text-[#a5b7c5]">
              Full-Stack & Odoo Developer
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-[#a5b7c5] transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="https://github.com/MohamedSamirMoussa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm text-[#a5b7c5] transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#a5b7c5] sm:text-sm">
            © {new Date().getFullYear()} Mohamed Samir Moussa. All rights
            reserved.
          </p>

          <a
            href="#"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
          >
            Back to top
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 19V5m-7 7 7-7 7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;