import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="relative">
        <Hero />
        <Menu />
        <Story />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
