import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Customers Say",
  testimonials
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-black">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <p className="text-gray-600 mb-4 italic">{`"${testimonial.quote}"`}</p>
              <p className="font-medium dark:text-black">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;