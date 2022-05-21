import type { NextPage } from 'next';
import Careers from '../components/home/Contact';
import News from '../components/home/News';
import Service from '../components/home/Service';
import Tab from '../components/home/Tab';
import Top from '../components/home/Top';
import Vision from '../components/home/Vision';
import Who from '../components/home/Who';

const Home: NextPage = () => {
  return (
    <>
      <Top />
      <main className='mx-auto max-w-1080'>
        <Who />
        <Vision />
        <Service />
        <News />
        <Careers />
      </main>
    </>
  );
};
export default Home;
