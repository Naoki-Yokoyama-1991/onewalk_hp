import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';
import Detail from '../../components/company/History';
import useOffsetTop from '../../components/libs/useScroll';
import Date from '../../data/data.json';

const History: NextPage = () => {
  const iconRef = useRef(null);
  const backRef = useRef(null);
  const backGray = useOffsetTop(iconRef, 'animate-imageTopGray origin-top-right', 400);
  const backGraydown = useOffsetTop(backRef, 'animate-imageTopGray origin-top-left', 0);
  const lead = Date.data.company.history;
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <main className='mx-auto max-w-1080'>
        <div className='grid grid-rows-sub items-center py-24 h-screen'>
          <div className='mt-28'>
            <h3 className='ml-1 text-xl font-medium text-red'>沿革</h3>
            <h1 className='text-Third font-black leading-tight text-left '>HISTORY</h1>
          </div>
        </div>
        <section className='relative -top-330 pb-16 mx-auto   w-full bg-white rounded-80'>
          <div className='mx-auto w-CompanyText '>
            {lead.map((item, index) => {
              return (
                <div key={index} className='relative  py-10'>
                  <Detail data={item} />
                </div>
              );
            })}
          </div>
        </section>
        <div
          ref={iconRef}
          className={`absolute -bottom-1150 right-0 -z-20 w-95% h-830 bg-skin rounded-l-96 opacity-0 ${backGray.scrollStyle}`}
        ></div>
      </main>
    </>
  );
};
export default History;
