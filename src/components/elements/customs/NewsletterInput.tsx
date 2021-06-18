import React from 'react';
import { PrimaryButton } from '../buttons';

const NewsletterInput: React.FC = () => (
  <div className="flex flex-col items-center md:flex-row mt-9 p-4 md:bg-white rounded">
    <input
      placeholder="Seu melhor e-mail"
      className=" w-full py-3 px-4 mb-4 rounded md:rounded-none md:mb-0 md:py-2 md:px-2 md:mr-1 focus:outline-none"
    />
    <PrimaryButton>Assinar</PrimaryButton>
  </div>
);

export default NewsletterInput;
