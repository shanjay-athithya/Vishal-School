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
      description: "Learn the fundamentals of business, accounting for a successful future.",
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
          className="text-4xl  md:text-5xl font-serif font-bold text-center mt-4 mb-14"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Programs
        </motion.h2>

        {/* Cards Diagonal Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-burgundy rounded-lg shadow-lg text-center ${
                index % 2 === 0 ? "ml-0" : "ml-auto"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{program.icon}</div>

              {/* Title */}
              <h3 className="text-2xl text-bl font-semibold mb-2">{program.title}</h3>

              {/* Description */}
              <p className="text-white">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
