"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("./queue"));
(() => {
    const Q1 = new queue_1.default(5);
    Q1.enqueue(7);
    Q1.enqueue(8);
    Q1.enqueue(9);
    console.log(Q1.size());
    Q1.dequeue();
    Q1.dequeue();
    Q1.dequeue();
    console.log(Q1.isEmpty());
})();
