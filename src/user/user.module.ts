import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IUser } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([IUser]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
