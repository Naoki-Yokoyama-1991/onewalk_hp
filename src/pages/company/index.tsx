import * as fs from 'fs';
import * as path from 'path';
import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Contents from '../../components/inc/Content';
import Top from '../../components/inc/Top';
import View from '../../data/Images';
import { subRoutes } from '../../data/topRoutes';

type Top = {
  title: string;
  text: string;
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Company: NextPage<Props> = ({ tops }: Props) => {
  return (
    <>
      <Head>
        <title>Company</title>
      </Head>
      <main className='mx-auto max-w-1080 py-60 px-8  sm:w-full  sm:px-6  sm:py-0 sm:pt-28 sm:pb-6'>
        <Top data={subRoutes} />
        <Contents data={tops} sub={subRoutes} view={View.CompanyTop} />
      </main>
    </>
  );
};
export default Company;

export const getStaticProps = async () => {
  // JSON ファイルを読み込む
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'company', 'top.json');
  const jsonText = fs.readFileSync(jsonPath, 'utf-8');
  const tops = JSON.parse(jsonText) as Top;

  return {
    props: { tops },
  };
};
