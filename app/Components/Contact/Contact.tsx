type ContactProps = {
  email: string;
  whatsappNumber: string;
  linkedinUrl: string;
};

const Contact = ({ email, whatsappNumber, linkedinUrl }: ContactProps) => {
  const contactLinks = [
    {
      title: "Email",
      description: email,
      href: `mailto:${email}`,
      external: false,
    },
    {
      title: "WhatsApp",
      description: "Start a conversation",
      href: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
      external: true,
    },
    {
      title: "LinkedIn",
      description: "Let’s connect professionally",
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
            <span className="text-xs font-bold tracking-widest text-secondary">
              03 / GET IN TOUCH
            </span>

            <h2
              id="contact-heading"
              className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl"
            >
              Have a project in mind?
              <span className="mt-2 block text-secondary">
                Let’s build it together.
              </span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-[#a5b7c5] sm:text-lg sm:leading-8">
              Whether you need a website, a full-stack application or a custom
              Odoo workflow, I’d love to hear what you’re working on.
            </p>

            <p className="text-sm leading-6 text-[#a5b7c5]">
              Tell me about your idea, your goals and what you need help with.
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.title}
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
                    {link.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-secondary transition-colors group-hover:border-secondary group-hover:bg-secondary group-hover:text-bg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
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
