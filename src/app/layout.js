import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { RestaurantConfigProvider } from "@/context/RestaurantConfigContext";
import { fetchProjectConfig } from "@/lib/fetchConfig";
import { restaurantConfig as fallbackConfig } from "@/lib/restConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Dastarkhwan-e-Hyderabad | Authentic Hyderabadi Cuisine",
  description: "Experience the royal culinary heritage of Hyderabad. Slow-cooked, authentic, and timeless.",
};

export default async function RootLayout({ children }) {
  let config;
  try {
    config = await fetchProjectConfig();
  } catch (e) {
    console.error("Failed to fetch config, using fallback");
    config = fallbackConfig;
  }

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased selection:bg-accent/20`}>
        <RestaurantConfigProvider config={config}>
          {children}
        </RestaurantConfigProvider>
      </body>
    </html>
  );
}
