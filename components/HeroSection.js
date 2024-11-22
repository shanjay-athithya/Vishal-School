// components/HeroSection.js

export default function HeroSection({ title = "ABC School", tagline = "Empowering Bright Minds for a Brighter Tomorrow" }) {
    return (
      <section className="relative bg-burgundy text-white h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
  
        {/* Tagline */}
        <p className="text-lg md:text-2xl font-light max-w-3xl">{tagline}</p>
      </section>
    );
  }
  