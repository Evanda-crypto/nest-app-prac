import { Injectable } from '@nestjs/common';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Leader } from './entities/leader.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeadersService {

  constructor(
    @InjectRepository(Leader)
    private readonly leaderRepository: Repository<Leader>
  ) {

  }
  create(createLeaderDto: CreateLeaderDto) {
    return this.leaderRepository.save(createLeaderDto);
  }

  findAll() {
    return this.leaderRepository.find({
      relations:{
        country:true
      }
    });
  }

  findOne(id: number) {
    return this.leaderRepository.findOne({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
  }

  update(id: number, updateLeaderDto: UpdateLeaderDto) {
    return `This action updates a #${id} leader`;
  }

  remove(id: number) {
    return `This action removes a #${id} leader`;
  }
}
