import React from 'react';
import { IoLocationOutline, IoCarOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';

import { StepsToRentCard } from '@components/elements/cards';

const HowItWorks: React.FC = () => (
  <section className="w-full max-w-6xl flex flex-col items-center justify-center sm:py-9 md:py-14 px-5">
    <h6 className="text-red-500 font-semibold">Como funciona</h6>
    <h1 className="mt-6 text-4xl font-bold text-center md:text-left">
      Nossos passos para alugar um carro
    </h1>

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
