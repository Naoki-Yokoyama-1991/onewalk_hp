import Head from 'next/head';
import type { NextPage, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../api/news';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const News: NextPage<Props> = ({ allPosts }) => {
  //news
  const items = allPosts.map((post) => (
    <li
      key={post.slug}
      className='group grid grid-cols-1 items-center border-b border-gray-100 py-10 pr-7 hover:cursor-pointer'
    >
      <Link href={`/news/${post.slug}`}>
        <a>
          <div className='flex items-center '>
            <span className='block text-sm  text-neutral-400'>{post.date}</span>
            <p className='ml-12'>
              <span className='block text-sm text-red'>{post.tags}</span>
              <span className='mt-2 block text-lg font-bold leading-8'>{post.title}</span>
            </p>
          </div>
        </a>
      </Link>
      <span className='relative col-end-4 block  h-3 w-3 rotate-45  rounded-sm border-t-3  border-r-3  border-solid   border-red   opacity-0  group-hover:animate-ArrowRight'></span>
    </li>
  ));

  return (
    <>
      <Head>
        <title>Company</title>
      </Head>
      <main className='mx-auto  max-w-1080 py-48'>
        <span className='mb-8 block font-semibold text-red'>NEWS</span>
        <h3 className='mb-10 text-4xl font-semibold'>お知らせ / プレスリリース</h3>
        <ul className=''>{items}</ul>
      </main>
    </>
  );
};
export default News;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);
  //resolve
  return {
    props: { allPosts },
  };
};
