import { Injectable } from '@nestjs/common';
import { CreateLittleDto } from './dto/create-little.dto';
import { UpdateLittleDto } from './dto/update-little.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LittleService {
  constructor(private prisma: PrismaService){}
  create(createLittleDto: CreateLittleDto) {
    return 'This action adds a new little';
  }

  findAll() {
    return `This action returns all little`;
  }

  findOne(id: number) {
    return `This action returns a #${id} little`;
  }

  update(id: number, updateLittleDto: UpdateLittleDto) {
    return `This action updates a #${id} little`;
  }

  remove(id: number) {
    return `This action removes a #${id} little`;
  }
}
