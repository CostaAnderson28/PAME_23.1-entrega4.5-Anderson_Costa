import { Test, TestingModule } from '@nestjs/testing';
import { FinaceiroService } from './finaceiro.service';

describe('FinaceiroService', () => {
  let service: FinaceiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinaceiroService],
    }).compile();

    service = module.get<FinaceiroService>(FinaceiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
