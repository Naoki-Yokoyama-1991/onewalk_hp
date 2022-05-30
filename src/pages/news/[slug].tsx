import { NextPage, InferGetStaticPropsType } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../../components/libs/ButtonLeft';
import markdownToHtml from '../api/markdownToHtml';
import { getAllPosts, getPostBySlug } from '../api/news';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'date', 'image', 'tags', 'content']);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>news article</title>
      </Head>
      <main className='mx-auto max-w-1080 py-60  sm:w-full  sm:px-6  sm:py-0 sm:pt-28'>
        <article className='mx-auto w-CompanyText sm:w-full'>
          <span className='mb-6 flex items-center sm:mb-4'>
            <span className='text-sm  text-neutral-400'>{post.date}</span>
            <span className='ml-4 text-sm text-red '>{post.tags}</span>
          </span>
          <h1 className='text-3xl font-bold sm:text-xl '>{post.title}</h1>
          <div className='border-gray_pal mt-20 border-t-1  border-solid py-20 sm:mt-14 sm:mb-12 sm:border-none sm:py-0'>
            <div className='relative  h-visionImage   sm:h-48 '>
              <Image
                src={`/${post.image}`}
                layout='fill'
                objectFit='cover'
                priority={true}
                className='sm:rounded-20'
              />
            </div>
          </div>

          <div
            className='prose mb-20 max-w-none sm:mb-12'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Button href={'/news'} text={'news一覧へ戻る'} />
        </article>
      </main>
    </>
  );
};

export default Post;
