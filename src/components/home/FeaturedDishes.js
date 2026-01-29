"use client";

import Image from "next/image";

export default function FeaturedDishes({ data }) {
  
  return (
    <section className="px-12 md:px-24 pt-30 max-w-7xl mx-auto text-center">
      <h2 className="font-serif text-3xl mb-12">
        Our Signature Dishes
      </h2>

      <div
        className="
          grid gap-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          justify-items-center
        "
      >
        {Object.entries(data).map(([id, dish]) => (
            <div
              key={id}
              className="w-full text-left"
            > 
              <img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
                className="
                  h-60 w-full aspect-4/3
                  object-cover object-center
                  rounded-3xl 
                "
              />

              <h3 className="font-serif text-lg mt-4">
                {dish.name}
              </h3>

              <p className="opacity-70">
                ₹{dish.price}
              </p>
            </div>
        ))}
      </div>
    </section>
  );
}
