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
    </main>
  );
}
