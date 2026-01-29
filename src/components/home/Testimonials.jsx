'use client';
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";

export function Testimonials() {
    const config = useRestaurantConfig();
    const testimonials = config.home.testimonials_ || config.home.testimonials;

    const items = Array.isArray(testimonials)
        ? testimonials
        : Object.values(testimonials || {});

    // For simplicity and "quiet" design, we'll just show one or two statically or a simple grid, 
    // rather than a busy carousel. Let's start with a grid for the 'handcrafted' feel.

    return (
        <Section className="bg-foreground text-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {items.slice(0, 2).map((item, index) => (
                    <FadeIn key={index} delay={index * 0.2}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <Quote className="w-8 h-8 text-accent mb-6 opacity-50" />
                                <p className="text-xl md:text-2xl font-serif leading-relaxed opacity-90 mb-8">
                                    &quot;{item.quote}&quot;
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-accent" />
                                <span className="text-sm tracking-widest uppercase text-accent/80 font-medium">
                                    {item.author}
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
