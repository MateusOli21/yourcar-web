import React from 'react';
import { PrimaryButton } from '../buttons';

const NewsletterInput: React.FC = () => (
  <div className="mt-9 p-4 bg-white rounded">
    <input
      placeholder="Seu melhor e-mail"
      className="py-2 px-2 mr-1 focus:outline-none"
    />
    <PrimaryButton>Assinar</PrimaryButton>
  </div>
);

export default NewsletterInput;
