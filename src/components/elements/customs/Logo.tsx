import React from 'react';

import scrollToSection from '@shared/utils/scrollToSection';

interface IComponentProps {
  sm?: boolean;
  altColor?: boolean;
}

const Logo: React.FC<IComponentProps> = ({ sm, altColor }) => {
  const handleBackHero = () => scrollToSection('#hero-section');

  return (
    <h1
      onClick={handleBackHero}
      onKeyPress={handleBackHero}
      role="button"
      tabIndex={0}
      className={`${altColor ? 'text-white' : 'text-red-600'} font-bold ${
        sm ? 'text-sm' : 'text-xl'
      }`}
    >
      Yourcar.
    </h1>
  );
};

export default Logo;
