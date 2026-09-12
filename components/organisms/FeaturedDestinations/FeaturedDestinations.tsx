import Link from "next/link";

const destinations = [
  {
    name: "Hundred Islands",
    location: "Alaminos City, Pangasinan, Luzon, Philippines",
    image: "/pangasinan-heritage/hundred-Islands-01.webp",
    href: "/heritage#alaminos-hundred-islands",
  },
  {
    name: "Cape Bolinao Lighthouse",
    location: "Bolinao, Pangasinan, Luzon, Philippines",
    image: "/pangasinan-heritage/bolinao lighthouse.webp",
    href: "/heritage#cape-bolinao-lighthouse",
  },
  {
    name: "Tondol White Sand Beach",
    location: "Anda Pangasinan, Luzon, Philippines",
    image: "/pangasinan-heritage/tondol-white-sand.jpg",
    href: "/heritage#Tondol-White-Sand-Beach",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="w-full px-5 pb-5 pt-2 md:px-8 md:pb-9">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#2F4858]/40 bg-white px-5 py-5 md:px-6 md:py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#2F8CBF] md:text-3xl">
            Featured Destinations
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transform-gpu transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-110 group-active:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#2F8CBF]">
                  {destination.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  📍 {destination.location}
                </p>

                <Link
                  href={destination.href}
                  className="mt-5 inline-flex rounded-full bg-[#1681c4] px-4 py-1 text-sm font-semibold text-white transition hover:bg-[#126fa8]"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}