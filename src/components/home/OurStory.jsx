'use client';
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function OurStory() {
    const config = useRestaurantConfig();
    const { legacy } = config.home;

    return (
        <Section className="bg-background relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Side */}
                <div className="order-2 lg:order-1">
                    <FadeIn>
                        <span className="text-accent tracking-widest text-xs uppercase font-bold mb-4 block">
                            Our Philosophy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                            {legacy.title}
                        </h2>
                        <div className="w-12 h-[1px] bg-accent/50 mb-8" />
                        <p className="text-muted-foreground text-lg leading-loose font-light">
                            {legacy.description}
                        </p>
                    </FadeIn>
                </div>

                {/* Image Side - Simple, Editorial */}
                <div className="order-1 lg:order-2 relative aspect-[4/5] md:aspect-[3/4]">
                    <FadeIn delay={0.2} fullWidth className="h-full">
                        <div className="relative w-full h-full overflow-hidden bg-muted">
                            <img
                                src={legacy.image}
                                alt="Our Heritage"
                                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                            />
                            <div className="absolute inset-0 border-[1px] border-background/20 m-4 pointer-events-none" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
