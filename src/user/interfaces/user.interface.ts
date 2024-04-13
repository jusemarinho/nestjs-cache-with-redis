import { GenderEnum, MaritalStatusEnum } from "../models/user.entity";

export interface IUser {
    _id: string;
    name: string;
    age: number;
    gender: GenderEnum;
    maritalStatus: MaritalStatusEnum;
    height: number;
}