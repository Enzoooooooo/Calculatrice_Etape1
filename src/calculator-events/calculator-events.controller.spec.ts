import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorEventsController } from './calculator-events.controller';

describe('CalculatorEventsController', () => {
  let controller: CalculatorEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorEventsController],
    }).compile();

    controller = module.get<CalculatorEventsController>(CalculatorEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
