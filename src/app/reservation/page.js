'use client';
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export default function ReservationPage() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: "2",
        phone: ""
    });
    const [status, setStatus] = useState("idle"); // idle, submitting, success

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate submission
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/20">
            <Navbar />

            <section className="bg-primary text-primary-foreground pt-32 pb-20 px-6 text-center">
                <FadeIn>
                    <span className="text-accent tracking-widest text-xs uppercase font-bold mb-4 block">
                        Reservations
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">Book a Table</h1>
                </FadeIn>
            </section>

            <Section className="max-w-xl mx-auto">
                <FadeIn delay={0.2}>
                    {status === "success" ? (
                        <div className="text-center py-12 border border-accent/20 bg-secondary/20 p-8">
                            <h2 className="text-3xl font-serif mb-4 text-accent">Reservation Requested</h2>
                            <p className="text-muted-foreground font-light mb-6">
                                Thank you, {formData.name}. We have received your request for a table of {formData.guests} on {formData.date} at {formData.time}. We will confirm via phone shortly.
                            </p>
                            <Button onClick={() => setStatus("idle")} variant="outline">
                                Make Another Booking
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-wide text-muted-foreground font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-muted-foreground/30 py-2 text-xl font-serif focus:border-accent focus:outline-none transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wide text-muted-foreground font-medium">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-muted-foreground/30 py-2 text-lg font-sans focus:border-accent focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wide text-muted-foreground font-medium">Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-muted-foreground/30 py-2 text-lg font-sans focus:border-accent focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wide text-muted-foreground font-medium">Guests</label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-muted-foreground/30 py-2 text-lg font-sans focus:border-accent focus:outline-none transition-colors"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                                        <option value="9+">9+ Guests</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wide text-muted-foreground font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-muted-foreground/30 py-2 text-lg font-sans focus:border-accent focus:outline-none transition-colors"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>

                            <div className="pt-8">
                                <Button type="submit" className="w-full" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Checking Availability..." : "Confirm Booking"}
                                </Button>
                            </div>
                        </form>
                    )}
                </FadeIn>
            </Section>
            <Footer />
        </main>
    );
}
