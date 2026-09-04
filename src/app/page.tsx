import { Hero } from "@/components/home/Hero";
import { SignatureBowls } from "@/components/home/SignatureBowls";
import { Herkomst } from "@/components/home/Herkomst";
import { Praktisch } from "@/components/home/Praktisch";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SignatureBowls />
        <Herkomst />
        <Praktisch />
      </main>
      <Footer />
    </>
  );
}
