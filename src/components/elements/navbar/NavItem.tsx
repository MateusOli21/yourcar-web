import React from 'react';

const NavItem: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  children,
  ...rest
}) => (
  <li
    className="text-sm hover:text-red-500 transition duration-300 cursor-pointer"
    {...rest}
  >
    {children}
  </li>
);

export default NavItem;
