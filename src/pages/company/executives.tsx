import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Detail from '../../components/company/Executives';

const Executives: NextPage = () => {
  return (
    <>
      <Head>
        <title>Executives</title>
      </Head>
      <main className='mx-auto  max-w-1080 py-60 sm:w-full sm:px-6 sm:py-0 sm:pt-28 sm:pb-6'>
        <div className='mb-10 sm:mb-0'>
          <h3 className='ml-1 text-xl font-medium text-red  sm:ml-0 sm:mb-2 sm:text-base'>
            役員紹介
          </h3>
          <h1 className='text-left text-Third font-black leading-tight sm:inline-block  sm:text-4xl'>
            EXECUTIVES
          </h1>
        </div>
        <section className='mx-auto w-full pt-24 sm:pt-12'>
          <div className='flex items-center'>
            <span className='mr-4 inline-block h-3 w-3 rounded-full bg-red sm:mr-2 sm:h-2 sm:w-2 '></span>
            <p className='text-lg font-medium sm:text-base'>Board of Directors</p>
          </div>
          <div className='grid w-exe grid-cols-3 gap-4 sm:w-full sm:grid-cols-2 sm:gap-5'>
            <Detail />
          </div>
        </section>
      </main>
    </>
  );
};
export default Executives;
