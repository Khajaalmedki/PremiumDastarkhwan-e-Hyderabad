import { cn } from "@/lib/utils";
import Link from "next/link";

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    href,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center tracking-wide transition-all duration-300 border font-sans uppercase text-xs md:text-sm font-medium";

    const variants = {
        primary: "border-accent bg-accent text-accent-foreground hover:bg-accent/90",
        outline: "border-accent text-accent hover:bg-accent hover:text-accent-foreground",
        ghost: "border-transparent text-foreground hover:bg-secondary",
        link: "border-b border-primary/20 text-primary hover:border-primary pb-0.5 px-0 h-auto rounded-none"
    };

    const sizes = {
        sm: "h-9 px-4",
        md: "h-12 px-8",
        lg: "h-14 px-10",
        icon: "h-10 w-10",
    };

    const Element = href ? Link : 'button';
    const externalProps = href ? { href } : {};

    return (
        <Element
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...externalProps}
            {...props}
        >
            {children}
        </Element>
    );
}
