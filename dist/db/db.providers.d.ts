import { DataSource } from "typeorm";
export declare const dbProviders: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
