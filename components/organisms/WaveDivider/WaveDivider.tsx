export default function WaveDivider() {
  return (
    <div className="relative -mt-1 h-15 overflow-hidden">
      <svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 h-full w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}