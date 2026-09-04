import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import HeritageHero from "@/components/organisms/HeritageHero/HeritageHero";
import HeritageSection from "@/components/organisms/HeritageSection/HeritageSection";

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-[#BFE3F0] px-8 py-8 md:px-10 md:py-8">
      <div className="mx-auto max-w-10xl rounded-3xl border border-[#2F4858]/40 bg-white p-2 md:p-4">

        <Header />

        <HeritageHero />

        <HeritageSection />

        <Footer />

      </div>
    </main>
  );
}