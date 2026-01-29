"use client";

import { useEffect, useState } from "react";

export default function CategoryRail({ categories }) {
  const categoryEntries = Object.entries(categories);

  const [active, setActive] = useState(categoryEntries[0]?.[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    categoryEntries.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToCategory = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-0 z-20 bg-(--color-bg)">
      <div className="overflow-x-auto">
        <div className="flex gap-3 px-6 py-4 w-max mx-auto">
          {categoryEntries.map(([id, cat]) => (
            <button
              key={id}
              onClick={() => scrollToCategory(id)}
              className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition
                ${
                  active === id
                    ? "bg-(--color-accent) text-black"
                    : "border border-black/20 opacity-70"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

