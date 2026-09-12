export default function HomeAboutSection() {
  return (
    <section className="w-full px-2 pb-2 pt-2 md:px-2 md:pb-7 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#2F4858]/40 bg-white px-2 py-2 md:px-6 md:py-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F8CBF] md:text-3xl">
              About Pangasinan
            </h2>

            <p className="mt-4 text-sm leading-[1.5] text-gray-900 md:text-base">
              Pangasinan is a province rich in history, culture, and natural
              beauty. From breathtaking beaches and islands to historic
              landmarks and vibrant local communities, the province offers
              unforgettable experiences for every traveler.
            </p>

            <p className="mt-3 text-sm leading-[1.5] text-gray-900 md:text-base">
              Explore Pangasinan and discover the stories, traditions, and
              destinations that make the province a special place to visit.
            </p>
          </div>

          {/* Image */}
          <div className="h-64 overflow-hidden rounded-2xl">
            <img
              src="/pangasinan-heritage/hundred-islands-2.jpg"
              alt="Pangasinan beach"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}