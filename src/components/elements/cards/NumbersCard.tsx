import React from 'react';
import { IconType } from 'react-icons/lib';

interface IComponentProps {
  number: number;
  description: string;
  Icon?: IconType;
}

const NumbersCard: React.FC<IComponentProps> = ({
  number,
  description,
  Icon,
}) => (
  <div className="flex flex-col items-center py-6 px-11 bg-gray-50 shadow-lg">
    <Icon size={44} className="text-red-500" />
    <h5 className="font-bold text-2xl mt-4 mb-1">{number}+</h5>
    <p>{description}</p>
  </div>
);

export default NumbersCard;
