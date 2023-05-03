import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('calculator-events')
export class CalculatorEventsController {
    private validEvents: { timeTaken: number; timestamp: number }[] = [];
    private invalidEvents: { timestamp: number }[] = [];

    @Post('valid')
    addValidEvent(@Body('timeTaken') timeTaken: number): { fasterPercentage: number; averageTime: number } {
        const timestamp = Date.now();
        this.validEvents.push({ timeTaken, timestamp });

        const totalTime = this.validEvents.reduce((acc, event) => acc + event.timeTaken, 0);
        const averageTime = totalTime / this.validEvents.length;

        const fasterEvents = this.validEvents.filter((event) => event.timeTaken < timeTaken).length;
        const fasterPercentage = (fasterEvents / this.validEvents.length) * 100;

        return { fasterPercentage, averageTime };
    }

    @Post('invalid')
    addInvalidEvent(): { invalidCount: number; lastInvalidTimestamp: number } {
        const timestamp = Date.now();
        this.invalidEvents.push({ timestamp });

        const invalidCount = this.invalidEvents.length;
        const lastInvalidTimestamp = this.invalidEvents[this.invalidEvents.length - 2]?.timestamp;

        return { invalidCount, lastInvalidTimestamp };
    }

    @Get()
    getEvents(): { validEvents: number; invalidEvents: number } {
        return { validEvents: this.validEvents.length, invalidEvents: this.invalidEvents.length };
    }
}
