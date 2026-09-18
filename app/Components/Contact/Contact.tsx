"use client";

import { useTranslation } from "react-i18next";

type ContactProps = {
  email: string;
  whatsappNumber: string;
  linkedinUrl: string;
};

const Contact = ({ email, whatsappNumber, linkedinUrl }: ContactProps) => {
  const { t } = useTranslation();

  const contactLinks = [
    {
      id: "email",
      title: t("contact.links.email.title"),
      description: email,
      href: `mailto:${email}`,
      external: false,
    },
    {
      id: "whatsapp",
      title: t("contact.links.whatsapp.title"),
      description: t("contact.links.whatsapp.description"),
      href: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
      external: true,
    },
    {
      id: "linkedin",
      title: t("contact.links.linkedin.title"),
      description: t("contact.links.linkedin.description"),
      href: linkedinUrl,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24"
    >
      <div className="rounded-3xl border-2 border-border bg-card p-5 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <span className="text-xs font-bold tracking-widest text-secondary rtl:tracking-normal">
              {t("contact.eyebrow")}
            </span>

            <h2
              id="contact-heading"
              className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl"
            >
              {t("contact.title")}

              <span className="mt-2 block text-secondary">
                {t("contact.highlight")}
              </span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-[#a5b7c5] sm:text-lg sm:leading-8">
              {t("contact.description")}
            </p>

            <p className="text-sm leading-6 text-[#a5b7c5]">
              {t("contact.invitation")}
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-border bg-bg p-4 transition-colors duration-300 hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:p-5"
              >
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-white transition-colors group-hover:text-secondary sm:text-lg">
                    {link.title}
                  </h3>

                  <p className="mt-1 break-words text-sm leading-6 text-[#a5b7c5]">
                    <bdi dir={link.id === "email" ? "ltr" : "auto"}>
                      {link.description}
                    </bdi>
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-secondary transition-colors group-hover:border-secondary group-hover:bg-secondary group-hover:text-bg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="rtl:-scale-x-100"
                  >
                    <path
                      d="M7 17 17 7M7 7h10v10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
