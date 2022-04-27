import type { NextPage } from 'next';
import Who from '../components/home/Who';
import Top from '../components/home/top/Top';

const Home: NextPage = () => {
  return (
    <>
      <Top />
      <main className='mx-auto max-w-1080'>
        <Who />
      </main>
    </>
  );
};
export default Home;
