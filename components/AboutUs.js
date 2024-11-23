export default function AboutUs() {
    return (
      <section id="about" className="py-16 bg-burgundy text-bl">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-14 mt-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              About Us
            </h2>
            <p className="text-lg text-white md:text-xl mt-4">
              Learn more about our mission, vision, and commitment to excellence.
            </p>
          </div>
  
          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="/s.jpeg"
                alt="About Vishal Bharti School"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
  
            {/* Text Section */}
            <div className="w-full text-bl md:w-1/2 text-lg text-white leading-relaxed space-y-6">
              <p>
                At Vishal Bharti Senior Secondary School, we cultivate an environment where dreams take flight and lifelong learning begins. We focus on academic excellence while fostering creativity and strong moral values.
              </p>
              <p>
                Our dedicated educators and state-of-the-art facilities ensure that students are equipped to meet the challenges of a dynamic and evolving world. Join us in shaping bright futures, one step at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  