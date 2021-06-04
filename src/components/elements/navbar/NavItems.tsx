import React from 'react';

const NavItems: React.FC = ({ children }) => (
  <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
    {children}
  </ul>
);

export default NavItems;
