import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { RedisCacheRepository } from "src/redis-cache/redis-cache.repository";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly redisCacheRepository: RedisCacheRepository
    ) {}

    async getUserById(userId: string) {
        const userCache = await this.redisCacheRepository.getData(userId);

        if (userCache) {
            return userCache;
        }

        const userRepository = await this.userRepository.findById(userId);

        await this.redisCacheRepository.saveData(userRepository._id, userRepository);

        return userRepository;
    }

    async saveUser(userCreateDto: CreateUserDto) {
        return await this.userRepository.create(userCreateDto);
    }
}