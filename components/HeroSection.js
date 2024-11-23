export default function HeroSection({ 
    title = "Vishal Bharti Senior Secondary School", 
    tagline = "Empowering Bright Minds for a Brighter Tomorrow" 
  }) {
    return (
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center" 
               style={{ backgroundImage: `url('/school.jpeg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-burgundy opacity-60"></div>
  
        {/* Content */}
        <div className="relative z-10 text-white">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
    
          {/* Tagline */}
          <p className="text-lg text-bl md:text-2xl font-light">{tagline}</p>
        </div>
      </section>
    );
  }
  