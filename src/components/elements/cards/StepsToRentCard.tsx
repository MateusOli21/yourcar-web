import React from 'react';
import { IconType } from 'react-icons/lib';

interface IComponentProps {
  title: string;
  description: string;
  Icon: IconType;
}

const StepsToRentCard: React.FC<IComponentProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className="flex flex-col items-center py-6 w-full max-w-xs">
    <div className="p-8 bg-red-500 rounded shadow-lg">
      <Icon size={36} className="text-white" />
    </div>
    <h6 className="mt-8 mb-4 font-semibold text-xl">{title}</h6>
    <p className="text-center text-gray-700">{description}</p>
  </div>
);

export default StepsToRentCard;
