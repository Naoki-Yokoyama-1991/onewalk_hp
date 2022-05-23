import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';
import Detail from '../../components/company/History';
import useOffsetTop from '../../components/libs/useScroll';
import Date from '../../data/data.json';

const History: NextPage = () => {
  const iconRef = useRef(null);
  const backGray = useOffsetTop(iconRef, 'animate-imageTopGray origin-top-right', 400);
  const lead = Date.data.company.history;
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <main className='py-60 mx-auto max-w-1080'>
        <div className='mb-10'>
          <h3 className='ml-1 text-xl font-medium text-red'>沿革</h3>
          <h1 className='text-Third font-black leading-tight text-left '>HISTORY</h1>
        </div>
        <section className='relative  mx-auto w-full bg-white rounded-96'>
          <div className='mx-auto w-CompanyText '>
            {lead.map((item, index) => {
              return (
                <div key={index} className='relative py-10  first:pt-28 last:pb-0'>
                  <Detail data={item} />
                </div>
              );
            })}
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
export default History;
