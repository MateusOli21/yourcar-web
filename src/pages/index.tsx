import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import BaseLayout from '@components/layout/BaseLayout';
import { yourCarApi } from '@services/apis/yourCar';
import { Newsletter } from '@components/modules';
import {
  Hero,
  ScheduleTestDrive,
  HowItWorks,
  AboutUs,
  OurNumbers,
  Testimonials,
  TopCars,
} from '@components/modules/home';

const Home: React.FC = () => {
  const [cars, setCars] = useState([]);

  async function listCars() {
    await yourCarApi
      .getAllCars()
      .then(data => {
        setCars(data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    listCars();
  }, []);

  return (
    <>
      <Head>
        <title>Yourcar | Home</title>
      </Head>
      <BaseLayout>
        <div className="flex flex-col items-center">
          <Hero />
          <ScheduleTestDrive />
          <HowItWorks />
          <AboutUs />
          <OurNumbers />
          <TopCars cars={cars} />
          <Testimonials />
          <Newsletter />
        </div>
      </BaseLayout>
    </>
  );
};

export default Home;
