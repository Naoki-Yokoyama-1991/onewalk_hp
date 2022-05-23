import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef } from 'react';
import Detail from '../../components/company/Outline';
import useOffsetTop from '../../components/libs/useScroll';
import { OutlineTop } from '../../data/Images';
import Date from '../../data/data.json';

const Outline: NextPage = () => {
  const iconRef = useRef(null);
  const backGray = useOffsetTop(iconRef, 'animate-imageTopGray origin-top-right', 400);
  const lead = Date.data.company.outline;
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <main className='py-60  mx-auto max-w-1080'>
        <div className='mb-10'>
          <h3 className='ml-1 text-xl font-medium text-red'>会社情報</h3>
          <h1 className='text-Third font-black leading-tight text-left '>OUTLINE</h1>
        </div>
        <section className='mx-auto w-full bg-white rounded-96'>
          <div className='relative mx-auto w-CompanyText '>
            <Detail data={lead} />
          </div>
          <div className='mt-32 w-full'>
            <Image
              src={OutlineTop.src}
              alt={OutlineTop.alt}
              priority={true}
              className='w-full rounded-tl-200'
              objectFit='cover'
            />
          </div>
        </section>
        <div
          ref={iconRef}
          className={`absolute top-72 right-0 -z-20 w-96 h-830 bg-skin rounded-tl-96  opacity-0 ${backGray.scrollStyle}`}
        ></div>
      </main>
    </>
  );
};
export default Outline;
