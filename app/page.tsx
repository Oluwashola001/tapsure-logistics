import HeroVideo from "../components/HeroVideo";
import Navbar from "../components/Navbar";
import Sectors from "../components/Sectors";
import TechSection from "../components/TechSection";
import TechFeatures from "../components/TechFeatures";
import AppExperienceAnimated from "../components/AppExperience";
import Footer from "../components/Footer"; // <--- Import Footer

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroVideo />
      <Sectors />
      <TechSection />
      <TechFeatures />
      <AppExperienceAnimated />
      <Footer /> {/* <--- Add Footer here */}
    </main>
  );
}