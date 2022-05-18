import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Hamburger from './home/libs/Hamburger';

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
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
