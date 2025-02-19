import { Controller, Post, Body, Get, Inject } from "@nestjs/common";
import { User } from "src/core/domain/entities/user.entity";
import { UserRepository } from "src/core/domain/repositories/user.repository";

@Controller('users')
export class UserController {

  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {
  }

  @Post()
  async createUser(@Body() body: User) {
    return this.userRepository.create(body)
  }

  @Get()
  async getAllUsers() {
    //findall
    return this.userRepository.findAll()
  }
}