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

 async findAll() {
    const leaders = await this.leaderRepository.find({
      select:{
        name:true,
        id:true,
        country:{
          name:true,
          id:true
        }
      },
      relations:{
        country:true
      }
    });

    return {
      status: true,
      message: 'ok',
      list: leaders
    };
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
