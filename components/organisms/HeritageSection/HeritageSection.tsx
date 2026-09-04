const heritageSites = [
  {
    id: "alaminos-hundred-islands",
    name: "Alaminos Hundred Islands",
    image: "/pangasinan-heritage/alaminos hundred islands1.jpg",
    description:
      "Discover the Hundred Islands located in Alaminos City, the Hundred Islands National Park is one of the Philippines’ most iconic natural wonders. With 124 islands and islets during high tide, each one offers something unique — white sand beaches, cave viewpoints, and marine sanctuaries. Perfect for families, barkada trips, and adventure seekers.",
    location: "Alaminos City Pangasinan",
  },
  {
    id: "cape-bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    image: "/pangasinan-heritage/cape bolinao lighthouse.jpg",
    description:
      "Step into the history of Bolinao at the iconic Cape Bolinao Lighthouse. Standing above the coastline of Patar, this historic landmark combines rich maritime heritage with breathtaking views of the sea and surrounding landscape. Whether you're exploring Pangasinan's history or simply looking for a scenic destination, the lighthouse offers a glimpse into the enduring story of Bolinao.",
    location: "Bolinao Pangasinan",
  },
  {
    id: "urbiztondo-san-juan",
    name: "Urbiztondo San Juan La Union",
    image: "/pangasinan-heritage/urbiztondo san juan, la union2.jpg",
    description:
      "Urbiztondo Beach is a popular coastal destination in San Juan, La Union, known for its beautiful shoreline, vibrant surf culture, and stunning sunsets. It attracts both local and international visitors looking to experience the waves, relax by the sea, and enjoy the lively atmosphere of the area. As one of the Philippines' well-known surfing destinations, Urbiztondo offers an exciting blend of adventure, nature, and local coastal culture.",
    location: "Urbiztondo Beach, San Juan, La Union",
  },
];

export default function HeritageSection() {
  return (
    <section className="mx-auto mt-9 max-w-7xl px-6 pb-8">
      <div className="rounded-2xl border border-[#2F4858]/40 bg-white px-5 py-6 md:px-6 md:py-6">
        <div className="space-y-10">
          {heritageSites.map((site) => (
            <article
              id={site.id}
              key={site.name}
              className="scroll-mt-6 overflow-hidden rounded-lg bg-[#f3f0f0]"
            >
              <div className="grid md:grid-cols-[42%_58%]">
                {/* Image */}
                <div className="h-56 md:h-64">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-5 py-5 md:px-4 md:py-4">
                  <h2 className="text-xl font-bold text-[#2F8CBF]">
                    {site.name}
                  </h2>

                  <p className="mt-2 text-sm leading-[1.35] text-gray-900">
                    {site.description}
                  </p>

                  {/* Location */}
                  <div className="mt-4 flex items-center gap-2 text-base font-semibold text-[#2F8CBF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5 text-[#2F4858]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>

                    <span>{site.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}