import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }
  async create(createUserDto: CreateUserDto) {
    const password = createUserDto.password;

    const hash = await bcrypt.hash(password, 10);

    return this.userRepository.save({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hash,
      country_id: createUserDto.country
    });
  }

  async findAll() {

    const users = await this.userRepository.find({
      select: {
        id: true,
        name: true,
        email: true,
        country: {
          id: true,
          name: true
        }
      },
      relations: {
        country: true
      }
    });

    return {
      status: true,
      message: 'ok',
      list: users
    };
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
