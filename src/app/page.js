import { Hero } from "@/components/home/Hero";
import { OurStory } from "@/components/home/OurStory";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <Navbar />
      <Hero />
      <OurStory />
      <FeaturedMenu />
      <Testimonials />
      <Footer />
    </main>
  );
}
