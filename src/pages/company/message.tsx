import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Detail from '../../components/company/Message';
import { MessageTop } from '../../data/Images';
import Date from '../../data/data.json';

const Message: NextPage = () => {
  const lead = Date.data.company.message;
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <main className='mx-auto max-w-1080'>
        <div className='grid grid-rows-sub items-center py-24 h-screen '>
          <div className='mt-28'>
            <h3 className='ml-1 text-xl font-medium text-red'>代表メッセージ</h3>
            <h1 className='text-Third font-black leading-tight text-left '>TOP MESSAGE</h1>
          </div>
          <div className='absolute -bottom-32 left-0 -z-20  mb-8 w-11/12 '>
            <Image
              src={MessageTop.src}
              alt={MessageTop.alt}
              priority={true}
              className='w-full rounded-tr-180'
              objectFit='cover'
            />
          </div>
        </div>
        <section className='mx-auto mt-56 mb-72  w-full '>
          <div className='mx-auto w-CompanyText '>
            <Detail data={lead} />
          </div>
        </section>
      </main>
    </>
  );
};
export default Message;
