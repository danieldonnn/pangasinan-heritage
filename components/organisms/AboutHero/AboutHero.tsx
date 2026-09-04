export default function AboutHero() {
  return (
    <section className="relative mx-auto mt-6 min-h-[700px] w-full overflow-hidden rounded-3xl">
      {/* Background Image */}
      <img
        src="/about beach.png"
        alt="Pangasinan beach"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#2F4858]/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[700px] items-center px-8 py-16 md:px-16 lg:px-20">
        <div className="max-w-2xl text-white">

          <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            About Us
          </h1>

          <div className="mt-5 flex items-center gap-2 text-sm text-white">
            <span>Home</span>
            <span>›</span>
            <span>About</span>
          </div>

          <p className="mt-4 max-w-xl text-base leading-7 text-white md:text-lg">
            The Pangasinan Provincial Tourism Office (PPTO) is committed to promoting Pangasinan as a vibrant and welcoming tourism destination.
            Through the preservation of its rich heritage, celebration of its diverse culture, and protection of its natural wonders,
            the office aims to showcase the beauty and identity of the province while encouraging responsible tourism and supporting local communities.
          </p>

        </div>
      </div>
    </section>
  );
}