import Link from "next/link";
import { useRestaurantConfig } from '@/context/RestaurantConfigContext'


export default function HomeHeader() {
  
  const restaurantConfig = useRestaurantConfig();

  return (
    <header className="h-14 flex items-center md:px-6">
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <h1 className="font-serif leading-none m-0 text-xl">
          {restaurantConfig.basicInfo.name}
        </h1>

        <Link
          href="/menu"
          className="text-sm leading-none opacity-70 hover:opacity-100 transition"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}
