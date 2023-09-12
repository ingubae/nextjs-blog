import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { Posts } from "./posts.model";
import { CreatePostDto } from "./dto/create-posts.dto";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get("/")
    getAllPosts(): Posts[] {
        return this.postsService.getAllPosts();
    }

    @Get("/:id")
    @UsePipes(ParseIntPipe)
    getPostsById(@Param("id") id: string): Posts {
        return this.postsService.getPostsById(id);
    }

    @Post("/")
    @UsePipes(ValidationPipe)
    createPost(@Body() createPostDto: CreatePostDto): Posts {
        return this.postsService.createPost(createPostDto);
    }
}
