'use client';
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function FeaturedMenu() {
    const config = useRestaurantConfig();
    const featuredDishes = config.home.featuredDishes_ || config.home.featuredDishes;

    // Normalized to array if it's an object (legacy config vs new config structure support)
    const items = Array.isArray(featuredDishes)
        ? featuredDishes
        : Object.values(featuredDishes || {});

    return (
        <Section className="bg-secondary/30">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <FadeIn>
                    <span className="text-accent tracking-widest text-xs uppercase font-bold mb-4 block">
                        Curated Selections
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                        Signatures
                    </h2>
                </FadeIn>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                {items.map((dish, index) => (
                    <FadeIn key={dish.id || index} delay={index * 0.1}>
                        <div className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-accent/10 last:border-0 hover:bg-secondary/20 p-4 transition-colors rounded-sm cursor-default">
                            <div className="flex-1">
                                <div className="flex items-baseline justify-between md:justify-start gap-4 mb-2">
                                    <h3 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-accent transition-colors">
                                        {dish.name}
                                    </h3>
                                    <span className="text-lg font-light text-muted-foreground md:hidden">
                                        ₹{dish.price}
                                    </span>
                                </div>
                                <p className="text-muted-foreground font-light text-sm md:text-base line-clamp-2">
                                    Slow-cooked perfection with authentic Hyderabadi spices.
                                </p>
                            </div>

                            <div className="hidden md:block text-xl font-light text-foreground">
                                ₹{dish.price}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="flex justify-center mt-16">
                <FadeIn delay={0.4}>
                    <Button href="/menu" variant="outline">
                        View Full Menu
                    </Button>
                </FadeIn>
            </div>
        </Section>
    );
}
