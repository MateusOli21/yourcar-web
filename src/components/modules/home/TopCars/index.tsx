import React from 'react';

import { ICar } from '@shared/interfaces/car';
import { CarCard } from '@components/elements/cards';
import {
  SectionMainTitle,
  SectionSubTitle,
} from '@components/elements/customs';

interface IComponentProps {
  cars?: ICar[];
}

const TopCars: React.FC<IComponentProps> = ({ cars }) => (
  <section
    id="top-cars-section"
    className="flex flex-col items-center my-16 lg:my-14"
  >
    <SectionSubTitle>Top Carros</SectionSubTitle>
    <SectionMainTitle>Explore nossos melhores carros</SectionMainTitle>

    <div className="mt-9 flex justify-center flex-wrap gap-6">
      {cars?.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  </section>
);

export default TopCars;
