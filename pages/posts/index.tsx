import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/uttls.module.css';
import { getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';
import { PostData } from '../_app';

export default function Posts(props: { allPostsData: PostData[] }) {
    const { allPostsData } = props;

    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>This is Post list</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <Link href="posts/first-post">our Next.js tutorial</Link>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Post</h2>
          <ul className={utilStyles.list}>
            { allPostsData.map( ({ id, title, date }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              )) 
            }
          </ul>
        </section>
      </Layout>
    );
}

// Static Generation
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: PostData[] = getSortedPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}


// // Server-side Rendering
// export async function getServerSideProps(context) {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     }
//   }
// }
