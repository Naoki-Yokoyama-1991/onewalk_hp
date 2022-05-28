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
      <main className='mx-auto max-w-1080 py-48'>
        <div className='grid grid-cols-Form gap-x-32'>
          <Explain />
          <Form />
        </div>
      </main>
    </>
  );
};
export default Contact;
