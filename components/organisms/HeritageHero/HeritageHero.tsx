export default function HeritageHero() {
  return (
    <section className="relative mx-auto mt-6 w-full overflow-hidden rounded-3xl">
      <div className="relative h-[700px]">
        <img
          src="/pangasinan-heritage/pangasinan_hundred_islands4.png"
          alt="Hundred Islands, Pangasinan"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2F4858]/40" />

        <div className="relative z-10 flex h-full items-center px-8 md:px-16 lg:px-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Discover
              <br />
              Pangasinan
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm text-white">
              <span>Home</span>
              <span>›</span>
              <span>Discover</span>
            </div>

            <p className="mt-4 max-w-xl text-base leading-7 text-white md:text-lg">
              Discover the stories, culture, and natural beauty behind
              Pangasinan&apos;s most iconic destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}