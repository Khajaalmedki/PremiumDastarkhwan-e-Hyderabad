"use client";

import { motion } from "framer-motion";

export default function LocationsSection({ data }) {
  return (
    <section
      className="px-12 pt-30 max-w-6xl mx-auto text-center"
    >
      <h2
        className="font-serif text-3xl mb-12"
      >
        Our Locations
      </h2>

      <div className="grid md:grid-cols-2 gap-10 text-left">
        {Object.entries(data).map(([id, loc]) => ( 
          
          <div
            key={id}
            className="p-8 rounded-3xl border bg-white space-y-6"
          >
            {/* TEXT CONTENT */}
            <div>
              <h3 className="font-serif text-xl mb-2">
                {loc.name}
              </h3>
              <p className="opacity-70">
                {loc.address}
              </p>
            </div>

            {/* MAP SQUARE */}
            <a
              href={loc.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-40 aspect-square rounded-2xl overflow-hidden border"
            >
              <iframe
                title={loc.name}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  loc.address
                )}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </a>

            <p className="text-sm opacity-60">
              Tap map to open directions
            </p>
          </div>
        
        ))}
      </div>
    </section>
  );
}
