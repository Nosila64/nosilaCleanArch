import { User } from "src/core/domain/entities/user.entity";
import { UserRepository } from "src/core/domain/repositories/user.repository";
import { CreateUserDTO } from "../dto/create-user.dto";
import { Inject } from "@nestjs/common";

export class CreateUserUseCase {
    constructor(@Inject(UserRepository) private readonly userRepository: UserRepository) {}
  
    async execute(user: CreateUserDTO): Promise<User> {
      const existingUser = await this.userRepository.findByEmail(user.email);
      if (existingUser) {
        throw new Error('User already exists');
      }
      
      const newUser = new User()
      newUser.name = user.name
      newUser.email = user.email

      return this.userRepository.create(newUser);
    }
  }