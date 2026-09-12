import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import AboutHero from "@/components/organisms/AboutHero/AboutHero";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#9CA3AF] px-2 py-2 md:px-2 md:py-2">
      <div className="mx-auto w-full rounded-3xl border border-[#2F4858]/40 bg-white p-2 md:p-2">
        <Header />

        <AboutHero />

        <AboutSection />

        <Footer />
      </div>
    </main>
  );
}