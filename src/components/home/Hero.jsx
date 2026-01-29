'use client';
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
    const config = useRestaurantConfig();
    const { hero } = config.home;

    return (
        <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={hero.image}
                    alt="Atmospheric Hyderabadi Cuisine"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-16">
                <FadeIn delay={0.2}>
                    <h2 className="text-secondary/90 tracking-[0.2em] text-xs md:text-sm uppercase mb-5 font-sans">
                        Est. 2024 • Hyderabad
                    </h2>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-secondary mb-6 leading-[1.1]">
                        {hero.title}
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <p className="text-secondary/80 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                        {hero.subtitle}
                    </p>
                </FadeIn>

                <FadeIn delay={0.8}>
                    <Button
                        href={hero.ctaLink}
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-primary backdrop-blur-sm"
                    >
                        {hero.ctaLabel}
                    </Button>
                </FadeIn>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce duration-[3000ms]">
                <div className="w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent opacity-50" />
            </div>
        </section>
    );
}
