import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./models/user.entity";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUser } from "./interfaces/user.interface";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const userCreated = new this.userModel(createUserDto);
        return userCreated.save() as unknown as IUser;
    }

    async findById(userId: string): Promise<IUser> {
        return await this.userModel.findById(userId);
    }
}