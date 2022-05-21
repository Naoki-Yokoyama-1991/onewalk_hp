import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Detail from '../../components/company/Outline';

import { OutlineTop } from '../../data/Images';
import Date from '../../data/data.json';

const Outline: NextPage = () => {
  const lead = Date.data.company.outline;
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <main className='mx-auto max-w-1080'>
        <div className='grid grid-rows-sub items-center py-24 h-screen '>
          <div className='mt-28'>
            <h3 className='ml-1 text-xl font-medium text-red'>会社情報</h3>
            <h1 className='text-Third font-black leading-tight text-left '>OUTLINE</h1>
          </div>
          <div className='absolute right-0 -bottom-outline  -z-20  mb-8 w-10/12 '>
            <Image
              src={OutlineTop.src}
              alt={OutlineTop.alt}
              priority={true}
              className='w-full rounded-tl-180'
              objectFit='cover'
            />
          </div>
        </div>
        <section className='py-32 mx-auto mt-72 mb-24 w-full bg-white rounded-tr-80'>
          <div className='relative mx-auto w-CompanyText '>
            <Detail data={lead} />
          </div>
        </section>
      </main>
    </>
  );
};
export default Outline;
