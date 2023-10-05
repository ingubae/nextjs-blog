import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from '../../styles/uttls.module.css';
import { GetStaticPaths, GetStaticProps } from "next";
import { PostData, PostIds } from '../_app';

type Props = {
    postData: PostData
}

export default function Post(props: Props) {
    const { postData } = props;
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: PostIds[] = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { params } = ctx;
    const postData: PostData = await getPostData(params?.id as string);

    return {
        props: {
            postData: postData,
        }
    };
}