import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Work from "./Components/Work/Work";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-5 pb-12 pt-28">
      <div data-intro-hero>
        <Hero />
      </div>

      <div data-reveal className="py-24">
        <Work />
      </div>
      <div data-reveal className="py-24">
        <About />
      </div>
      <div data-reveal className="py-24">
        <Contact
          email="mosamir5000@gmail.com"
          whatsappNumber="201141188639"
          linkedinUrl="https://www.linkedin.com/in/mohammad-samir-dev/"
        />
      </div>
    </main>
  );
}
