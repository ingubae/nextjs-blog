import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/uttls.module.css';
import { GetStaticProps } from 'next';
import { UserData } from './_app';
import { getUsersData } from '../lib/users';



export default function Home(props: { allUsersData: UserData[] }) {
    const { allUsersData } = props;

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
            <li className={utilStyles.listItem} >
              <Link href={`/users`}>User list</Link>
            </li>
            <li className={utilStyles.listItem} >
              <Link href={`/posts`}>Post list</Link>
            </li>
            {/* { allUsersData.map( ({ id, name, email }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/users/${id}`}>{name}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    {email} 
                  </small>
                </li>
              )) 
            } */}
          </ul>
        </section>
      </Layout>
    );
}

// Static Generation
export const getStaticProps: GetStaticProps = async () => {
  const allUsersData: UserData[] = await getUsersData();

  return {
    props: {
        allUsersData,
    }
  }
}