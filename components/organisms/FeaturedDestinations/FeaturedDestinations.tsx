import Link from "next/link";

const destinations = [
  {
    name: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    image: "/hundred-Islands-3.jpg",
    href: "/heritage#alaminos-hundred-islands",
  },
  {
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    image: "/bolinao lighthouse.webp",
    href: "/heritage#cape-bolinao-lighthouse",
  },
  {
    name: "Urbiztondo San Juan, La Union",
    location: "San Juan, La Union",
    image: "/urbiztondo san juan, la union.jpg",
    href: "/heritage#urbiztondo-san-juan",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-2 md:px-6 md:pb-9">
      {/* Featured Destinations Box */}
      <div className="rounded-2xl border border-[#2F4858]/40 bg-white px-6 py-7 md:px-8 md:py-8">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#2F8CBF] md:text-3xl">
            Featured Destinations
          </h2>
        </div>

        {/* Destination Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#2F8CBF]">
                  {destination.name}
                </h3>

                {/* Location */}
                <p className="mt-1 text-sm font-medium text-gray-500">
                  📍 {destination.location}
                </p>

                <Link
                  href={destination.href}
                  className="mt-5 inline-flex rounded-full bg-[#2F4858] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#223744]"
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