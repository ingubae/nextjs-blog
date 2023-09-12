import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 500 })
    title: string;

    @Column("text")
    description: string;

    @Column("int")
    views: number;

    @Column()
    isPublished: boolean;
}
