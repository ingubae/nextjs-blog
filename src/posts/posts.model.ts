export interface Posts {
    id: number;
    date: string;
    title: string;
    desc: string;
    status: PostsStaus;
}

export enum PostsStaus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
}
