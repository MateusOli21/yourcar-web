import React from 'react';
import { IoLocationOutline, IoCarOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';

import { StepsToRentCard } from '@components/elements/cards';
import {
  SectionMainTitle,
  SectionSubTitle,
} from '@components/elements/customs';

const HowItWorks: React.FC = () => (
  <section
    id="how-it-works-section"
    className="w-full max-w-6xl flex flex-col items-center justify-center px-5 mt-16 sm:py-9 md:mt-11 md:pb-10 "
  >
    <SectionSubTitle>Como funciona</SectionSubTitle>
    <SectionMainTitle>Nossos passos para alugar um carro</SectionMainTitle>

    <div className=" flex flex-col gap-4 mt-9 mb-6 md:gap-8 md:flex-row">
      <StepsToRentCard
        title="Escolha o local"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus velit, maximus eget"
        Icon={IoLocationOutline}
      />
      <StepsToRentCard
        title="Escolha a data"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus velit, maximus eget"
        Icon={AiOutlineCalendar}
      />
      <StepsToRentCard
        title="Alugue o carro"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus velit, maximus eget"
        Icon={IoCarOutline}
      />
    </div>
  </section>
);

export default HowItWorks;
