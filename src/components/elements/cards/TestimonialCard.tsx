import React from 'react';

const TestimonialCard: React.FC = () => (
  <div className="w-full max-w-xs flex flex-col items-center py-6 px-6 lg:px-8 bg-gray-50 shadow-lg ">
    <p className="my-4 text-center text-sm leading-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere
      consequat pharetra.
    </p>
    <h4 className="font-semibold">Jhon Doe</h4>
    <span className="text-red-500 font-light mt-1">Cliente</span>
  </div>
);

export default TestimonialCard;
