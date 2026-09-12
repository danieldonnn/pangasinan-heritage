import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import HeritageHero from "@/components/organisms/HeritageHero/HeritageHero";
import HeritageSection from "@/components/organisms/HeritageSection/HeritageSection";

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-[#9CA3AF] px-2 py-2 md:px-2 md:py-2">
      <div className="mx-auto w-full rounded-3xl border border-[#2F4858]/40 bg-white p-2 md:p-2">
        <Header />

        <HeritageHero />

        <HeritageSection />

        <Footer />
      </div>
    </main>
  );
}