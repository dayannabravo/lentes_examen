import { Test, TestingModule } from '@nestjs/testing';
import { LittleController } from './little.controller';
import { LittleService } from './little.service';

describe('LittleController', () => {
  let controller: LittleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LittleController],
      providers: [LittleService],
    }).compile();

    controller = module.get<LittleController>(LittleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
