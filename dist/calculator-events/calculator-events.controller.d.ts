export declare class CalculatorEventsController {
    private validEvents;
    private invalidEvents;
    addValidEvent(timeTaken: number): {
        fasterPercentage: number;
        averageTime: number;
    };
    addInvalidEvent(): {
        invalidCount: number;
        lastInvalidTimestamp: number;
    };
    getEvents(): {
        validEvents: number;
        invalidEvents: number;
    };
}
