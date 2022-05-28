import * as fs from 'fs';
import * as path from 'path';
import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef } from 'react';
import Detail from '../../components/company/Outline';
import useOffsetTop from '../../components/libs/useScroll';
import { OutlineTop } from '../../data/Images';

type Outline = {
  title: string;
  detail: [
    {
      lead: string;
      text: string;
    },
  ];
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Outline: NextPage<Props> = ({ outlines }: Props) => {
  const iconRef = useRef(null);
  const backGray = useOffsetTop(iconRef, 'animate-imageTopGray origin-top-right', 400);
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <main className='mx-auto  max-w-1080 py-60'>
        <div className='mb-10'>
          <h3 className='ml-1 text-xl font-medium text-red'>会社情報</h3>
          <h1 className='text-left text-Third font-black leading-tight '>OUTLINE</h1>
        </div>
        <section className='mx-auto w-full rounded-96 bg-white'>
          <div className='relative mx-auto w-CompanyText '>
            <Detail data={outlines} />
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
          className={`absolute top-72 right-0 -z-20 h-830 w-96 rounded-tl-96 bg-skin  opacity-0 ${backGray.scrollStyle}`}
        ></div>
      </main>
    </>
  );
};
export default Outline;

export const getStaticProps = async () => {
  // JSON ファイルを読み込む
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'company', 'outline.json');
  const jsonText = fs.readFileSync(jsonPath, 'utf-8');
  const outlines = JSON.parse(jsonText) as Outline[];

  return {
    props: { outlines },
  };
};
