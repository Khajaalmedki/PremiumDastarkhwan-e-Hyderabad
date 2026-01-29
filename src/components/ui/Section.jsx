import { cn } from "@/lib/utils";

export function Section({ children, className, id, ...props }) {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 px-6 md:px-12 w-full max-w-screen-2xl mx-auto",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
