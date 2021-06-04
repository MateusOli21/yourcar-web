import React from 'react';
import Head from 'next/head';

import BaseLayout from '@components/layout/BaseLayout';
import Hero from '@components/modules/Hero';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <BaseLayout>
      <div className="flex flex-col items-center">
        <Hero />
      </div>
    </BaseLayout>
  </>
);

export default Home;
