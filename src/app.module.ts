import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { LittleModule } from './little/little.module';

@Module({
  imports: [PrismaModule, LittleModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
