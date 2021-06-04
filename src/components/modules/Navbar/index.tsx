import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import Logo from '@components/elements/Logo';
import { NavItems, NavItem } from '@components/elements/navbar';

const Navbar: React.FC = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const menusOptions = ['Home', 'Sobre nós', 'Serviços', 'Contato'];

  const handleToggleMobileMenu = () => setToggleMobileMenu(!toggleMobileMenu);

  return (
    <header className="w-full h-20 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-row items-center justify-between px-5 md:px-11 lg:px-11">
        <Logo />

        <nav
          className={`h-full z-10 absolute top-20 right-0 px-10 py-5 bg-gray-100 ${
            !toggleMobileMenu && 'opacity-0'
          } sm:static sm:opacity-100 sm:bg-transparent sm:px-0`}
        >
          <NavItems>
            {menusOptions.map((item, index) => (
              <NavItem key={index}>{item}</NavItem>
            ))}
          </NavItems>
        </nav>

        <div className="block sm:hidden">
          {toggleMobileMenu ? (
            <MdClose size={20} onClick={handleToggleMobileMenu} />
          ) : (
            <GiHamburgerMenu size={20} onClick={handleToggleMobileMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
