import "./globals.css";

export const metadata = {
  title: "Pangasinan Provincial Tourism",
  description:
    "Discover the heritage, culture, and natural beauty of Pangasinan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}