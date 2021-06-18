import React from 'react';

interface IComponentProps {
  altColor?: boolean;
}

const SectionSubTitle: React.FC<IComponentProps> = ({ children, altColor }) => (
  <h6 className={`font-semibold ${altColor ? `text-white` : `text-red-500`}`}>
    {children}
  </h6>
);

export default SectionSubTitle;
