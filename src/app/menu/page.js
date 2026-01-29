'use client'

import MenuHeader from "@/components/menu/MenuHeader";
import CategoryRail from "@/components/menu/CategoryRail";
import DishCarousel from "@/components/menu/DishCarousel";
import { useRestaurantConfig } from '@/context/RestaurantConfigContext'


export default function MenuPage() {
 
  const restaurantConfig = useRestaurantConfig()
  const menuCategories = restaurantConfig.menuConfig.categories_
  return (
    <main className="max-w-360 mx-auto pb-32">
      <MenuHeader
        name={restaurantConfig.basicInfo.name}
        tagline={restaurantConfig.basicInfo.cuisine}
      />

      <CategoryRail categories={menuCategories} />

      <section className="space-y-24 mt-24">
        {Object.entries(menuCategories).map(([id, category]) => (
          <DishCarousel
            key={id}
            id={id}
            category={category}
            currency={"₹"}
          />
        ))}
      </section>
    </main>
  );
}
