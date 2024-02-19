import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadersModule } from './leaders/leaders.module';
import { Leader } from './leaders/entities/leader.entity';
import { CountriesModule } from './countries/countries.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Country } from './countries/entities/country.entity';
import { CitiesModule } from './cities/cities.module';
import { TimezonesModule } from './timezones/timezones.module';
import { City } from './cities/entities/city.entity';
import { Timezone } from './timezones/entities/timezone.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Leader, Country,City,Timezone],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    LeadersModule,
    CountriesModule,
    CitiesModule,
    TimezonesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
