import React from 'react';
import Head from 'next/head';

import BaseLayout from '@components/layout/BaseLayout';
import { Hero, ScheduleTestDrive } from '@components/modules/home';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <BaseLayout>
      <div className="flex flex-col items-center px-5">
        <Hero />
        <ScheduleTestDrive />
      </div>
    </BaseLayout>
  </>
);

export default Home;
