import React, { useRef } from 'react';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

const SocialIcon: React.FC<{ href: string; delay: number; isVisible: boolean; children: React.ReactNode }> = ({ href, delay, isVisible, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-yellow-400 transition-all duration-500 ease-out"
      style={{
        transitionDelay: `${isVisible ? delay : 0}ms`,
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? '0px' : '20px'})`,
      }}
    >
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useAnimateOnScroll(sectionRef);

  return (
    <footer ref={sectionRef} id="contact" className="bg-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">UOLI</h3>
            <p>Empowering Future Leaders in Islamabad and beyond.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#programs" className="hover:text-yellow-400">Programs</a></li>
              <li><a href="#admissions" className="hover:text-yellow-400">Admissions</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon href="#" delay={0} isVisible={isVisible}>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </SocialIcon>
              <SocialIcon href="#" delay={100} isVisible={isVisible}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </SocialIcon>
              <SocialIcon href="#" delay={200} isVisible={isVisible}>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} University of Online Learning & Innovation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;