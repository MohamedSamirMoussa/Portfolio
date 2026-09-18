import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import me from "../../../public/me-without-bg.png";

const skills = ["React & Next.js", "Node.js", "Odoo ERP"];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center gap-10 lg:flex-row"
    >
      <div className="flex w-full flex-col gap-5 text-white lg:w-1/2">
        <span className="hero-item text-xs font-bold tracking-wider text-secondary">
          FULL-STACK DEVELOPER / CAIRO, EGYPT
        </span>

        <h1 className="hero-item text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[66px]">
          Thoughtful interfaces.
          <br />
          Powerful systems.
        </h1>

        <p className="hero-item max-w-xl text-base leading-relaxed text-[#a5b7c5] sm:text-xl">
          I am Mohamed Samir Moussa. I build web applications from the
          first interaction to the API behind it.
        </p>

        <div className="hero-item flex flex-wrap gap-3">
          <Link
            href="#work"
            className="flex items-center justify-center gap-3 rounded-xl border border-border bg-bg px-5 py-4 font-bold text-secondary transition-colors duration-300 hover:bg-secondary hover:text-bg"
          >
            Explore my work
            <FontAwesomeIcon icon={faShare} className="h-4 w-4" />
          </Link>

          <Link
            href="https://github.com/MohamedSamirMoussa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-border bg-bg px-5 py-4 font-bold text-secondary transition-colors duration-300 hover:bg-secondary hover:text-bg"
          >
            GitHub
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </Link>
        </div>

        <div className="hero-item flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-bg px-4 py-2 text-sm text-[#a5b7c5] transition-transform duration-300 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <figure className="hero-item flex w-full justify-center lg:w-1/2">
        <Image
          src={me}
          alt="Mohamed Samir Moussa"
          sizes="(min-width: 1024px) 448px, (min-width: 640px) 448px, 100vw"
          className="h-auto w-full max-w-md object-contain"
        />
      </figure>
    </section>
  );
}