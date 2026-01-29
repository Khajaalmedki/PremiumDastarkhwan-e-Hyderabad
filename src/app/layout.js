export const dynamic = "force-dynamic";
export const revalidate = 0;

import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { fetchProjectConfig } from "@/lib/fetchConfig";
import { RestaurantConfigProvider } from "@/context/RestaurantConfigContext";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({ children }) {

  const restaurantConfig = await fetchProjectConfig()

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <RestaurantConfigProvider config={restaurantConfig}>
          {children}
        </RestaurantConfigProvider>
      </body>
    </html>
  );
}
