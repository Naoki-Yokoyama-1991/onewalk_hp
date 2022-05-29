import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>送信完了</title>
      </Head>
      <main className='mx-auto h-screen max-w-1080 py-48'>
        <div className='grid h-full place-items-center  border-red text-center'>
          <div className=' border-y-1 border-red p-14'>
            <h4 className='text-3xl text-red'>
              お問い合せ頂き誠にありがとうございます。
              <span className='mt-8 block text-xl font-normal leading-9 text-BaseColor'>
                確認メールを送信いたしました、ご確認お願いします。
              </span>
            </h4>
          </div>
        </div>
      </main>
    </>
  );
};
export default Contact;
