"use client";

export default function DishModal({ item, currency, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-serif text-2xl">
              {item.name}
            </h3>
            <span className="opacity-70">
              {currency}{item.price}
            </span>
          </div>

          <p className="text-sm opacity-80 mb-4">
            {item.description}
          </p>

          {item.rating && (
            <p className="text-sm opacity-60">
              ★ {item.rating} / 5
            </p>
          )}

          <button
            onClick={onClose}
            className="w-full mt-6 py-3 rounded-full border text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
