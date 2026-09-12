import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import WaveDivider from "@/components/organisms/WaveDivider/WaveDivider";
import HomeAboutSection from "@/components/organisms/HomeAboutSection/HomeAboutSection";
import FeaturedDestinations from "@/components/organisms/FeaturedDestinations/FeaturedDestinations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#9CA3AF] px-2 py-2 md:px-2 md:py-2">
      <div className="mx-auto w-full rounded-3xl border border-[#2F4858]/40 bg-white p-2 md:p-2">
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