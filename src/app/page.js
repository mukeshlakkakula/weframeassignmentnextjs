import ArticlesSimilaities from "@/components/ArticlesSimilaities";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ItemDetails from "@/components/ItemDetails";

import SliderComponent from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Header />
      <ItemDetails />
      <ArticlesSimilaities />
      <SliderComponent />
      <BannerSection />
      <Footer />
    </div>
  );
}
