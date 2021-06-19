import React from 'react';

import { TestimonialCard } from '@components/elements/cards';
import {
  SectionMainTitle,
  SectionSubTitle,
} from '@components/elements/customs';

const Testimonials: React.FC = () => (
  <section
    id="testimonials-section"
    className="flex flex-col items-center py-16 px-5"
  >
    <SectionSubTitle>Depoimentos</SectionSubTitle>
    <SectionMainTitle>O que nossos clientes dizem</SectionMainTitle>

    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-11 mt-9 mb-6">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  </section>
);

export default Testimonials;
