import { Mail, Phone, Instagram, Facebook, MapPin } from "lucide-react";
import { useRestaurantConfig } from '@/context/RestaurantConfigContext'

export default function HomeFooter() {
  const { basicInfo, contact_, socials_, locationContext } = useRestaurantConfig();

  return (
    <footer className="mt-40 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 ">

          {/* LEFT — BRAND (WIDER) */}
          <div className="md:col-span-6 space-y-5 px-6">
            <h3 className="font-serif text-2xl">
              {basicInfo.name}
            </h3>

            <p className="text-sm opacity-70 leading-relaxed max-w-md">
              {basicInfo.description}
            </p>

            <p className="text-xs opacity-50">
              {locationContext.city}, {locationContext.country}
            </p>
          </div>

          {/* RIGHT — CONTACT & SOCIAL (PUSHED RIGHT) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-24 justify-items-center mt-12 sm:mt-0">

            {/* FOLLOW US */}
            <div className="space-y-4 ">
              <p className="text-sm uppercase tracking-wide opacity-60">
                Follow Us On
              </p>

              <div className="space-y-3 text-sm">
                {socials_.instagram && (
                  <a
                    href={socials_.instagram}
                    target="_blank"
                    className="flex items-center justify-start gap-3 opacity-70 hover:opacity-100 transition"
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                )}

                {socials_.facebook && (
                  <a
                    href={socials_.facebook}
                    target="_blank"
                    className="flex items-center justify-start gap-3 opacity-70 hover:opacity-100 transition"
                  >
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </a>
                )}

                {socials_.googleMaps && (
                  <a
                    href={socials_.googleMaps}
                    target="_blank"
                    className="flex items-center justify-start gap-3 opacity-70 hover:opacity-100 transition"
                  >
                    <MapPin size={16} />
                    <span>Google Maps</span>
                  </a>
                )}
              </div>
            </div>

            {/* REACH US */}
            <div className="space-y-4 text-left">
              <p className="text-sm uppercase tracking-wide opacity-60">
                Reach Us
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${contact_.phone}`}
                  className="flex items-center justify-start gap-3 opacity-70 hover:opacity-100 transition"
                >
                  <Phone size={16} />
                  <span>{contact_.phone}</span>
                </a>

                <a
                  href={`mailto:${contact_.email}`}
                  className="flex items-center justify-start gap-3 opacity-70 hover:opacity-100 transition"
                >
                  <Mail size={16} />
                  <span>{contact_.email}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t text-xs opacity-40">
          © {new Date().getFullYear()} {basicInfo.shortName}. All rights reserved. <br></br>  
          <a href="https://www.vecteezy.com/free-photos/chicken">Stock photos by Vecteezy</a>
        </div>
      </div>
    </footer>
  );
}
