"use client";

import { motion } from "framer-motion";

export default function LegacySection({ data }) {
  return (
    <section className="grid md:grid-cols-2 gap-16 items-center px-12 pt-32 md:px-24 max-w-7xl mx-auto">

      {/* IMAGE */}
      <img
        src={data.image}
        alt={data.title}
        className="rounded-3xl"
      />

      {/* TEXT */}
      <div
      >
        <h2 className="font-serif text-3xl mb-4">
          {data.title}
        </h2>
        <p className="opacity-80 leading-relaxed">
          {data.description}
        </p>
      </div>

    </section>
  );
}
