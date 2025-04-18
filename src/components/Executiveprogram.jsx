import React from 'react';

const ExecutiveCorporateProgram = () => {
  return (
<section className="relative h-[350px] w-full overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca" 
    alt="Corporate travel"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-green-900 opacity-70"></div>

  <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 text-white">
    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      A+ Executive Corporate Program
    </h2>
    <ul className="space-y-1 text-sm md:text-base font-light">
      <li>Our business services offer flexibility and exclusive savings for your company.</li>
      <li>We provide tailored solutions based on your travel spend to maximize your corporate travel budget.</li>
      <li>You can collectively earn rewards from all employee travel and redeem them for dynamic flights.</li>
      <li>Additionally, use rewards for flight upgrades and benefits like excess baggage and seat allocation.</li>
    </ul>
    <button className="mt-4 w-fit bg-white text-green-900 px-5 py-2 font-semibold rounded shadow hover:bg-gray-100">
      Become a Member
    </button>
  </div>
</section>

  );
};

export default ExecutiveCorporateProgram;
