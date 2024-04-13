import { GenderEnum, MaritalStatusEnum } from "../models/user.entity";

export interface CreateUserDto {
    name: string;
    age: number;
    gender: GenderEnum;
    maritalStatus: MaritalStatusEnum;
    height: number;
}