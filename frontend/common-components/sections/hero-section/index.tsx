import GetStartedBtn from "@/common-components/buttons/get-started";
import { title, subtitle } from "@/components/primitives";

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <div className="container inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make your&nbsp;</span>
        <span className={title({ color: "violet" })}>awesome&nbsp;</span>
        <br />
        <span className={title()}>resume in a few clicks - easy and free!</span>
      </div>

      <div className="mt-8">
        <GetStartedBtn />
      </div>
      <div
        className={subtitle({
          class: "mt-4 inline-block max-w-xl text-center justify-center",
        })}
      >
        <p className="text-md text-muted-foreground mt-4 text-center max-w-2xl text-[var(--foreground)]">
          Create your resume online for free — no login, no email, no watermarks. Perfect for
          developers, designers, marketers, and students. Export as PDF, fast and easy. Build your
          CV in minutes and get hired!
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
