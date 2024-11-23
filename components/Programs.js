"use client";
import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "Science Stream",
      description: "Explore the world of science with specialized courses in Physics, Chemistry, and Biology.",
      icon: "🔬",
    },
    {
      title: "Commerce Stream",
      description: "Learn the fundamentals of business, accounting, and economics for a successful future.",
      icon: "💼",
    },
    {
      title: "Arts Stream",
      description: "Unleash your creativity with subjects like History, Literature, and Political Science.",
      icon: "🎨",
    },
    {
      title: "Sports & Athletics",
      description: "Foster physical development with top-tier sports facilities and coaching.",
      icon: "🏅",
    },
  ];

  return (
    <section id="programs" className="py-16 bg-bl text-burgundy">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Programs
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{program.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>

              {/* Description */}
              <p className="text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
