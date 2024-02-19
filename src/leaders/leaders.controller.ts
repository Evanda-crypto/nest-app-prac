import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';

@Controller('leaders')
export class LeadersController {
  constructor(private readonly leadersService: LeadersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createLeaderDto: CreateLeaderDto) {
    return this.leadersService.create(createLeaderDto);
  }

  @Get()
  findAll() {
    return this.leadersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeaderDto: UpdateLeaderDto) {
    return this.leadersService.update(+id, updateLeaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadersService.remove(+id);
  }
}
