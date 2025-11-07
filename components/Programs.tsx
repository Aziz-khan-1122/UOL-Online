
import React, { useRef } from 'react';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

interface ProgramCardProps {
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, delay, isVisible }) => {
  return (
    <div
      className={`bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-out motion-reduce:transition-none hover:shadow-yellow-400/20 hover:-translate-y-2 hover:scale-105`}
      style={{
        transitionDelay: `${isVisible ? delay : 0}ms`,
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? '0px' : '30px'})`,
      }}
    >
      <h3 className="text-2xl font-bold text-yellow-400 mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Programs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useAnimateOnScroll(sectionRef);

  const programs = [
    { title: 'Undergraduate Degrees', description: 'Explore a wide range of bachelor programs in arts, sciences, and engineering designed to build a strong foundation for your career.' },
    { title: 'Postgraduate Studies', description: 'Advance your expertise with our master\'s and doctoral programs, led by renowned researchers and industry experts.' },
    { title: 'Research Programs', description: 'Join our cutting-edge research initiatives and contribute to groundbreaking discoveries in various fields.' },
  ];

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
