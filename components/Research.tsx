
import React, { useState, useEffect, useRef } from 'react';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

const Typewriter: React.FC<{ text: string; isVisible: boolean }> = ({ text, isVisible }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, [text, isVisible]);

  return <span className="min-h-[1em] after:content-['|'] after:animate-ping">{displayText}</span>;
};

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  delay: number;
  isVisible: boolean;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ title, description, image, delay, isVisible }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-out motion-reduce:transition-none hover:shadow-yellow-400/20 hover:-translate-y-2"
      style={{
        transitionDelay: `${isVisible ? delay : 0}ms`,
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? '0px' : '30px'})`,
      }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const researchProjects = [
  {
    title: 'AI in Medicine',
    description: 'Developing predictive models for early disease detection and personalized treatment plans.',
    image: 'https://picsum.photos/800/600?random=3',
  },
  {
    title: 'Sustainable Energy Solutions',
    description: 'Innovating next-gen solar panels and energy storage systems to combat climate change.',
    image: 'https://picsum.photos/800/600?random=4',
  },
  {
    title: 'Quantum Computing Frontiers',
    description: 'Building and testing quantum algorithms to solve complex problems beyond classical computers.',
    image: 'https://picsum.photos/800/600?random=5',
  },
];

const Research: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const isTitleVisible = useAnimateOnScroll(sectionRef);
    const areCardsVisible = useAnimateOnScroll(cardsRef, { threshold: 0.1 });

  return (
    <section id="research">
      {/* Parallax Header */}
      <div ref={sectionRef} className="relative py-32 min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
              style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=2')" }}>
          </div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-center z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            <Typewriter text="Driving Research That Changes the World" isVisible={isTitleVisible} />
          </h2>
        </div>
      </div>
      
      {/* Research Projects Cards */}
      <div ref={cardsRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {researchProjects.map((project, index) => (
              <ResearchCard
                key={project.title}
                {...project}
                delay={index * 200}
                isVisible={areCardsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
