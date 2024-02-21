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

 async findAll() {
    const countries = await this.countryRepository.find({
      select:{
        id:true,
        name:true,
        leader:{
          id:true,
          email:true,
          name:true
        },
        cities:{
          name:true,
          id:true
        },
        timezones:{
          id:true,
          name:true
        },
        users:{
          name:true,
          email:true,
          id:true
        }
      },
      relations:{
        leader:true,
        cities:true,
        timezones:true,
        users:true
      }
    });

    return {
      status: true,
      message: 'ok',
      list: countries
    };
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
