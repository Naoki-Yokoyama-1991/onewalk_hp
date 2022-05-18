import type { NextPage } from 'next';
import Head from 'next/head';
import Lead from '../../components/company/Lead';
import Top from '../../components/company/Top';

const Company: NextPage = () => {
  return (
    <>
      <Head>
        <title>Company</title>
      </Head>
      <main className='mx-auto max-w-1080'>
        <Top />
        <Lead />
      </main>
    </>
  );
};
export default Company;
