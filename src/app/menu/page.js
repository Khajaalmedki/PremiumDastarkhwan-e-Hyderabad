'use client';
import { useState } from "react";
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MenuCategory } from "@/components/menu/MenuCategory";
import { MenuItem } from "@/components/menu/MenuItem";
import { DishDetailModal } from "@/components/menu/DishDetailModal";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export default function MenuPage() {
  const config = useRestaurantConfig();
  const [selectedDish, setSelectedDish] = useState(null);

  const categories = config.menuConfig.categories_ || config.menuConfig.categories;

  // Normalize categories to array if object
  const categoryList = Array.isArray(categories)
    ? categories
    : Object.entries(categories || {}).map(([key, val]) => ({ ...val, id: key }));

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <Navbar />

      {/* Menu Header - Dark background to support white navbar */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 px-6 text-center">
        <FadeIn>
          <span className="text-accent tracking-widest text-xs uppercase font-bold mb-4 block">
            The Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Menu</h1>
          <p className="text-white/70 max-w-xl mx-auto font-light text-lg leading-relaxed">
            A celebration of authentic recipes, slow-cooked with patience and served with pride.
          </p>
        </FadeIn>
      </section>

      {/* Menu Content */}
      <Section className="py-24">
        {categoryList.map((category, index) => {
          const items = category.items_ || category.items;
          const itemList = Array.isArray(items)
            ? items
            : Object.values(items || {});

          return (
            <MenuCategory
              key={category.id || index}
              title={category.label || category.name}
              description={category.description}
              index={index}
            >
              {itemList.map((item, idx) => (
                <MenuItem
                  key={item.id || idx}
                  item={item}
                  index={idx}
                  onClick={() => setSelectedDish(item)}
                />
              ))}
            </MenuCategory>
          );
        })}
      </Section>

      <DishDetailModal
        dish={selectedDish}
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      <Footer />
    </main>
  );
}
