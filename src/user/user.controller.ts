import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Response } from "express";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async postUser(@Body() userDto: CreateUserDto, @Res() res: Response) {
        const userCreated = await this.userService.saveUser(userDto);

        res.status(HttpStatus.OK).json(userCreated);
    }

    @Get(":id")
    async get(@Param("id") id: string, @Res() res: Response) {
        const user = await this.userService.getUserById(id);
        
        res.status(HttpStatus.OK).json(user);
    }
}