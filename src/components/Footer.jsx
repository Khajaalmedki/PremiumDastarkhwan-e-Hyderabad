'use client';
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
    const config = useRestaurantConfig();
    const { basicInfo, locationContext, contact } = config;

    return (
        <footer className="bg-primary text-primary-foreground border-t border-white/10">
            <Section className="py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif tracking-tight">Dastarkhwan</h2>
                        <p className="text-white/60 font-light leading-relaxed max-w-sm">
                            {basicInfo.description}
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-accent">Navigate</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/70 hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/menu" className="text-white/70 hover:text-accent transition-colors">Menu</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-accent">Visit Us</h3>
                        <address className="not-italic text-white/70 space-y-4 leading-relaxed font-light">
                            <p>{locationContext.city}, {locationContext.country}</p>
                            <p>Email: {contact?._ || contact?.email || "contact@dastarkhwan.com"}</p>
                            <p>Phone: {contact?._ || contact?.phone || "+91 98765 43210"}</p>
                        </address>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} {basicInfo.name}. All rights reserved.</p>
                    <p>Designed with Patience.</p>
                </div>
            </Section>
        </footer>
    );
}
