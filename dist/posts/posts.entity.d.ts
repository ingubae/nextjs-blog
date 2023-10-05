import { BaseEntity } from "typeorm";
export declare class Posts extends BaseEntity {
    id: number;
    title: string;
    description: string;
    views: number;
    isPublished: boolean;
}
