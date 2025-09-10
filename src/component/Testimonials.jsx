import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightTech",
    feedback:
      "This team did an amazing job! They understood our requirements clearly and delivered on time with excellent quality.",
  },
  {
    name: "Michael Lee",
    role: "Founder, CreativeHub",
    feedback:
      "Highly professional and easy to work with. They transformed our ideas into a polished and functional product.",
  },
  {
    name: "Aisha Khan",
    role: "Manager, Global Solutions",
    feedback:
      "Great communication and superb results. I would definitely recommend their services to anyone.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                “{testimonial.feedback}”
              </p>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
