import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

export enum GenderEnum {
    FEMALE = "Female",
    MALE = "Male"
}

export enum MaritalStatusEnum {
    SINGLE = "Single",
    MARRIED = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed",
    Separated = "Separated"
}

@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop({ type: String, enum: GenderEnum })
    gender: GenderEnum

    @Prop({ type: String, enum: MaritalStatusEnum })
    maritalStatus: MaritalStatusEnum;

    @Prop()
    height: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

