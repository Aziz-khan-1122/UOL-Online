import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="admissions" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 rounded-lg p-12 animate-gradient">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join UOLI Today!</h2>
          <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
            Ready to take the next step in your academic and professional journey? Get in touch with our admissions team to learn more about our programs and application process.
          </p>
          <a href="mailto:admissions@uoli.edu" className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            Request Info
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;