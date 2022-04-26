import Head from 'next/head';
import { ReactNode, FC } from 'react';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

const Layout: FC = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title> Home</title>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
