import {
  NewsletterInput,
  SectionMainTitle,
  SectionSubTitle,
} from '@components/elements/customs';
import React from 'react';

const Newsletter: React.FC = () => (
  <section
    id="newsletter-section"
    className="w-full flex flex-col items-center bg-red-500 py-16 px-5"
  >
    <div className="w-full max-w-xl lg:max-w-3xl flex flex-col items-center">
      <SectionSubTitle altColor>Newsletter</SectionSubTitle>
      <SectionMainTitle altColor altTextCenter>
        Assine nossa newsletter e receba atualizações e ofertas em primeira mão
      </SectionMainTitle>
      <NewsletterInput />
    </div>
  </section>
);

export default Newsletter;
