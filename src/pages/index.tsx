import React from 'react';
import Head from 'next/head';

import BaseLayout from '@components/layout/BaseLayout';
import { Newsletter } from '@components/modules';
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
      <div className="flex flex-col items-center">
        <Hero />
        <ScheduleTestDrive />
        <HowItWorks />
        <AboutUs />
        <OurNumbers />
        <Testimonials />
        <Newsletter />
      </div>
    </BaseLayout>
  </>
);

export default Home;
