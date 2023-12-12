import Accordions from "./parts/Accordion";
import Footer from "./parts/Footer";
import Hero from "./parts/Hero";
import Hero2 from "./parts/Hero2";
import Hero3 from "./parts/Hero3";
import MarqueePart from "./parts/Marquee";
import NavigationMenuDemo from "./parts/Nav";
import NewsLetter from "./parts/NewsLetter";
import Testimonials from "./parts/Testimonials";

export default function Home() {
  return (
    <div className="">
      <NavigationMenuDemo />
      <Hero />
      <Hero2 />
      <MarqueePart />
      <Hero3 />
      <Testimonials />
      <Accordions />
      <NewsLetter />
      <Footer />
    </div>
  );
}
