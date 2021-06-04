import Navbar from '@components/modules/Navbar';
import React from 'react';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default BaseLayout;
