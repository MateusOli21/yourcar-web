import React from 'react';

interface IComponentProps {
  altColor?: boolean;
  altTextCenter?: boolean;
}

const SectionMainTitle: React.FC<IComponentProps> = ({
  children,
  altColor,
  altTextCenter,
}) => (
  <h1
    className={`mt-6 text-3xl md:text-4xl font-bold text-center ${
      !altTextCenter && `md:text-left`
    } ${altColor && `text-white`}`}
  >
    {children}
  </h1>
);

export default SectionMainTitle;
