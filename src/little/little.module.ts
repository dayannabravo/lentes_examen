import { Module } from '@nestjs/common';
import { LittleService } from './little.service';
import { LittleController } from './little.controller';

@Module({
  controllers: [LittleController],
  providers: [LittleService],
})
export class LittleModule {}
