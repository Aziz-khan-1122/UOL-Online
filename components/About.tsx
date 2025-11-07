
import React, { useRef } from 'react';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useAnimateOnScroll(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img src="https://picsum.photos/800/600?random=1" alt="University Campus" className="rounded-lg shadow-2xl" loading="lazy" />
          </div>
          <div
            className={`transition-all duration-1000 ease-out delay-200 motion-reduce:transition-none motion-reduce:delay-0 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">About UOLI</h2>
            <p className="text-gray-300 mb-4">
              Founded on the principles of innovation, leadership, and academic rigor, the University of Online Learning & Innovation (UOLI) is a beacon of higher education in Islamabad. We are dedicated to nurturing the next generation of thinkers, creators, and leaders.
            </p>
            <p className="text-gray-300">
              Our state-of-the-art campus, world-class faculty, and a curriculum designed for the future provide an unparalleled learning experience. We believe in education that transcends boundaries and prepares students for global challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
