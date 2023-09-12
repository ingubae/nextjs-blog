import { DataSource } from "typeorm";
import { Posts } from "./posts.entity";

export const postsRepository = [
    {
        provide: "POSTS_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Posts),
        inject: ["DATA_SOURCE"],
    },
];
