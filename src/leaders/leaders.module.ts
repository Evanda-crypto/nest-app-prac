import { Module } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { LeadersController } from './leaders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leader } from './entities/leader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Leader])],
  controllers: [LeadersController],
  providers: [LeadersService],
})
export class LeadersModule {

}
