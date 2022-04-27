import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title> Home</title>
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
};
export default Layout;
