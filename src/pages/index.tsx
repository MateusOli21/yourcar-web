import React from 'react';
import Head from 'next/head';

import BaseLayout from '@components/layout/BaseLayout';
import {
  Hero,
  ScheduleTestDrive,
  HowItWorks,
  AboutUs,
  OurNumbers,
  Testimonials,
} from '@components/modules/home';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <BaseLayout>
      <div className="flex flex-col items-center px-5">
        <Hero />
        <ScheduleTestDrive />
        <HowItWorks />
        <AboutUs />
        <OurNumbers />
        <Testimonials />
      </div>
    </BaseLayout>
  </>
);

export default Home;
