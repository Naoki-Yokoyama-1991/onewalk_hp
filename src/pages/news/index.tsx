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
      className='group grid grid-cols-1 items-center border-b border-gray-100 py-10 pr-7 hover:cursor-pointer  sm:py-8 sm:pr-0 sm:first:pt-12 sm:last:mb-20'
    >
      <Link href={`/news/${post.slug}`}>
        <a>
          <div className='flex items-center sm:block '>
            <span className='block  w-24 rounded-xl text-sm text-neutral-400 sm:bg-gray_pale sm:py-2 sm:px-1.5 sm:text-center sm:text-xs sm:font-bold sm:text-BaseColor'>
              {post.date}
            </span>
            <p className='ml-12 sm:ml-0 sm:mt-4'>
              <span className='block text-sm text-red'>{post.tags}</span>
              <span className='mt-2 block text-lg font-bold leading-8'>{post.title}</span>
            </p>
          </div>
        </a>
      </Link>
      <span className='relative col-end-4 block  h-3 w-3 rotate-45  rounded-sm border-t-3  border-r-3  border-solid   border-red   opacity-0  group-hover:animate-ArrowRight sm:hidden'></span>
    </li>
  ));

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <main className='mx-auto  max-w-1080 py-48  sm:w-full  sm:px-6  sm:py-0 sm:pt-28'>
        <span className='mb-6 block text-lg font-semibold text-red sm:mb-2 sm:text-base sm:font-medium '>
          NEWS
        </span>
        <h3 className='mb-10 text-4xl font-semibold sm:mb-0 sm:text-2xl sm:leading-snug'>
          お知らせ/プレスリリース
        </h3>
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
