import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/uttls.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export default function Home(
  { allPostsData }:
  {
    allPostsData: {
      id: string
      title: string
      date: string
    }[]
  }
  ) {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi, I'm Ingu. I am a developer</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <Link href="posts/first-post">our Next.js tutorial</Link>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
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
  const allPostsData = getSortedPostsData();
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
