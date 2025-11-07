
import React, { useState, useEffect, useRef } from 'react';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

interface AnimatedNumberProps {
  target: number;
  duration?: number;
  isVisible: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, duration = 1200, isVisible }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = target;
    if (start === end) return;

    const incrementTime = (duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span className="text-4xl md:text-6xl font-extrabold text-yellow-400">{count.toLocaleString()}</span>;
};


const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useAnimateOnScroll(sectionRef);

  const stats = [
    { label: 'Students Enrolled', value: 12500 },
    { label: 'Faculty Members', value: 850 },
    { label: 'Research Projects', value: 300 },
    { label: 'Intl. Partnerships', value: 75 },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedNumber target={stat.value} isVisible={isVisible} />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
