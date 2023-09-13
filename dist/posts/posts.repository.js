"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = void 0;
const posts_entity_1 = require("./posts.entity");
exports.postsRepository = [
    {
        provide: "POSTS_REPOSITORY",
        useFactory: (dataSource) => dataSource.getRepository(posts_entity_1.Posts),
        inject: ["DATA_SOURCE"],
    },
];
//# sourceMappingURL=posts.repository.js.map