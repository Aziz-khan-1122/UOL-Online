
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "UOLI gave me the skills and confidence to launch my startup. The faculty are not just teachers; they are mentors for life.",
    name: "Ayesha Khan",
    title: "CEO, Innovatech"
  },
  {
    quote: "The research opportunities at UOLI are unparalleled. I was able to work on projects that are making a real-world impact.",
    name: "Bilal Ahmed",
    title: "PhD Candidate, AI"
  },
  {
    quote: "As an international student, I felt welcomed from day one. The diverse community at UOLI is one of its greatest strengths.",
    name: "Fatima Al-Jamil",
    title: "Software Engineer, TechCorp"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Words From Our Alumni</h2>
        <div className="relative max-w-3xl mx-auto h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <blockquote className="text-xl italic text-gray-300">"{testimonial.quote}"</blockquote>
              <p className="mt-6 font-bold text-yellow-400">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          ))}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
