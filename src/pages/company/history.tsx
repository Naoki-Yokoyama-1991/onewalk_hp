import * as fs from 'fs';
import * as path from 'path';
import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';
import Detail from '../../components/company/History';
import useOffsetTop from '../../components/libs/useScroll';

type History = {
  year: string;
  detail: [
    {
      month: string;
      text: string;
    },
  ];
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const History: NextPage<Props> = ({ historys }: Props) => {
  const iconRef = useRef(null);
  const backGray = useOffsetTop(iconRef, 'animate-imageTopGray origin-top-right', 400);
  return (
    <>
      <Head>
        <title>History</title>
      </Head>
      <main className='mx-auto max-w-1080 py-60  px-8  sm:w-full  sm:px-6  sm:py-0 sm:pt-28 sm:pb-6'>
        <div className='mb-10 sm:mb-0'>
          <h3 className='ml-1 text-xl font-medium text-red sm:ml-0 sm:mb-2 sm:text-base'>沿革</h3>
          <h1 className='text-left text-Third font-black leading-tight sm:inline-block  sm:text-4xl'>
            HISTORY
          </h1>
        </div>
        <section className='relative  mx-auto w-full rounded-96 bg-white'>
          <div className='mx-auto w-CompanyText sm:w-full tb:w-full'>
            {historys.map((item, index) => {
              return (
                <div
                  key={index}
                  className='relative py-10  first:pt-28 last:pb-0 sm:py-4 sm:first:pt-12'
                >
                  <Detail data={item} />
                </div>
              );
            })}
          </div>
        </section>
        <div
          ref={iconRef}
          className={`absolute top-72 right-0 -z-20 h-830 w-96 rounded-tl-96 bg-skin  opacity-0 ${backGray.scrollStyle} sm:hidden`}
        ></div>
      </main>
    </>
  );
};
export default History;

export const getStaticProps = async () => {
  // JSON ファイルを読み込む
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'company', 'history.json');
  const jsonText = fs.readFileSync(jsonPath, 'utf-8');
  const historys = JSON.parse(jsonText) as History[];

  return {
    props: { historys },
  };
};
