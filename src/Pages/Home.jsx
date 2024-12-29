import Category from "../Components/Category";
import CustomSection from "../Components/CustomSection";
import FeaturedSection from "../Components/FeaturedSection";
import MenuSection from "../Components/MenuSection";
import Testimonials from "../Components/Testimonials";
import HeroSection from "./../Components/HeroSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <CustomSection />
      <MenuSection />
      <FeaturedSection />
      <Testimonials />
    </>
  );
}
