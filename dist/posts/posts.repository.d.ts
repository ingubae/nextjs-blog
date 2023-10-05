import { DataSource } from "typeorm";
import { Posts } from "./posts.entity";
export declare const postsRepository: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Posts>;
    inject: string[];
}[];
