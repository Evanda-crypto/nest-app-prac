import { Module } from '@nestjs/common';
import { TimezonesService } from './timezones.service';
import { TimezonesController } from './timezones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timezone } from './entities/timezone.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Timezone])],
  controllers: [TimezonesController],
  providers: [TimezonesService],
})
export class TimezonesModule {}
