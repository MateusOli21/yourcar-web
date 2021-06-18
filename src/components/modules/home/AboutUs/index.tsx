import React from 'react';

import jeepImage from '@assets/images/jeep.png';
import {
  SectionMainTitle,
  SectionSubTitle,
} from '@components/elements/customs';

const AboutUs: React.FC = () => (
  <div className="w-full bg-gray-100 max-w-6xl flex flex-col lg:flex-row lg:gap-14 items-center justify-center px-5 py-8 lg:pt-12 lg:pb-24">
    <img
      className="w-full max-w-lg md:max-w-xl"
      src={jeepImage}
      alt="jeep car"
    />

    <div className="flex flex-col items-center lg:items-start">
      <SectionSubTitle>Sobre nós</SectionSubTitle>
      <SectionMainTitle>
        Tenha a melhor experiência ao alugar um carro
      </SectionMainTitle>

      <p className="mt-8 text-center md:text-left leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus,
        ipsum eget hendrerit eleifend, purus augue malesuada felis, non
        dignissim enim risus vitae lorem. Sed cursus urna ac risus imperdiet
        vulputate. Pellentesque fermentum mi id euismod molestie. Nam viverra
        vitae lectus sit amet egestas.
      </p>
    </div>
  </div>
);

export default AboutUs;
