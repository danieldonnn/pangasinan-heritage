export default function Footer() {
  return (
    <footer className="mt-1 rounded-3xl bg-[#f3f0f0] px-10 py-8 md:px-12 md:py-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold leading-none text-[#1681c4]">
            PANGASINAN
          </h2>

          <p className="md:text-1xl font-bold tracking-wide text-[#1681c4]">
            TOURISM
          </p>
        </div>

        {/* Social Media */}
        <div>
          <p className="mb-1 text-[18px] font-bold uppercase tracking-wide text-[#1681c4]">
            CONNECT WITH US
          </p>

          <div className="flex items-center gap-5">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#1877F2] transition hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.016 10.125 11.925v-8.432H7.078v-3.493h3.047V9.41c0-3.017 1.792-4.685 4.533-4.685 1.312 0 2.686.236 2.686.236v2.973h-1.514c-1.491 0-1.956.929-1.956 1.883v2.256h3.328l-.532 3.493h-2.796v8.432C19.612 23.089 24 18.092 24 12.073z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-black transition hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7"
              >
                <defs>
                  <linearGradient
                    id="instagramGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FFD600" />
                    <stop offset="35%" stopColor="#FF7A00" />
                    <stop offset="65%" stopColor="#FF0069" />
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
                  stroke="url(#instagramGradient)"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="url(#instagramGradient)"
                  strokeWidth="2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.2"
                  fill="url(#instagramGradient)"
                />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}