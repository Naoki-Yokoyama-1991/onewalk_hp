import type { NextPage } from 'next';
import Head from 'next/head';
import Form from '../../components/contact/Form';
import Explain from '../../components/contact/Explain';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className='mx-auto max-w-1080 py-48 sm:w-full  sm:px-6  sm:py-0 sm:pt-28 sm:pb-6'>
        <div className='grid grid-cols-Form gap-x-32 sm:block'>
          <Explain />
          <Form />
        </div>
      </main>
    </>
  );
};
export default Contact;
