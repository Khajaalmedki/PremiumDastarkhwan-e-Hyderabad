'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DishDetailModal({ dish, isOpen, onClose }) {
    if (!isOpen || !dish) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-background w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto max-h-[90vh] md:max-h-[80vh]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                    >
                        <X size={20} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-muted">
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-accent text-xs tracking-[0.2em] uppercase font-bold">
                                {dish.tags?.[0] || "Specialty"}
                            </span>
                            {dish.rating && (
                                <div className="flex items-center gap-1 text-accent">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-sm font-medium">{dish.rating}</span>
                                </div>
                            )}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 leading-tight">
                            {dish.name}
                        </h2>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-2xl font-light text-foreground">₹{dish.price}</span>
                            <div className="h-4 w-[1px] bg-muted-foreground/30" />
                            <div className="flex gap-3">
                                {dish.veg ? (
                                    <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-green-700 font-medium">
                                        <Leaf size={14} /> Veg
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-red-700 font-medium">
                                        <Flame size={14} /> Non-Veg
                                    </span>
                                )}
                                {dish.tags?.includes('spicy') && (
                                    <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-orange-600 font-medium">
                                        <Flame size={14} /> Spicy
                                    </span>
                                )}
                            </div>
                        </div>

                        <p className="text-muted-foreground font-light leading-loose text-lg mb-8 flex-grow">
                            {dish.description}
                        </p>

                        {/* Footer / CTA Placeholder */}
                        <div className="pt-8 border-t border-muted mt-auto">
                            <Button className="w-full justify-between group" variant="primary">
                                <span>Add to Order</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                            <p className="text-center text-xs text-muted-foreground/60 mt-4 tracking-wide uppercase">
                                Requires In-Dining QR Setup
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
