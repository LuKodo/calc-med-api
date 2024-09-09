import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IUser } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encryptData } from 'src/util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(IUser)
    private readonly userRepository: Repository<IUser>,
  ) {}

  async create(createUserDto: IUser) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async login(loginDto: { username: string; password: string }) {
    const userFound = await this.userRepository.findOne({
      where: { name: loginDto.username },
    });

    if (!userFound) {
      throw new NotFoundException(
        `El usuario '${loginDto.username}' no existe`,
      );
    }

    const isMatch = encryptData(loginDto.password).toString() === userFound.password;

    if (!isMatch) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return {
      id: userFound.id,
      name: userFound.name,
      role: userFound.role,
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: IUser) {
    this.userRepository.update(id, updateUserDto);
    return this.userRepository.save(updateUserDto);
  }
}
