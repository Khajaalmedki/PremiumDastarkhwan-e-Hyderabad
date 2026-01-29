import Link from "next/link";

export default function MenuHeader({ name, tagline }) {
  return (
    <header className="text-center mt-16 mb-20 px-6">
      <Link href="/" className="inline-block">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 hover:opacity-80 transition">
          {name}
        </h1>
      </Link>

      <p className="opacity-70 text-sm tracking-wide">
        {tagline}
      </p>
    </header>
  );
}
