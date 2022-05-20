import type { NextPage } from 'next';
import Head from 'next/head';
import Contents from '../../components/inc/Content';
import Top from '../../components/inc/Top';
import View from '../../data/Images';
import Date from '../../data/data.json';
import { subRoutes } from '../../data/topRoutes';

const Company: NextPage = () => {
  return (
    <>
      <Head>
        <title>Company</title>
      </Head>
      <main className='mx-auto max-w-1080'>
        <Top data={subRoutes} />
        <Contents data={Date.data.company} sub={subRoutes} view={View.CompanyTop} />
      </main>
    </>
  );
};
export default Company;
