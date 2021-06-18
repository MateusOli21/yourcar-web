import React from 'react';

import { Navbar, Footer } from '@components/modules';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default BaseLayout;
