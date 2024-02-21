import { Injectable } from '@nestjs/common';
import { CreateTimezoneDto } from './dto/create-timezone.dto';
import { UpdateTimezoneDto } from './dto/update-timezone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Timezone } from './entities/timezone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TimezonesService {

  constructor(
    @InjectRepository(Timezone)
    private readonly timezoneRepository: Repository<Timezone>
  ){}

  create(createTimezoneDto: CreateTimezoneDto) {
    return this.timezoneRepository.save(createTimezoneDto);
  }

  async findAll() {
    const timezones = await this.timezoneRepository.find({
      select:{
        id:true,
        name:true
      }
    });

    return {
      status: true,
      message: 'ok',
      list: timezones
    };
  }

  findOne(id: number) {
    return this.timezoneRepository.findBy({id});
  }

  update(id: number, updateTimezoneDto: UpdateTimezoneDto) {
    return this.timezoneRepository.update(id,updateTimezoneDto);
  }

  remove(id: number) {
    return this.timezoneRepository.delete(id);
  }
}
