"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorEventsController = void 0;
const common_1 = require("@nestjs/common");
let CalculatorEventsController = class CalculatorEventsController {
    constructor() {
        this.validEvents = [];
        this.invalidEvents = [];
    }
    addValidEvent(timeTaken) {
        const timestamp = Date.now();
        this.validEvents.push({ timeTaken, timestamp });
        const totalTime = this.validEvents.reduce((acc, event) => acc + event.timeTaken, 0);
        const averageTime = totalTime / this.validEvents.length;
        const fasterEvents = this.validEvents.filter((event) => event.timeTaken < timeTaken).length;
        const fasterPercentage = (fasterEvents / this.validEvents.length) * 100;
        return { fasterPercentage, averageTime };
    }
    addInvalidEvent() {
        var _a;
        const timestamp = Date.now();
        this.invalidEvents.push({ timestamp });
        const invalidCount = this.invalidEvents.length;
        const lastInvalidTimestamp = (_a = this.invalidEvents[this.invalidEvents.length - 2]) === null || _a === void 0 ? void 0 : _a.timestamp;
        return { invalidCount, lastInvalidTimestamp };
    }
    getEvents() {
        return { validEvents: this.validEvents.length, invalidEvents: this.invalidEvents.length };
    }
};
__decorate([
    (0, common_1.Post)('valid'),
    __param(0, (0, common_1.Body)('timeTaken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], CalculatorEventsController.prototype, "addValidEvent", null);
__decorate([
    (0, common_1.Post)('invalid'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CalculatorEventsController.prototype, "addInvalidEvent", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CalculatorEventsController.prototype, "getEvents", null);
CalculatorEventsController = __decorate([
    (0, common_1.Controller)('calculator-events')
], CalculatorEventsController);
exports.CalculatorEventsController = CalculatorEventsController;
//# sourceMappingURL=calculator-events.controller.js.map