'use client';
import { useRestaurantConfig } from "@/context/RestaurantConfigContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    const config = useRestaurantConfig();
    const { contact, locationContext } = config;

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/20">
            <Navbar />

            <section className="bg-primary text-primary-foreground pt-32 pb-20 px-6 text-center">
                <FadeIn>
                    <span className="text-accent tracking-widest text-xs uppercase font-bold mb-4 block">
                        Get in Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
                </FadeIn>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <FadeIn>
                        <h2 className="text-3xl font-serif mb-8">Location</h2>
                        <address className="not-italic text-lg text-muted-foreground font-light leading-loose space-y-4">
                            <p>Road No. 12, Banjara Hills<br />{locationContext.city}, {locationContext.country}</p>
                            <div className="pt-4">
                                <p>Email: {contact?._ || contact?.email}</p>
                                <p>Phone: {contact?._ || contact?.phone}</p>
                            </div>
                        </address>
                        <div className="mt-8">
                            <Button href={config.socials_?.googleMaps || config.socials?.googleMaps || "#"} variant="outline">
                                View on Google Maps
                            </Button>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-serif mb-8">Opening Hours</h2>
                        <ul className="text-lg text-muted-foreground font-light leading-loose space-y-2">
                            <li className="flex justify-between border-b border-muted py-2">
                                <span>Monday - Thursday</span>
                                <span>12:00 PM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-muted py-2">
                                <span>Friday</span>
                                <span>01:00 PM - 12:00 AM</span>
                            </li>
                            <li className="flex justify-between border-b border-muted py-2">
                                <span>Saturday - Sunday</span>
                                <span>12:00 PM - 12:00 AM</span>
                            </li>
                        </ul>
                    </FadeIn>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
