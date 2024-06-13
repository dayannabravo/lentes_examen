import { Test, TestingModule } from '@nestjs/testing';
import { LittleService } from './little.service';

describe('LittleService', () => {
  let service: LittleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LittleService],
    }).compile();

    service = module.get<LittleService>(LittleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
