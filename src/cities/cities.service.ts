import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {

  constructor(
    @InjectRepository(City)
    private readonly cityRepository:Repository<City>
  ){}
  create(createCityDto: CreateCityDto) {
    return this.cityRepository.save(createCityDto);
  }

  findAll() {
    return this.cityRepository.find();
  }

  findOne(id: number) {
    return this.cityRepository.findBy({id});
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return this.cityRepository.update(id,updateCityDto);
  }

  remove(id: number) {
    return this.cityRepository.delete(id);
  }
}
