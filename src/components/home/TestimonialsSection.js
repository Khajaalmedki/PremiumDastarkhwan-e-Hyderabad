"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection({ data }) {
  return (
    <section
      className="px-6 pt-25 max-w-5xl mx-auto text-center"
    >
      <h2
        className="font-serif text-3xl mb-12"
      >
        What Our Guests Say
      </h2>

      <div className="grid md:grid-cols-2 gap-10 text-left">
        {Object.entries(data).map(([id, t]) => (

          <blockquote
            key={id}
            className="p-8 rounded-3xl bg-white"
          >
            <p className="italic mb-4">
              “{t.quote}”
            </p>
            <footer className="text-sm opacity-70">
              — {t.author}
            </footer>
          </blockquote>

        ))}
      </div>
    </section>
  );
}
