"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const toolkit = [
  {
    id: "frontend",
    className: "fe",
    titleKey: "about.toolkit.frontend",
    technologies: "React · Next.js · TypeScript",
  },
  {
    id: "backend",
    className: "be",
    titleKey: "about.toolkit.backend",
    technologies: "Node.js · Express · Socket.IO",
  },
  {
    id: "dataErp",
    className: "erp",
    titleKey: "about.toolkit.dataErp",
    technologies: "PostgreSQL · Odoo",
  },
  {
    id: "tools",
    className: "tools",
    titleKey: "about.toolkit.tools",
    technologies: "Git · GitHub · Postman",
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-24">
      <div className="inner grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="content w-full min-w-0">
          <div className="upper flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <span className="text-xs font-bold tracking-wide text-secondary rtl:tracking-normal">
              {t("about.eyebrow")}
            </span>

            <h2 className="break-words text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
              {t("about.title")}
            </h2>

            <p className="text-base leading-7 text-[#a5b7c5] lg:text-lg lg:leading-8">
              {t("about.description")}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://www.linkedin.com/in/mohammad-samir-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl border-2 border-border bg-bg px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-secondary hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:w-auto"
              >
                {t("about.linkedin")}

                <FontAwesomeIcon
                  icon={faLinkedin}
                  aria-hidden="true"
                  className="w-4 shrink-0"
                />
              </Link>

              <Link
                href="https://wa.me/201141188639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl border-2 border-border bg-bg px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-secondary hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:w-auto"
              >
                {t("about.whatsapp")}

                <FontAwesomeIcon
                  icon={faWhatsapp}
                  aria-hidden="true"
                  className="w-4 shrink-0"
                />
              </Link>
            </div>
          </div>

          <div className="down mt-8 sm:mt-10">
            <h3 className="text-xs font-bold tracking-wide text-secondary rtl:tracking-normal">
              {t("about.howIWork.title")}
            </h3>

            <ul className="mt-4 list-disc space-y-3 ps-5 text-sm leading-6 text-white marker:text-secondary sm:text-base">
              <li>{t("about.howIWork.understand")}</li>
              <li>{t("about.howIWork.build")}</li>
              <li>{t("about.howIWork.refine")}</li>
            </ul>
          </div>
        </div>

        <div className="skills flex w-full min-w-0 flex-col gap-6 sm:gap-8">
          <div className="my-tool-kit space-y-5 rounded-2xl border-2 border-border bg-card p-5 text-white sm:p-6 xl:p-8">
            {toolkit.map((item) => (
              <div key={item.id} className={item.className}>
                <h3 className="text-xs font-bold tracking-wide text-secondary rtl:tracking-normal">
                  {t(item.titleKey)}
                </h3>

                <p className="mt-2 text-sm leading-6 sm:text-base">
                  <bdi dir="ltr">{item.technologies}</bdi>
                </p>
              </div>
            ))}
          </div>

          <div id="experience" className="experience min-w-0 scroll-mt-24">
            <ul className="list-disc space-y-5 ps-5 text-sm leading-6 text-white marker:text-secondary sm:text-base">
              <li className="ps-1">
                <span className="font-bold">
                  {t("about.experience.intern.title")}
                </span>

                <p className="mt-1 text-[#a5b7c5]">
                  {t("about.experience.intern.description")}
                </p>
              </li>

              <li className="ps-1">
                <span className="font-bold">
                  {t("about.experience.freelance.title")}
                </span>
              </li>

              <li className="ps-1">
                <span className="font-bold">
                  {t("about.experience.training.title")}
                </span>

                <p className="mt-1 text-[#a5b7c5]">
                  {t("about.experience.training.description")}
                </p>
              </li>

              <li className="ps-1">
                <span className="font-bold">
                  {t("about.experience.education.title")}
                </span>

                <p className="mt-1 text-[#a5b7c5]">
                  {t("about.experience.education.description")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
