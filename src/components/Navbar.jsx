'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const config = useRestaurantConfig();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            console.log("Mobile menu closed, body scroll restored");
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
                    scrolled ? "bg-background/95 backdrop-blur-md py-4 border-muted" : "bg-transparent py-4 md:py-8"
                )}
            >
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="z-50 relative group" onClick={() => setMobileMenuOpen(false)}>
                        <h1 className={cn(
                            "font-serif font-bold text-xl md:text-2xl tracking-tighter transition-colors duration-300",
                            (scrolled || mobileMenuOpen) ? "text-foreground" : "text-white"
                        )}>
                            {config.basicInfo.shortName}
                            <span className="text-accent">.</span>
                        </h1>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-12">
                        {['Home', 'Menu', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={cn(
                                    "text-sm font-medium uppercase tracking-widest transition-all hover:text-accent relative after:block after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-[width] hover:after:w-full",
                                    scrolled ? "text-foreground" : "text-white/90"
                                )}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/reservation"
                            className={cn(
                                "px-6 py-2 border text-xs uppercase tracking-widest transition-all duration-300",
                                scrolled
                                    ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                                    : "border-white text-white hover:bg-white hover:text-black"
                            )}
                        >
                            Book a Table
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn("md:hidden p-2 z-50 transition-colors", (scrolled || mobileMenuOpen) ? "text-foreground" : "text-white")}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {['Home', 'Menu', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-foreground hover:text-accent transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link
                                href="/reservation"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background text-sm uppercase tracking-widest transition-all duration-300"
                            >
                                Book a Table
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
