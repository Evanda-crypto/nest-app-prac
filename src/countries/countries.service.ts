import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {

  constructor(
    @InjectRepository(Country)
    private readonly countryRepository:Repository<Country>
  )
  {

  }
  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.save(createCountryDto);
  }

  findAll() {
    return this.countryRepository.find({
      relations:{
        leader:true,
        cities:true,
        timezones:true
      }
    });
  }

  findOne(id: number) {
    return this.countryRepository.findOne({
      where: { id },
      select: {
        id: true,
        name: true,
      }
    });
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update(id,updateCountryDto);
  }

  remove(id: number) {
    return this.countryRepository.delete(id);
  }
}
