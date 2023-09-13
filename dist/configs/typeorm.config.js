"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const users_entity_1 = require("../users/entities/users.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5436,
    username: 'postgres',
    password: '1234',
    database: 'postsdb',
    entities: [__dirname + '/../**/*.entity.{js,ts}', users_entity_1.User],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map