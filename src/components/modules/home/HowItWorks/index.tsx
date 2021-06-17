import React from 'react';
import { IoLocationOutline, IoCarOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';

import { StepsToRentCard } from '@components/elements/cards';
import {
  SectionMainTitle,
  SectionSubTitle,
} from '@components/elements/customs';

const HowItWorks: React.FC = () => (
  <section className="w-full max-w-6xl flex flex-col items-center justify-center sm:py-9 md:py-14 px-5">
    <SectionSubTitle>Como funciona</SectionSubTitle>
    <SectionMainTitle>Nossos passos para alugar um carro</SectionMainTitle>

    <div className="mt-11 mb-6 flex flex-col gap-4 md:gap-8 md:flex-row">
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
