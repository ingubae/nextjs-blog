export interface Posts {
    id: number;
    date: string;
    title: string;
    desc: string;
    status: PostsStaus;
}
export declare enum PostsStaus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
