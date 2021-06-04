import React from 'react';

const NavItem: React.FC = ({ children }) => (
  <li className="text-sm hover:text-red-500 transition duration-300 cursor-pointer">
    {children}
  </li>
);

export default NavItem;
