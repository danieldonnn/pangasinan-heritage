const coreValues = [
  {
    title: "Community",
    description:
      "We empower local community and promote inclusive tourism.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <path
          d="M16 21V19C16 16.7909 14.2091 15 12 15H7C4.79086 15 3 16.7909 3 19V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="9.5"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 21V19C21 17.1362 19.7252 15.5701 18 15.126"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "We protect our natural and cultural resources for generations to come.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <path
          d="M20.5 3.5C13 3.5 6.5 6 5 12.5C4.2 16 6.5 20 10 20C15.5 20 20.5 13.5 20.5 3.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 21C5.5 16 9 12.5 15 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We uphold transparency, accountability, and professionalism in everything we do.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <path
          d="M12 3L20 6V11C20 16.2 16.6 20.1 12 21C7.4 20.1 4 16.2 4 11V6L12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12L11 14.5L15.5 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="w-full px-5 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10">

      {/* Mission and Vision */}
      <div className="max-w-xl">

        {/* Mission */}
        <div>
          <h2 className="text-xl font-bold text-[#2F8CBF] md:text-2xl">
            Our Mission
          </h2>

          <p className="mt-1 text-sm leading-[1.35] text-gray-900 md:text-base">
            To promote and preserve the rich heritage, culture, and natural
            beauty of Pangasinan by providing an accessible and engaging
            digital platform for everyone. We aim to connect visitors with the
            province&apos;s iconic destinations while encouraging cultural
            appreciation, responsible tourism, and local pride.
          </p>
        </div>

        {/* Vision */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-[#2F8CBF] md:text-2xl">
            Our Vision
          </h2>

          <p className="mt-1 text-sm leading-[1.35] text-gray-900 md:text-base">
            To become a trusted digital gateway to Pangasinan&apos;s heritage,
            connecting people with the province&apos;s culture, history, and
            natural wonders while inspiring sustainable tourism and
            appreciation for future generations.
          </p>
        </div>

      </div>

      {/* Core Values */}
      <div className="mt-5">

        <h2 className="text-xl font-bold text-[#2F8CBF] md:text-2xl">
          Our Core Values
        </h2>

        <div className="mt-3 grid gap-6 md:grid-cols-3 md:px-14">

          {coreValues.map((value) => (
            <article
              key={value.title}
              className="rounded-md bg-[#f3f0f0] px-5 py-4 shadow-md"
            >

              {/* Icon */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#cfe7ff] text-[#2F8CBF]">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="mt-2 text-center text-sm font-bold text-[#2F8CBF]">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-[1.25] text-gray-900">
                {value.description}
              </p>

            </article>
          ))}

        </div>
      </div>

      {/* Be Part of Our Journey */}
      <div className="mt-10 overflow-hidden rounded-md bg-[#f3f0f0]">

        <div className="grid md:grid-cols-[70%_30%]">

          {/* Text */}
          <div className="px-5 py-5">

            <h2 className="text-lg font-bold text-[#2F8CBF] md:text-xl">
              Be Part of Our Journey
            </h2>

            <p className="mt-1 text-sm leading-[1.35] text-gray-900 md:text-base">
              Together, let’s preserve, promote, and inspire the world with the beauty of Pangasinan. 
              Discover the province’s rich culture, fascinating history, breathtaking natural wonders, and vibrant communities. 
              Explore new places, learn meaningful stories, and experience the traditions that make Pangasinan truly special. 
              By supporting responsible and sustainable tourism, we can help protect these treasures and create memorable experiences for visitors and future generations.
            </p>

          </div>

          {/* Image */}
          <div className="h-32 md:h-auto">
            <img
              src="/be Part of our journey.png"
              alt="Pangasinan beach"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
}