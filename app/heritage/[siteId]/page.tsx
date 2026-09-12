import Link from "next/link";

export function generateStaticParams() {
  return [
    { siteId: "alaminos-hundred-islands" },
    { siteId: "cape-bolinao-lighthouse" },
    { siteId: "Tondol-White-Sand-Beach" },
  ];
}

const siteDetails = {
  "alaminos-hundred-islands": {
    title: "Alaminos Hundred Islands",
    images: [
      "/pangasinan-heritage/pangasinan-heritage1.jpg",
      "/pangasinan-heritage/pangasinan-heritage2.jpg",
      "/pangasinan-heritage/pangasinan-heritage3.jpg",
      "/pangasinan-heritage/pangasinan-heritage4.jpg",
    ],
  },

  "cape-bolinao-lighthouse": {
    title: "Cape Bolinao Lighthouse",
    images: [
      "/pangasinan-heritage/bolinao-lighthouse1.jpg",
      "/pangasinan-heritage/bolinao-lighthouse2.jpg",
      "/pangasinan-heritage/bolinao-lighthouse3.jpg",
      "/pangasinan-heritage/bolinao-lighthouse4.jpg",
    ],
  },

  "Tondol-White-Sand-Beach": {
    title: "Tondol White Sand Beach",
    images: [
      "/pangasinan-heritage/tondol1.jpg",
      "/pangasinan-heritage/tondol2.webp",
      "/pangasinan-heritage/tondol3.jpg",
      "/pangasinan-heritage/tondol4.jpg",
    ],
  },
};

type SiteId = keyof typeof siteDetails;

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) {
  const { siteId } = await params;

  const site = siteDetails[siteId as SiteId];

  if (!site) {
    return (
      <main className="min-h-screen bg-white px-4 py-8 md:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#2F4858] bg-white px-6 py-8 md:px-12 md:py-10">
          <Link
            href="/heritage"
            className="text-[#1681c4] hover:underline"
          >
            ← Back to Discover
          </Link>

          <h1 className="mt-6 text-2xl font-bold text-red-600">
            Heritage site not found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#2F4858] bg-white px-6 py-8 md:px-12 md:py-10">
        <Link
          href={`/heritage#${siteId}`}
          aria-label="Back to Discover"
          className="inline-flex items-center text-[#111827] transition hover:text-[#1681c4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </Link>

        <h1 className="mt-6 text-2xl font-bold text-[#1681c4] md:text-3xl">
          {site.title}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {site.images.map((image, index) => (
            <a
              key={image}
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${site.title} image ${index + 1}`}
              className="group block cursor-zoom-in overflow-hidden rounded-md"
            >
              <img
                src={image}
                alt={`${site.title} view ${index + 1}`}
                className="block h-60 w-full rounded-md object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 md:h-72"
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}