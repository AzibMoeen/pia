import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data';

const OurServices = () => {
  return (
    <section className="py-16 bg-[#f8f5eb] w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-10">
        <h2 className="text-4xl md:text-5xl text-green-700 mb-12">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id} 
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;