import * as fs from 'fs';
import * as path from 'path';
import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Detail from '../../components/company/Message';
import { MessageTop } from '../../data/Images';

type Message = {
  title: string;
  text: string;
  position?: string;
  name?: string;
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Message: NextPage<Props> = ({ messages }: Props) => {
  return (
    <>
      <Head>
        <title>Message</title>
      </Head>
      <main className='mx-auto max-w-1080 py-60  sm:w-full  sm:px-6  sm:py-0 sm:pt-28 sm:pb-6'>
        <div className='mb-10 sm:mb-0'>
          <h3 className='ml-1 text-xl font-medium text-red sm:ml-0 sm:mb-2 sm:text-base'>
            代表メッセージ
          </h3>
          <h1 className='text-left text-Third font-black leading-tight sm:inline-block  sm:text-4xl'>
            TOP MESSAGE
          </h1>
        </div>
        <div className='relative mt-28 h-serviceImage sm:mt-12 sm:h-52 sm:w-full'>
          <Image
            src={MessageTop.src}
            alt={MessageTop.alt}
            priority={true}
            className='w-full rounded-tl-200 sm:rounded-20'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <section className='mx-auto  w-full pt-32  sm:pt-10'>
          <div className='mx-auto w-CompanyText sm:w-full'>
            <Detail data={messages} />
          </div>
        </section>
      </main>
    </>
  );
};
export default Message;

export const getStaticProps = async () => {
  // JSON ファイルを読み込む
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'company', 'message.json');
  const jsonText = fs.readFileSync(jsonPath, 'utf-8');
  const messages = JSON.parse(jsonText) as Message[];

  return {
    props: { messages },
  };
};
