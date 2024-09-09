import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { IUser, Role } from './user.entity';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() createUserDto: IUser): Promise<IUser> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post('login')
  public async login(@Body() loginDto: { username: string; password: string }): Promise<{ id: number; name: string; role: Role }> {
    const user = await this.userService.login(loginDto);
    if (!user) {
      throw new Error('Invalid username or password');
    } else {
      return user;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: IUser) {
    return this.userService.update(+id, updateUserDto);
  }
}
