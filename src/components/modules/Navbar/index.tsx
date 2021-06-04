import React from 'react';

import Logo from '@components/elements/Logo';

const Navbar: React.FC = () => (
  <header className="w-full h-20 flex flex-row items-center justify-between px-5 md:px-11 lg:px-11 ">
    <Logo />
    <p>nav</p>
  </header>
);

export default Navbar;
