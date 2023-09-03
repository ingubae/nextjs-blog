import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDir);
    const allPostsData = fileNames.map( (fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDir, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        const matterResult = matter(fileContents);  // Use gray-matter to parse the post metadata
    
        return {
            id,
            ...matterResult.data,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if(a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);  // Use gray-matter to parse the post metadata

    const processedContent = await remark().use(html).process(matterResult.content); // Convert md into HTML
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDir);

    return fileNames.map( (fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}
// Returns an array that looks like this:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
