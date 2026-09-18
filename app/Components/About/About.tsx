import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="inner grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="content w-full min-w-0">
          <div className="upper flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <span className="text-xs font-bold tracking-wide text-secondary">
              02 / A LITTLE ABOUT ME
            </span>

            <h2 className="break-words text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
              Curious by nature. Hands-on by choice.
            </h2>

            <p className="text-base leading-7 text-[#a5b7c5] lg:text-lg lg:leading-8">
              I enjoy connecting the details: a clear interface, a
              well-structured API and the workflow in between. My projects span
              web products, real-time features and custom Odoo business modules.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={"https://www.linkedin.com/in/mohammad-samir-dev/"}
                target="_blank"
                className="inline-flex min-h-11 gap-2 w-full items-center justify-center rounded-2xl border-2 border-border bg-bg px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-secondary hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:w-auto"
              >
                Find me on LinkedIn
                <FontAwesomeIcon icon={faLinkedin} className="w-4" />
              </Link>

              <button
                type="button"
                className="inline-flex min-h-11 gap-2 w-full items-center justify-center rounded-2xl border-2 border-border bg-bg px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-secondary hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:w-auto"
              >
                Find me on WhatsApp
                <FontAwesomeIcon icon={faWhatsapp} className="w-4" />
              </button>
            </div>
          </div>

          <div className="down mt-8 sm:mt-10">
            <h3 className="text-xs font-bold tracking-wide text-secondary">
              HOW I WORK
            </h3>

            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-white marker:text-secondary sm:text-base">
              <li>Understand the flow</li>
              <li>Build the core</li>
              <li>Refine the details</li>
            </ul>
          </div>
        </div>

        <div className="skills flex w-full min-w-0 flex-col gap-6 sm:gap-8">
          <div className="my-tool-kit space-y-5 rounded-2xl border-2 border-border bg-card p-5 text-white sm:p-6 xl:p-8">
            <div className="fe">
              <h3 className="text-xs font-bold tracking-wide text-secondary">
                Frontend
              </h3>

              <p className="mt-2 text-sm leading-6 sm:text-base">
                React · Next.js · TypeScript
              </p>
            </div>

            <div className="be">
              <h3 className="text-xs font-bold tracking-wide text-secondary">
                Backend
              </h3>

              <p className="mt-2 text-sm leading-6 sm:text-base">
                Node.js · Express · Socket.IO
              </p>
            </div>

            <div className="erp">
              <h3 className="text-xs font-bold tracking-wide text-secondary">
                Data &amp; ERP
              </h3>

              <p className="mt-2 text-sm leading-6 sm:text-base">
                PostgreSQL · Odoo
              </p>
            </div>

            <div className="tools">
              <h3 className="text-xs font-bold tracking-wide text-secondary">
                Daily tools
              </h3>

              <p className="mt-2 text-sm leading-6 sm:text-base">
                Git · GitHub · Postman
              </p>
            </div>
          </div>

          <div className="experience min-w-0" id="experience">
            <ul className="list-disc space-y-5 pl-5 text-sm leading-6 text-white marker:text-secondary sm:text-base">
              <li className="pl-1">
                <span className="font-bold">Odoo Developer Intern</span>

                <p className="mt-1 text-[#a5b7c5]">
                  ZAD Solutions · 2-month internship
                </p>
              </li>

              <li className="pl-1">
                <span className="font-bold">
                  Anoing Full-stack Freelance Project
                </span>
              </li>

              <li className="pl-1">
                <span className="font-bold">Full-Stack Development Track</span>

                <p className="mt-1 text-[#a5b7c5]">Route Academy · 2024–2026</p>
              </li>

              <li className="pl-1">
                <span className="font-bold">Educational Media</span>

                <p className="mt-1 text-[#a5b7c5]">
                  Ain Shams University · Bachelor’s studies
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
