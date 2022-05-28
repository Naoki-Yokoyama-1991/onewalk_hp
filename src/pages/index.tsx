import type { NextPage, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getAllPosts } from './api/news';
import Careers from '../components/home/Contact';
import News from '../components/home/News';
import Service from '../components/home/Service';
import Top from '../components/home/Top';
import Vision from '../components/home/Vision';
import Who from '../components/home/Who';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ allPosts }) => {
  //news
  const items = allPosts.map((post) => (
    <div
      key={post.slug}
      className='group grid grid-cols-1 items-center border-b border-gray-100 py-10 pr-7 hover:cursor-pointer'
    >
      <Link href={`/news/${post.slug}`}>
        <a href={post.slug}>
          <p className=''>
            <span className='mb-5 flex items-center '>
              <span className='block w-24 rounded-xl bg-gray_pale py-2 px-1.5 text-center text-xs font-bold'>
                {post.date}
              </span>
              <span className='ml-4  text-sm text-red'>{post.tags}</span>
            </span>

            <span className='text-lg font-bold leading-8'>{post.title}</span>
          </p>
        </a>
      </Link>
      <span className='relative col-end-4 block  h-3 w-3 rotate-45  rounded-sm border-t-3  border-r-3  border-solid   border-red   opacity-0  group-hover:animate-ArrowRight'></span>
    </div>
  ));

  return (
    <>
      <Top />
      <main className='mx-auto max-w-1080'>
        <Who />
        <Vision />
        <Service />
        <News data={items} />
        <Careers />
      </main>
    </>
  );
};
export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'image', 'tags']);
  //resolve
  return {
    props: { allPosts },
  };
};
