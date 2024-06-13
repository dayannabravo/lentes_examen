import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LittleService } from './little.service';
import { CreateLittleDto } from './dto/create-little.dto';
import { UpdateLittleDto } from './dto/update-little.dto';

@Controller('little')
export class LittleController {
  constructor(private readonly littleService: LittleService) {}

  @Post()
  create(@Body() createLittleDto: CreateLittleDto) {
    return this.littleService.create(createLittleDto);
  }

  @Get()
  findAll() {
    return this.littleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.littleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLittleDto: UpdateLittleDto) {
    return this.littleService.update(+id, updateLittleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.littleService.remove(+id);
  }
}
