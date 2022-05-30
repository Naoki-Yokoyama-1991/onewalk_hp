import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Contact: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  console.log(query);
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 6000);
  }, [query]);
  return (
    <>
      <Head>
        <title>送信完了</title>
      </Head>
      <main className='mx-auto h-screen max-w-1080 py-48 sm:px-6'>
        <div className='grid h-full place-items-center  border-red text-center'>
          <div className=' border-y-1 border-red p-14 sm:p-8'>
            <h4 className='text-3xl text-red sm:text-xl'>
              お問い合せ頂き誠にありがとうございます。
              <span className='mt-8 block text-xl font-normal leading-9 text-BaseColor sm:mt-4 sm:text-base'>
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
