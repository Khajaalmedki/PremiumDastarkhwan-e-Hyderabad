"use client";

import { motion } from "framer-motion";

export default function AwardsSection({ data }) {
  return (
    <section
      className="px-6 pt-30 max-w-5xl mx-auto text-center"
    >
      <h2
        className="font-serif text-3xl mb-12"
      >
        Awards & Recognition
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(data).map(([id, award]) => (
            <div
              key={id}
              className="flex gap-6 items-center justify-center"
            >
              <img
                src={award.image}
                alt={award.title}
                className="h-16 w-16 object-contain"
              />
              <div className="text-left">
                <p className="font-medium">
                  {award.title}
                </p>
                <p className="text-sm opacity-70">
                  {award.issuer} · {award.year}
                </p>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
