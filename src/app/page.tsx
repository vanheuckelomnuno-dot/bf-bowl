import { Hero } from "@/components/home/Hero";
import { Herkomst } from "@/components/home/Herkomst";
import { Praktisch } from "@/components/home/Praktisch";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { restaurantSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema()) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Herkomst />
        <Praktisch />
      </main>
      <Footer />
    </>
  );
}
