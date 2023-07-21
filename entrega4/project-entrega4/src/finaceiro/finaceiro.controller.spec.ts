import { Test, TestingModule } from '@nestjs/testing';
import { FinaceiroController } from './finaceiro.controller';
import { FinanceiroService } from './finaceiro.service';

describe('FinaceiroController', () => {
  let controller: FinaceiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinaceiroController],
      providers: [FinanceiroService],
    }).compile();

    controller = module.get<FinaceiroController>(FinaceiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
