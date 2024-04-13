import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user.entity";
import { RedisCacheModule } from "src/redis-cache/redis-cache.module";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [
        RedisCacheModule,
        MongooseModule.forFeature([{
            name: User.name, schema: UserSchema, collection: 'USER_COLLECTION'
        }])
    ],
    providers: [
        UserRepository,
        UserService,
    ],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}