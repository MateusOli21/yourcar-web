import React from 'react';

interface IComponentProps {
  sm?: boolean;
  altColor?: boolean;
}

const Logo: React.FC<IComponentProps> = ({ sm, altColor }) => (
  <h1
    className={`${altColor ? 'text-white' : 'text-red-600'} font-bold ${
      sm ? 'text-sm' : 'text-xl'
    }`}
  >
    Yourcar.
  </h1>
);

export default Logo;
