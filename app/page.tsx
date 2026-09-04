import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import WaveDivider from "@/components/organisms/WaveDivider/WaveDivider";
import HomeAboutSection from "@/components/organisms/HomeAboutSection/HomeAboutSection";
import FeaturedDestinations from "@/components/organisms/FeaturedDestinations/FeaturedDestinations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#BFE3F0] px-8 py-8 md:px-10 md:py-8">
      <div className="mx-auto max-w-10xl rounded-3xl border border-[#2F4858]/40 bg-white p-2 md:p-4">

        <Header />

        <HeroSection />

        <WaveDivider />

        <HomeAboutSection />

        <FeaturedDestinations />

        <Footer />

      </div>
    </main>
  );
}