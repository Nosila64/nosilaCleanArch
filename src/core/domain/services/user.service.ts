import { Inject, Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { CreateUserUseCase } from "src/core/application/use-cases/create-user.use-case";
import { CreateUserDTO } from "src/core/application/dto/create-user.dto";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService {
  constructor(@Inject(UserRepository) private readonly userRepository: UserRepository, private readonly createUserUseCase: CreateUserUseCase) {}

  async createUser(userDTO: CreateUserDTO): Promise<User> {
    return this.createUserUseCase.execute(userDTO);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll(); // Ajoute une méthode findAll() dans l'interface
  }

}