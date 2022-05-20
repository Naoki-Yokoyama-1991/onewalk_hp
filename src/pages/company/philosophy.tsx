import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';
import Detail from '../../components/company/Philosophy';
import useOffsetTop from '../../components/libs/useScroll';
import Date from '../../data/data.json';

const Philosophy: NextPage = () => {
  const iconRef = useRef(null);
  const backRef = useRef(null);
  const backGray = useOffsetTop(iconRef, 'animate-imageTopGray origin-top-right', 400);
  const backGraydown = useOffsetTop(backRef, 'animate-imageTopGray origin-top-left', 0);
  const lead = Date.data.company.philosophy;
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <main className='mx-auto max-w-1080'>
        <div className='grid grid-rows-sub items-center py-24 h-screen'>
          <div className='mt-28'>
            <h3 className='ml-1 text-xl font-medium text-red'>企業理念</h3>
            <h1 className='text-Third font-black leading-tight text-left '>PHILOSOPHY</h1>
          </div>
          <div className='mt-28 w-CompanyText'>
            <h3 className='mb-8 text-3xl font-bold'>{lead.title}</h3>
            <p className='leading-loose'>{lead.text}</p>
          </div>
        </div>
        <section className='mx-auto mb-72 w-full bg-white rounded-80'>
          <div className='mx-auto w-CompanyText '>
            {lead.contents.map((item, index) => {
              return (
                <div key={index} className='py-28 border-b-2 last:border-b-0 border-gray_pale   '>
                  <Detail data={item} />
                </div>
              );
            })}
          </div>
        </section>
        <div
          ref={iconRef}
          className={`absolute top-86% right-0 -z-20 w-60 h-830 bg-skin rounded-l-96 opacity-0 ${backGray.scrollStyle}`}
        ></div>
        <div
          ref={backRef}
          className={`absolute -bottom-300 left-0 -z-10 w-96 h-back bg-gray_pale rounded-r-96 opacity-0 ${backGraydown.scrollStyle}`}
        ></div>
      </main>
    </>
  );
};
export default Philosophy;
