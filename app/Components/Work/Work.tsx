import Image from "next/image";
import socialImage from "../../../public/socail_app.png";
import anoing from "../../../public/anoing.png";
import odoo from "../../../public/odoo.png";
import Link from "next/link";
const Work = () => {
  return (
    <section id="work" className="min-h-[calc(100svh-10rem)]">
      <div className="inner">
        <div className="header flex items-center justify-between mb-8">
          <div className="left">
            <span className="text-secondary">01 / SELECTED WORK</span>
            <h2 className="text-white text-[48px] font-semibold">
              A few things I’ve built.
            </h2>
          </div>
          <div className="right">
            <p className="text-[17px] text-[#a5b7c5] font-semibold">
              Across communities, commerceand business workflows.
            </p>
          </div>
        </div>
        <div className="body grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="card col-span-full flex flex-col lg:flex-row gap-6 bg-card border-2 border-border rounded-3xl p-8 min-h-[350px]">
            <div className="left w-1/2 flex flex-col gap-5">
              <span className="text-[12px] font-bold text-secondary my-2">
                FEATURED / FULL-STACK APPLICATION
              </span>
              <h3 className="text-[48px] text-white font-bold my-2">
                Social Media Platform
              </h3>
              <p className="text-[17px] text-[#a5b7c5] font-semibold my-2">
                Posts, friendships and conversationsin one connected experience.
              </p>
              <div className="skills flex flex-wrap gap-3 my-2">
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  React
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Node.js
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Socket.IO
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-3 my-0">
                <Link
                  href={"https://github.com/MohamedSamirMoussa/Social-Media-BE"}
                  target="_blank"
                  className="btn px-3 py-4 bg-bg outline-2 outline-border text-white rounded-2xl hover:bg-secondary hover:text-contact font-semibold "
                >
                  Explore Back-end
                </Link>
                <Link
                  href={"https://github.com/MohamedSamirMoussa/Social-Media-FE"}
                  target="_blank"
                  className="btn px-3 py-4 bg-bg outline-2 outline-border text-white rounded-2xl hover:bg-secondary hover:text-contact font-semibold "
                >
                  Explore Front-end
                </Link>
                <Link
                  href={"https://socialapp-peach-sigma.vercel.app"}
                  target="_blank"
                  className="btn px-3 py-4 bg-bg outline-2 outline-border text-white rounded-2xl hover:bg-secondary hover:text-contact font-semibold "
                >
                  Explore Website
                </Link>
              </div>
            </div>
            <div className="right w-1/2 overflow-hidden">
              <Link
                href={"https://socialapp-peach-sigma.vercel.app"}
                target="_blank"
              >
                <figure>
                  <Image src={socialImage} alt="socialImage" />
                </figure>
              </Link>
            </div>
          </div>
          <div className="card flex flex-col gap-2 bg-card border-2 border-border rounded-3xl p-8">
            <div className="right border-3 rounded-3xl border-border overflow-hidden h-[275px]">
              <Link href={"https://www.anoing.com"} target="_blank">
                <figure>
                  <Image src={anoing} alt="anoing" />
                </figure>
              </Link>
            </div>
            <div className="left flex flex-col gap-5">
              <span className="text-[12px] font-bold text-secondary my-2">
                FREELANCE / GAMING COMMUNITY
              </span>
              <h3 className="text-[48px] text-white font-bold my-2">Anoing</h3>
              <p className="text-[17px] text-[#a5b7c5] font-semibold my-2">
                A community platform with live server data,leaderboards,
                donations and an admin dashboard.
              </p>
              <div className="skills flex flex-wrap gap-3 my-2">
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Next.js
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Node.js
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Socket.IO
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  MongoDB
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  RCON
                </span>
              </div>
              <div className="flex gap-3 my-0">
                <Link
                  href={"https://www.anoing.com"}
                  target="_blank"
                  className="btn px-3 py-4 bg-bg outline-2 outline-border text-white rounded-2xl hover:bg-secondary hover:text-contact font-semibold "
                >
                  Explore Anoing
                </Link>
              </div>
            </div>
          </div>
          <div className="card flex flex-col gap-2 bg-card border-2 border-border rounded-3xl p-8">
            <div className="right border-3 rounded-3xl border-border overflow-hidden h-[250px]">
              <Link
                href={"https://github.com/MohamedSamirMoussa/Odoo-Project"}
                target="_blank"
              >
                <figure>
                  <Image src={odoo} alt="odoo" />
                </figure>
              </Link>
            </div>
            <div className="left flex flex-col gap-5">
              <span className="text-[12px] font-bold text-secondary my-2">
                BUSINESS APPLICATION / ODOO
              </span>
              <h3 className="text-[48px] text-white font-bold my-2">
                Real Estate ERP
              </h3>
              <p className="text-[17px] text-[#a5b7c5] font-semibold my-2">
                A connected sales workflow from unit inventoryto reservations,
                contracts and installments.
              </p>
              <div className="skills flex flex-wrap gap-3 my-2">
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Odoo 18
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Python
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  PostgreSQL
                </span>
                <span className="bg-bg outline-1 text-[#a5b7c5] outline-border px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                  Corns
                </span>
              </div>
              <div className="flex gap-3 my-0">
                <Link
                  href={"https://github.com/MohamedSamirMoussa/Odoo-Project"}
                  target="_blank"
                  className="btn px-3 py-4 bg-bg outline-2 outline-border text-white rounded-2xl hover:bg-secondary hover:text-contact font-semibold "
                >
                  Explore Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
