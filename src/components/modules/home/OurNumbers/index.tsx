import React from 'react';
import { IoMdHappy } from 'react-icons/io';
import { IoCarOutline } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';

import { NumbersCard } from '@components/elements/cards';

const OurNumbers: React.FC = () => {
  const numbersList = [
    {
      number: 4500,
      description: 'Clientes felizes',
      icon: IoMdHappy,
    },
    {
      number: 8000,
      description: 'Carros alugados',
      icon: IoCarOutline,
    },
    {
      number: 9700,
      description: 'Clientes pelo país',
      icon: AiOutlineTeam,
    },
  ];

  return (
    <div className="flex flex-col gap-4 px-5 pt-9 pb-16 md:flex-row md:gap-11 lg:-mt-24">
      {numbersList.map((option, index) => (
        <NumbersCard
          key={index}
          number={option.number}
          description={option.description}
          Icon={option.icon}
        />
      ))}
    </div>
  );
};

export default OurNumbers;
