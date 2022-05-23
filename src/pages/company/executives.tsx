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
      <main className='py-60  mx-auto max-w-1080'>
        <div className='mb-10'>
          <h3 className='ml-1 text-xl font-medium text-red'>役員紹介</h3>
          <h1 className='text-Third font-black leading-tight text-left '>EXECUTIVES</h1>
        </div>
        <section className='pt-24 mx-auto w-full '>
          <div className='flex items-center'>
            <span className='inline-block mr-4 w-3 h-3 bg-red rounded-full'></span>
            <p className='text-lg font-medium'>Board of Directors</p>
          </div>
          <div className='grid grid-cols-3 gap-4 w-exe'>
            <Detail />
          </div>
        </section>
      </main>
    </>
  );
};
export default Executives;
