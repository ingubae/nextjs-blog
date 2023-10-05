"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const posts_model_1 = require("./posts.model");
let PostsService = class PostsService {
    constructor() {
        this.ids = 1;
        this.posts = [
            {
                id: this.ids++,
                date: "2023-09-10",
                title: "Hello",
                desc: "Hello World",
                status: posts_model_1.PostsStaus.PUBLIC,
            },
            {
                id: this.ids++,
                date: "2023-09-11",
                title: "Ingu",
                desc: "Devleper",
                status: posts_model_1.PostsStaus.PRIVATE,
            },
        ];
    }
    getAllPosts() {
        return this.posts;
    }
    getPostsById(id) {
        const idNum = parseInt(id);
        const post = this.posts.find((post) => post.id === idNum);
        return post;
    }
    createPost(createPostDto) {
        const { title, desc } = createPostDto;
        const post = {
            id: this.ids++,
            date: "",
            title,
            desc,
            status: posts_model_1.PostsStaus.PUBLIC,
        };
        this.posts.push(post);
        return post;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
//# sourceMappingURL=posts.service.js.map