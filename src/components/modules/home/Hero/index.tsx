import React from 'react';
import Image from 'next/image';

import carHero from '@assets/images/porche.png';
import { PrimaryButton, OutlinedButton } from '@components/elements/buttons';

const Hero: React.FC = () => (
  <section
    id="hero-section"
    className="w-full max-w-6xl flex flex-col md:flex-row justify-between px-5 mt-5 sm:mt-12 lg:mt-16 items-center pt-12"
  >
    <div className="flex flex-col max-w-xl mb-16 md:mb-0">
      <div className="flex flex-row items-center gap-2">
        <div className="w-16 h-0.5 bg-red-500" />
        <h6 className="text-sm text-red-500 font-medium">Bem-vindo!</h6>
      </div>

      <h1 className="my-8 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
        Encontre o carro ideal pra você
      </h1>

      <p className="max-w-xl md:max-w-md lg:max-w-lg text-gray-800 text-center md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra
        lectus auctor orci scelerisque commodo. Aliquam erat volutpat.
        Suspendisse suscipit blandit tristique. In elit turpis.
      </p>

      <div className="flex gap-4 mt-11 flex-row justify-center md:justify-start">
        <PrimaryButton>Alugar agora</PrimaryButton>
        <OutlinedButton>Ver carros</OutlinedButton>
      </div>
    </div>

    <Image src={carHero} width={510} height={270} quality={100} />
  </section>
);

export default Hero;
