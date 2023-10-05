"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbProviders = void 0;
const typeorm_1 = require("typeorm");
exports.dbProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5436,
                username: 'postgres',
                password: '1234',
                database: 'postsdb',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=db.providers.js.map