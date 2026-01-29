'use client';
import { FadeIn } from "@/components/ui/FadeIn";

export function MenuCategory({ title, description, children, index }) {
    return (
        <section className="mb-20 md:mb-32">
            <FadeIn delay={index * 0.2}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{title}</h2>
                    {description && (
                        <p className="text-muted-foreground font-light italic text-lg max-w-xl mx-auto">
                            {description}
                        </p>
                    )}
                    <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-6" />
                </div>
            </FadeIn>
            <div className="space-y-10 max-w-3xl mx-auto px-4">
                {children}
            </div>
        </section>
    );
}
