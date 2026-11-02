import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BestOffers } from "@/components/home/BestOffers";
import { Categories } from "@/components/home/Categories";
import { Hero } from "@/components/home/Hero";
import { LeadForm } from "@/components/home/LeadForm";
import { Office } from "@/components/home/Office";
import { OfficeInfo } from "@/components/home/OfficeInfo";
import { Owners } from "@/components/home/Owners";
import { Reviews } from "@/components/home/Reviews";
import { SearchBar } from "@/components/home/SearchBar";
import { Stats } from "@/components/home/Stats";
import { WhyUs } from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Header active="home" overlay />
      <main>
        <Hero />
        <SearchBar />
        <Categories />
        <Owners />
        <BestOffers />
        <Stats />
        <WhyUs />
        <Reviews />
        <Office />
        <LeadForm />
        <OfficeInfo />
      </main>
      <Footer />
    </>
  );
}
