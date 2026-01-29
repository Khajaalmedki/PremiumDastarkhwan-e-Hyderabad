'use client';
import { FadeIn } from "@/components/ui/FadeIn";

export function MenuItem({ item, index, onClick }) {
    return (
        <FadeIn delay={index * 0.05} className="w-full">
            <div
                onClick={onClick}
                className="group cursor-pointer hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-accent pr-4 py-2"
            >
                <div className="flex justify-between items-baseline gap-4 mb-1">
                    <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                    </h3>
                    <div className="flex-1 border-b border-dotted border-muted-foreground/30 mx-2 relative -top-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="font-sans font-light text-foreground/80 group-hover:text-foreground transition-colors">₹{item.price}</span>
                </div>
                <p className="font-sans text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-2xl group-hover:text-muted-foreground/80">
                    {item.description}
                </p>
            </div>
        </FadeIn>
    );
}
