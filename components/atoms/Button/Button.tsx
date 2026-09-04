type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({ children, href }: ButtonProps) {
  const buttonStyle =
    "inline-flex items-center justify-center rounded-full bg-[#2F4858] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2F4858] focus:ring-offset-2";

  if (href) {
    return (
      <a href={href} className={buttonStyle}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={buttonStyle}>
      {children}
    </button>
  );
}