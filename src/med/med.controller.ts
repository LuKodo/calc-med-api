import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { MedService } from './med.service';
import { Med } from './med.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Med')
@Controller('med')
export class MedController {
  constructor(private readonly medService: MedService) {}

  @Post()
  create(@Body() createMedDto: Med) {
    return this.medService.create(createMedDto);
  }

  @Get()
  findAll() {
    return this.medService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedDto: Med) {
    return this.medService.update(+id, updateMedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medService.remove(+id);
  }
}
