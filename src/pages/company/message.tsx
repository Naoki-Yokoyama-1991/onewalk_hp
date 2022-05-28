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
        <title>Philosophy</title>
      </Head>
      <main className='mx-auto  max-w-1080 py-60'>
        <div className='mb-10'>
          <h3 className='ml-1 text-xl font-medium text-red'>代表メッセージ</h3>
          <h1 className='text-left text-Third font-black leading-tight '>TOP MESSAGE</h1>
        </div>
        <div className='mt-28 w-full '>
          <Image
            src={MessageTop.src}
            alt={MessageTop.alt}
            priority={true}
            className='w-full rounded-tl-200'
            objectFit='cover'
          />
        </div>
        <section className='mx-auto w-full pt-32 '>
          <div className='mx-auto w-CompanyText '>
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
