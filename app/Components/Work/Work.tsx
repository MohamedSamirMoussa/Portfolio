import Image from "next/image";
import Link from "next/link";

import socialImage from "../../../public/socail_app.png";
import anoing from "../../../public/anoing.png";
import odoo from "../../../public/odoo.png";

const projects = [
  {
    title: "Social Media Platform",
    category: "FEATURED / FULL-STACK APPLICATION",
    description:
      "Posts, friendships and conversations in one connected experience.",
    image: socialImage,
    imageAlt: "Social Media Platform interface",
    website: "https://socialapp-peach-sigma.vercel.app",
    featured: true,
    skills: ["React", "Node.js", "Socket.IO", "MongoDB"],
    links: [
      {
        label: "Explore Back-end",
        href: "https://github.com/MohamedSamirMoussa/Social-Media-BE",
      },
      {
        label: "Explore Front-end",
        href: "https://github.com/MohamedSamirMoussa/Social-Media-FE",
      },
      {
        label: "Explore Website",
        href: "https://socialapp-peach-sigma.vercel.app",
      },
    ],
  },
  {
    title: "Anoing",
    category: "FREELANCE / GAMING COMMUNITY",
    description:
      "A community platform with live server data, leaderboards, donations and an admin dashboard.",
    image: anoing,
    imageAlt: "Anoing gaming community website",
    website: "https://www.anoing.com",
    featured: false,
    skills: ["Next.js", "Node.js", "Socket.IO", "MongoDB", "RCON"],
    links: [
      {
        label: "Explore Anoing",
        href: "https://www.anoing.com",
      },
    ],
  },
  {
    title: "Real Estate ERP",
    category: "BUSINESS APPLICATION / ODOO",
    description:
      "A connected sales workflow from unit inventory to reservations, contracts and installments.",
    image: odoo,
    imageAlt: "Odoo real estate ERP interface",
    website: "https://github.com/MohamedSamirMoussa/Odoo-Project",
    featured: false,
    skills: ["Odoo 18", "Python", "PostgreSQL", "Cron Jobs"],
    links: [
      {
        label: "Explore Project",
        href: "https://github.com/MohamedSamirMoussa/Odoo-Project",
      },
    ],
  },
];

const Work = () => {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="min-h-[calc(100svh-10rem)] scroll-mt-24"
    >
      <div className="inner w-full min-w-0">
        <div className="header mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="min-w-0">
            <span className="text-xs font-semibold tracking-wider text-secondary sm:text-sm">
              01 / SELECTED WORK
            </span>

            <h2
              id="work-heading"
              className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl xl:text-5xl"
            >
              A few things I’ve built.
            </h2>
          </div>

          <p className="max-w-md text-sm font-medium leading-7 text-[#a5b7c5] sm:text-base lg:max-w-xs">
            Across communities, commerce and business workflows.
          </p>
        </div>

        <div className="body grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            const preview = (
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore ${project.title}`}
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
                key={project.title}
                className={`card min-w-0 rounded-3xl border-2 border-border bg-card p-4 sm:p-6 xl:p-8 ${
                  project.featured
                    ? "col-span-full grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8"
                    : "flex flex-col gap-6"
                }`}
              >
                {!project.featured && preview}

                <div className="left flex min-w-0 flex-1 flex-col gap-4 sm:gap-5">
                  <span className="text-xs font-bold leading-5 tracking-wide text-secondary">
                    {project.category}
                  </span>

                  <h3
                    className={`break-words text-2xl font-bold leading-tight text-white sm:text-3xl ${
                      project.featured ? "xl:text-5xl" : "xl:text-4xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium leading-7 text-[#a5b7c5] sm:text-base">
                    {project.description}
                  </p>

                  <div className="skills flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-[#a5b7c5] sm:text-sm"
                      >
                        {skill}
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
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border-2 border-border bg-bg px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:border-secondary hover:bg-secondary hover:text-contact focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:w-auto"
                      >
                        {link.label}
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
