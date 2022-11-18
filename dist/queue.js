"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    //FIFO -> first in, first out
    constructor(capacityOfArray) {
        this.front = this.rear = 0;
        this.capacity = capacityOfArray;
        this.queue = new Array(this.capacity);
    }
    size() {
        let aux = 0;
        if (this.rear == 0) {
            console.log("a fila está vazia.");
        }
        else {
            // soma as posições, logo, seu tamanho
            for (let i = this.front; i < this.rear; i++) {
                aux += 1;
            }
        }
        return aux;
    }
    enqueue(value) {
        if (this.rear == this.capacity) {
            console.log("fila está cheia.");
        }
        else {
            this.queue[this.rear] = value;
            this.rear++;
        }
    }
    dequeue() {
        if (this.rear == 0) {
            return console.log("A fila está vazia");
        }
        else {
            for (let i = 0; i < this.rear - 1; i++) {
                this.queue[i] = this.queue[i + 1]; // colocando +1 ele ja cobre o que ja foi tirado
            }
            if (this.rear < this.capacity) {
                this.queue[this.rear] = 0; // validando se tem apenas 1 elemento na fila
            }
            this.rear--;
        }
    }
    isEmpty() {
        return this.rear == 0 ? true : false;
    }
}
exports.default = Queue;
