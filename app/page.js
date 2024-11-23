import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs"; 
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs/>
      <Programs />
      <Gallery />
    </div>
  );
}
