import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserRepositoryImpl } from '../persistence/user.repository.impl';
import { UserService } from 'src/core/domain/services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { CreateUserUseCase } from 'src/core/application/use-cases/create-user.use-case';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    { provide: UserRepository, useClass: UserRepositoryImpl},
    CreateUserUseCase
  ]
})
export class UserModule {}
