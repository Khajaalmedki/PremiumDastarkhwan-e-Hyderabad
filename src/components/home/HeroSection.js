"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      {console.log(data.image)}
      <Image
        src={data.image}
        alt={data.title}
        priority
        fill
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div
        className="relative text-center text-white max-w-3xl px-6"
      >
        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          {data.title}
        </h2>
        <p className="opacity-90 mb-8">
          {data.subtitle}
        </p>
        <a
          href={data.ctaLink}
          className="inline-block bg-[var(--color-accent)] text-black px-8 py-3 rounded-full"
        >
          {data.ctaLabel}
        </a>
      </div>
    </section>
  );
}
