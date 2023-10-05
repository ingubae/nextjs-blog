import { PostsService } from "./posts.service";
import { Posts } from "./posts.model";
import { CreatePostDto } from "./dto/create-posts.dto";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAllPosts(): Posts[];
    getPostsById(id: string): Posts;
    createPost(createPostDto: CreatePostDto): Posts;
}
