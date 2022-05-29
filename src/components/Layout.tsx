import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Hamburger from './libs/Hamburger';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title> Home</title>
      </Head>
      <Hamburger />
      <Header />
      <div className='sm:w-full '>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
