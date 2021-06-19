import React from 'react';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { BiPhone } from 'react-icons/bi';

import { FooterItemWrapper } from '@components/elements/wrappers';
import { Logo } from '@components/elements/customs';

const Footer: React.FC = () => (
  <div>
    <div className="bg-gray-900 py-20 px-5 md:px-12 lg:px-16 flex flex-col md:flex-row gap-9 lg:gap-11">
      <div className="md:mr-6">
        <Logo altColor />
      </div>
      <FooterItemWrapper
        title="Localização"
        description="Rua Duis tempus orci, 225 - São Paulo, SP"
        Icon={IoLocationOutline}
      />
      <FooterItemWrapper
        title="E-mail"
        description="yourcar@mail.com"
        Icon={IoMailOutline}
      />
      <FooterItemWrapper
        title="Telefone"
        description="(11)99999-9999"
        Icon={BiPhone}
      />
    </div>
    <div className="bg-gray-800 flex flex-row items-center justify-between py-3 px-5 md:px-14 lg:px-16">
      <span className="text-white text-xs">Copyright&#169;2021</span>

      <Logo sm altColor />
    </div>
  </div>
);

export default Footer;
