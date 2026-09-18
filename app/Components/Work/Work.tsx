"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

import socialImage from "../../../public/socail_app.png";
import anoing from "../../../public/anoing.png";
import odoo from "../../../public/odoo.png";
import freshCart from "../../../public/fresh-cart.png";

const Work = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "social",
      title: t("work.projects.social.title"),
      category: t("work.projects.social.category"),
      description: t("work.projects.social.description"),
      image: socialImage,
      imageAlt: t("work.projects.social.imageAlt"),
      website: "https://socialapp-peach-sigma.vercel.app",
      featured: true,
      skills: [
        "React",
        "Node.js",
        "Vite",
        "TypeScript",
        "Socket.IO",
        "Mongoose",
        "bcryptjs",
        "Cloudinary",
        "cors",
        "express-rate-limit",
        "Helmet",
        "Multer",
        "Zod",
        "MUI",
        "Redux Toolkit",
        "Formik & Yup",
      ],
      links: [
        {
          label: t("work.buttons.backend"),
          href: "https://github.com/MohamedSamirMoussa/Social-Media-BE",
          icon: faGithub,
        },
        {
          label: t("work.buttons.frontend"),
          href: "https://github.com/MohamedSamirMoussa/Social-Media-FE",
          icon: faGithub,
        },
        {
          label: t("work.buttons.website"),
          href: "https://socialapp-peach-sigma.vercel.app",
          icon: faReact,
        },
      ],
    },
    {
      id: "anoing",
      title: t("work.projects.anoing.title"),
      category: t("work.projects.anoing.category"),
      description: t("work.projects.anoing.description"),
      image: anoing,
      imageAlt: t("work.projects.anoing.imageAlt"),
      website: "https://www.anoing.com",
      featured: false,
      skills: [
        "Next.js 16",
        "Node.js",
        "Socket.IO",
        "Mongoose",
        "RCON",
        "Redux Toolkit",
        "TypeScript",
        "Zod",
        "Cloudinary & Multer",
        "Nodemailer",
        "PayPal",
        "Helmet & Express Rate Limit",
      ],
      links: [
        {
          label: t("work.buttons.anoing"),
          href: "https://www.anoing.com",
          icon: faReact,
        },
      ],
    },
    {
      id: "odoo",
      title: t("work.projects.odoo.title"),
      category: t("work.projects.odoo.category"),
      description: t("work.projects.odoo.description"),
      image: odoo,
      imageAlt: t("work.projects.odoo.imageAlt"),
      website: "https://github.com/MohamedSamirMoussa/Odoo-Project",
      featured: false,
      skills: [
        "Odoo 18",
        "Python",
        "PostgreSQL",
        t("work.skills.cron"),
        t("work.skills.xml"),
        t("work.skills.odooModules"),
      ],
      links: [
        {
          label: t("work.buttons.project"),
          href: "https://github.com/MohamedSamirMoussa/Odoo-Project",
          icon: faGithub,
        },
      ],
    },
    {
      id: "freshCart",
      title: t("work.projects.freshCart.title"),
      category: t("work.projects.freshCart.category"),
      description: t("work.projects.freshCart.description"),
      image: freshCart,
      imageAlt: t("work.projects.freshCart.imageAlt"),
      website: "https://github.com/MohamedSamirMoussa/fresh-cart",
      featured: true,
      skills: [
        "React",
        "React Router",
        "Vite",
        "TypeScript",
        "React Context",
        "Tailwind CSS",
        "Formik",
        "Yup",
        "React Query",
      ],
      links: [
        {
          label: t("work.buttons.frontend"),
          href: "https://github.com/MohamedSamirMoussa/fresh-cart",
          icon: faGithub,
        },
        {
          label: t("work.buttons.freshCart"),
          href: "https://fresh-cart-steel-pi.vercel.app",
          icon: faReact,
        },
      ],
    },
  ];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="min-h-[calc(100svh-10rem)] scroll-mt-24"
    >
      <div className="inner w-full min-w-0">
        <div className="header mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="min-w-0">
            <span className="text-xs font-semibold tracking-wider text-secondary sm:text-sm rtl:tracking-normal">
              {t("work.eyebrow")}
            </span>

            <h2
              id="work-heading"
              className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl xl:text-5xl"
            >
              {t("work.title")}
            </h2>
          </div>

          <p className="max-w-md text-sm font-medium leading-7 text-[#a5b7c5] sm:text-base lg:max-w-xs">
            {t("work.description")}
          </p>
        </div>

        <div className="body grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            const preview = (
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("work.exploreProject", {
                  title: project.title,
                })}
                className="right relative block aspect-[16/10] w-full min-w-0 shrink-0 overflow-hidden rounded-2xl border-2 border-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 570px, (min-width: 1024px) 45vw, 90vw"
                  className="object-cover object-top"
                />
              </Link>
            );

            return (
              <article
                key={project.id}
                className={`card min-w-0 rounded-3xl border-2 border-border bg-card p-4 sm:p-6 xl:p-8 ${
                  project.featured
                    ? "col-span-full grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8"
                    : "flex flex-col gap-6"
                }`}
              >
                {!project.featured && preview}

                <div className="left flex min-w-0 flex-1 flex-col gap-4 sm:gap-5">
                  <span className="text-xs font-bold leading-5 tracking-wide text-secondary rtl:tracking-normal">
                    {project.category}
                  </span>

                  <h3
                    className={`break-words text-2xl font-bold leading-tight text-white sm:text-3xl ${
                      project.featured ? "xl:text-5xl" : "xl:text-4xl"
                    }`}
                  >
                    <bdi>{project.title}</bdi>
                  </h3>

                  <p className="text-sm font-medium leading-7 text-[#a5b7c5] sm:text-base">
                    {project.description}
                  </p>

                  <div className="skills flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={`${project.id}-skill-${index}`}
                        className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-[#a5b7c5] sm:text-sm"
                      >
                        <bdi>{skill}</bdi>
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-1 gap-3 pt-2 sm:flex sm:flex-wrap">
                    {project.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-border bg-bg px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:border-secondary hover:bg-secondary hover:text-contact focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:w-auto"
                      >
                        {link.label}

                        <FontAwesomeIcon
                          icon={link.icon}
                          aria-hidden="true"
                          className="w-5 shrink-0"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                {project.featured && preview}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
