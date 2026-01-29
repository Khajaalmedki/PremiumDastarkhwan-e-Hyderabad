"use client";

export default function DishCard({ item, currency, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        dish-card cursor-pointer
        w-60 min-w-60 shrink-0
        transition-transform
        duration-200 ease-out
        mx-auto
      "
    >
      <div className="rounded-3xl overflow-hidden bg-white">
        <img
          src={item.image}
          alt={item.name}
          className="h-56 w-full object-cover"
        />
      </div>

      <div className="mt-4 px-2">
        {/* Title Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2">
            {/* Veg / Non-Veg Dot */}
            <span
              className={`mt-[6.5] h-3 w-3 rounded-full border shrink-0 
                ${
                  item.veg
                    ? "bg-green-600 border-green-700"
                    : "bg-red-600 border-red-700"
                }`}
            />

            {/* Dish Name */}
            <h3 className="font-serif text-lg leading-snug">
              {item.name}
            </h3>
          </div>

        </div>

        {/* Description */}
        <p className="text-sm opacity-60 mt-1 line-clamp-2">
          {item.description}
        </p>

        {/* Meta Row – mobile */}
        <div className="mt-2 flex items-center gap-3 text-sm opacity-60">
          <span>
            {currency}{item.price}
          </span>

          {item.rating && (
            <span>
              ★ {item.rating}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
