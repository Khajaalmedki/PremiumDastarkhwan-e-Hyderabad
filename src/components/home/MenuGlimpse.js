"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MenuGlimpse({ data }) {
  return (
    <section className="px-12 pt-32 max-w-7xl mx-auto text-center">

      {/* TITLE */}
      <h2
        className="font-serif text-3xl mb-10"
      >
        {data.title}
      </h2>

      {/* IMAGE GRID (NO MOTION) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {Object.entries(data.images_).map(([id, img]) => (
          
          <img
            key={id}
            src={img}
            alt="Food Image"
            className="rounded-2xl object-cover h-48 w-full"
            loading="lazy"
          />
        ))}
      </div>

      {/* CTA */}
      <a
        href={data.ctaLink}
        className="inline-block border px-8 py-3 rounded-full text-sm"
      >
        {data.ctaLabel}
      </a>

    </section>
  );
}
