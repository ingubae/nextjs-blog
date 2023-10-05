import { Posts } from "./posts.model";
import { CreatePostDto } from "./dto/create-posts.dto";
export declare class PostsService {
    private ids;
    private posts;
    getAllPosts(): Posts[];
    getPostsById(id: string): Posts;
    createPost(createPostDto: CreatePostDto): Posts;
}
