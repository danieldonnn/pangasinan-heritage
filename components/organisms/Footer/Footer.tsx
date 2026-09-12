export default function Footer() {
  return (
    <footer className="mt-1 rounded-3xl bg-[#f3f0f0] px-5 py-6 md:px-12 md:py-7">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:items-start">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold leading-none text-[#1681c4] md:text-3xl">
            PANGASINAN
          </h2>

          <p className="mt-1 text-sm font-bold tracking-wide text-[#1681c4] md:text-xl">
            TOURISM
          </p>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-700">
            Discover the beauty, culture, heritage, and unforgettable
            destinations of Pangasinan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#1681c4]">
            QUICK LINKS
          </p>

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <a
              href="/pangasinan-heritage"
              className="transition hover:text-[#1681c4]"
            >
              Home
            </a>

            <a
              href="/pangasinan-heritage/heritage"
              className="transition hover:text-[#1681c4]"
            >
              Discover
            </a>

            <a
              href="/pangasinan-heritage/about"
              className="transition hover:text-[#1681c4]"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Connect With Us */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#1681c4]">
            CONNECT WITH US
          </p>

          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#1877F2] transition hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <defs>
                  <linearGradient
                    id="instagramGradientFooter"
                    x1="3"
                    y1="21"
                    x2="21"
                    y2="3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FCAF45" />
                    <stop offset="35%" stopColor="#FF0069" />
                    <stop offset="70%" stopColor="#D300C5" />
                    <stop offset="100%" stopColor="#7638FA" />
                  </linearGradient>
                </defs>

                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="url(#instagramGradientFooter)"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="url(#instagramGradientFooter)"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.2"
                  fill="#D300C5"
                />
              </svg>
            </a>

            {/* Twitter / X — unchanged */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#111827] transition hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.26 4H6.4l11.4 15.9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-7 max-w-6xl border-t border-[#2F4858]/20 pt-4 text-center text-xs text-gray-600">
        © 2026 Pangasinan Tourism. All rights reserved.
      </div>
    </footer>
  );
}