import Footer from "../helpers/Footer";
import Hero from "../helpers/Hero";
import HomeDishes from "../helpers/HomeDishes";
import MenuSection from "../helpers/MenuSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="lg:px-52">
        <MenuSection />
        <HomeDishes />
      </div>
      <Footer />
    </div>
  );
}
