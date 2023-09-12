import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { postsRepository } from "./posts.repository";
import { DbModule } from "src/db/db.module";

@Module({
    imports: [DbModule],
    controllers: [PostsController],
    providers: [...postsRepository, PostsService],
})
export class PostsModule {}
