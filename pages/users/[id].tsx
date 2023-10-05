import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
// import Date from "../../components/date";
import utilStyles from '../../styles/uttls.module.css';
import { UserData, UserIds } from '../_app';
import { getUserData, getUsersIds } from "../../lib/users";

type Props = {
    userData: UserData
}

export default function User(props: Props) {
    const router = useRouter();

    // 만약 페이지가 아직 생성되지 않았다면 getStaticProps()가 실행되는 동안
	// isFallback을 통해 조건을 분기하여 fallback(대체) 페이지를 보여줄 수 있다.
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const { userData } = props;
    return (
        <Layout>
            <Head>
                <title>{userData.name}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{userData.name}</h1>
                <div className={utilStyles.headingMd}>
                    ID: {userData.id}
                </div>
                <div className={utilStyles.headingMd}>
                    Name: {userData.name}
                </div>
                <div className={utilStyles.lightText}>
                    Email: {userData.email}
                </div>
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: UserIds[] = await getUsersIds();
    
    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { params } = ctx;
    const userData: UserData = await getUserData(params?.id as string);

    return {
        props: {
            userData: userData,
        },
        revalidate: 1,
    };
}