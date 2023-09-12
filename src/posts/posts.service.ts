import { Injectable } from "@nestjs/common";
import { Posts, PostsStaus } from "./posts.model";
import { CreatePostDto } from "./dto/create-posts.dto";

@Injectable()
export class PostsService {
    private ids = 1;
    private posts: Posts[] = [
        {
            id: this.ids++,
            date: "2023-09-10",
            title: "Hello",
            desc: "Hello World",
            status: PostsStaus.PUBLIC,
        },
        {
            id: this.ids++,
            date: "2023-09-11",
            title: "Ingu",
            desc: "Devleper",
            status: PostsStaus.PRIVATE,
        },
    ];

    getAllPosts(): Posts[] {
        return this.posts;
    }

    getPostsById(id: string): Posts {
        const idNum = parseInt(id);
        const post = this.posts.find((post) => post.id === idNum);

        return post;
    }

    createPost(createPostDto: CreatePostDto): Posts {
        const { title, desc } = createPostDto;

        const post: Posts = {
            id: this.ids++,
            date: "",
            title,
            desc,
            status: PostsStaus.PUBLIC,
        };

        this.posts.push(post);
        return post;
    }
}
