import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  initials: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Post-surgery Recovery",
    content: "The home physiotherapy service was exceptional. The therapist was professional, knowledgeable, and made my recovery process much more comfortable. Highly recommended!",
    initials: "PS",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Sports Injury",
    content: "Convenient and effective! The physiotherapist came to my home with all necessary equipment. The personalized care and attention made a huge difference in my recovery.",
    initials: "RK",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Chronic Pain Management",
    content: "I've been struggling with chronic back pain for years. The home physiotherapy sessions have been life-changing. The convenience of having treatment at home is invaluable.",
    initials: "AP",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {testimonial.initials}
                </span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 