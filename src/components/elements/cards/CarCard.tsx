import React from 'react';
import { BsGear } from 'react-icons/bs';
import { BiGasPump } from 'react-icons/bi';
import { IoSpeedometerOutline } from 'react-icons/io5';

import { ICar } from '@shared/interfaces/car';
import { PrimaryButton } from '../buttons';

interface IComponentProps {
  car: ICar;
}

const CarCard: React.FC<IComponentProps> = ({ car }) => (
  <div className="w-full max-w-xs flex flex-col p-6 shadow-md bg-gray-50">
    <img src={car.thumbnailUrl} alt={car.name} className="w-full" />

    <h4 className="font-bold text-lg mt-6 mb-4">{car.name}</h4>

    <div className="flex flex-wrap gap-4">
      <p className="text-red-500 text-sm">
        <strong>R${car.dailyPrice}</strong>/diário
      </p>
      <p className="text-sm">
        <strong>R${car.monthlyPrice}</strong>/mensal
      </p>
    </div>

    <div className="flex flex-wrap justify-between mt-5 mb-8 pt-3 border-t-2">
      <div className="flex items-center gap-2">
        <IoSpeedometerOutline size={16} />
        <span className="text-sm font-light">{car.mileage}</span>
      </div>
      <div className="flex items-center gap-2">
        <BsGear size={16} />
        <span className="text-sm font-light">{car.gearType}</span>
      </div>
      <div className="flex items-center gap-2">
        <BiGasPump size={18} />
        <span className="text-sm font-light">
          {car.gas === 'petrol' ? 'gasolina' : car.gas}
        </span>
      </div>
    </div>

    <PrimaryButton>Alugar agora</PrimaryButton>
  </div>
);

export default CarCard;
