"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/s.jpeg",
    "/school.jpeg",
    "/s.jpeg",
    "/school.jpeg",
    "/s.jpeg",
    "/school.jpeg",
  ];

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-16 bg-burgundy text-bl">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mt-4 mb-14">
          Photo Gallery
        </h2>

        {/* Gallery Image with Scroll Animation */}
        <div className="relative w-full h-96 overflow-hidden">
          <motion.img
            src={images[currentImage]}
            alt={`Gallery Image ${currentImage + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // Adding fade-in animation
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-6 mt-6">
          <button
            onClick={prevImage}
            className="text-white text-2xl font-bold bg-burgundy p-2 rounded-full shadow-lg hover:bg-opacity-80"
          >
            &#8249; Prev
          </button>
          <button
            onClick={nextImage}
            className="text-white text-2xl font-bold bg-burgundy p-2 rounded-full shadow-lg hover:bg-opacity-80"
          >
            Next &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
