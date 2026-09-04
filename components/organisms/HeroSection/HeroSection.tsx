import Button from "@/components/atoms/Button/Button";

export default function HeroSection() {
  return (
    <section className="relative mx-auto mt-6 min-h-[700px] max-w-7xl overflow-hidden rounded-3xl">
      <img
        src="/pangasinan-heritage/hundred-islands.png"
        alt="Hundred Islands in Alaminos, Pangasinan"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#2F4858]/50" />

      <div className="relative z-10 flex min-h-[600px] max-w-7xl items-center px-8 py-16 md:px-16 lg:px-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Welcome to
            <br />
            <span className="text-white">Pangasinan</span>
          </h1>

          <p className="mt-4 text-xl font-semibold uppercase tracking-[0.25em]">
            Heritage lives here.
            <br />
            In Pangasinan.
          </p>

          <p className="mt-3 max-w-xl text-base leading-7 text-white/90 md:text-lg">
            Explore the province&apos;s iconic destinations, rich cultural and
            natural wonders. Fast, accessible, and built for everyone — even
            with limited mobile data.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/pangasinan-heritage/heritage">
              Explore Destinations
            </Button>

            <a
              href="/pangasinan-heritage/about"
              className="inline-flex items-center justify-center rounded-full border border-white px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#2F4858]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}