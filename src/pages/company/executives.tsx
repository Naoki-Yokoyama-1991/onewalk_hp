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
      <main className='mx-auto max-w-1080'>
        <div className='grid grid-rows-sub items-center py-24 h-screen'>
          <div className='mt-28'>
            <h3 className='ml-1 text-xl font-medium text-red'>役員紹介</h3>
            <h1 className='text-Third font-black leading-tight text-left '>EXECUTIVES</h1>
          </div>
        </div>
        <section className='relative -top-72 w-exe bg-white rounded-80 '>
          <div className='flex items-center'>
            <span className='inline-block mr-4 w-4 h-4 bg-red rounded-full'></span>
            <p className='text-lg font-medium'>Board of Directors</p>
          </div>
          <div className='grid grid-cols-3 gap-4 mt-14'>
            <Detail />
          </div>
        </section>
      </main>
    </>
  );
};
export default Executives;
