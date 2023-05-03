import { join } from 'path';
import { Module } from '@nestjs/common';
import { CalculatorEventsModule } from './calculator-events/calculator-events.module';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CalculatorEventsModule,
  ],

})
export class AppModule {}

