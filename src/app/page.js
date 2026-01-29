'use client'

//import { restaurantConfig } from "@/lib/restConfig";

import HomeHeader from "@/components/home/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import LegacySection from "@/components/home/LegacySection";
import MenuGlimpse from "@/components/home/MenuGlimpse";
import AwardsSection from "@/components/home/AwardsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationsSection from "@/components/home/LocationsSection";
import HomeFooter from "@/components/home/HomeFooter";

import { useRestaurantConfig } from '@/context/RestaurantConfigContext'

export default function HomePage() {
  // const { home } = restaurantConfig;
  const home = useRestaurantConfig().home

  return (
    <main>
      <HomeHeader />
      <HeroSection data={home.hero} />
      <FeaturedDishes data={home.featuredDishes_} />
      <LegacySection data={home.legacy} />
      <MenuGlimpse data={home.menuPreview} />
      <AwardsSection data={home.awards_} />
      <TestimonialsSection data={home.testimonials_} />
      <LocationsSection data={home.locations_} />
      <HomeFooter />
    </main>
  );
}
