import { Module } from '@nestjs/common';
import { CalculatorEventsController } from './calculator-events.controller';

@Module({
  controllers: [CalculatorEventsController]
})
export class CalculatorEventsModule {}
