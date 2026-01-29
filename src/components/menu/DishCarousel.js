"use client";

import { useRef, useState, useEffect } from "react";
import DishCard from "./DishCard";
import DishModal from "./DishModal";

export default function DishCarousel({ id, category, currency }) {
  const containerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Center-focus scaling ONLY on mobile
  const handleScroll = () => {
    if (!isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".dish-card");
    const center =
      container.scrollLeft + container.offsetWidth / 2;

    cards.forEach((card) => {
      const cardCenter =
        card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);
      const maxDistance = container.offsetWidth / 2;
      const ratio = Math.min(distance / maxDistance, 1);

      const scale = 1 - ratio * 0.08;
      const opacity = 1 - ratio * 0.3;

      card.style.transform = `scale(${scale})`;
      card.style.opacity = opacity;
    });
  };

  return (
    <section id={id} className="px-6">
      {/* CATEGORY TITLE (CENTERED) */}
      <div className="mb-10 text-center">
        <h2 className="font-serif text-3xl mb-1">
          {category.label}
        </h2>
        <p className="text-sm opacity-70 max-w-xl mx-auto">
          {category.description}
        </p>
      </div>

      {/* ITEMS */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={`
          gap-6 md:gap-9 py-6 mx-auto
          ${isMobile
            ? "flex overflow-x-auto scroll-smooth will-change-transform"
            : "grid grid-cols-2 md:grid-cols-4 justify-center"}
        `}
        style={!isMobile ? { maxWidth: "1100px" } : undefined}
      >
        {Object.entries(category.items_).map(([id, item]) => (
          <DishCard
            key={id}
            item={item}
            currency={currency}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* MODAL */}
      <DishModal
        item={selectedItem}
        currency={currency}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
