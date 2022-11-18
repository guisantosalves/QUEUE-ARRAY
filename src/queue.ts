export default class Queue {
    private front: number
    private capacity: number
    private queue: Array<number>
    private rear: number

    //FIFO -> first in, first out

    constructor(capacityOfArray: number) {
        this.front = this.rear = 0
        this.capacity = capacityOfArray
        this.queue = new Array(this.capacity)
    }

    public size(): number {
        let aux: number = 0
        if (this.rear == 0) {
            console.log("a fila está vazia.")
        } else {
            // soma as posições, logo, seu tamanho
            for (let i: number = this.front; i < this.rear; i++) {
                aux += 1
            }
        }
        return aux;
    }

    public enqueue(value: number): void {
        if (this.rear == this.capacity) {
            console.log("fila está cheia.")
        } else {
            this.queue[this.rear] = value
            this.rear++
        }
    }

    public dequeue(): void{
        if (this.rear == 0) {
            return console.log("A fila está vazia")
        } else {
            for (let i: number = 0; i < this.rear - 1; i++) {
                this.queue[i] = this.queue[i + 1] // colocando +1 ele ja cobre o que ja foi tirado
            }

            if (this.rear < this.capacity) {
                this.queue[this.rear] = 0 // validando se tem apenas 1 elemento na fila
            }

            this.rear--
        }
    }

    public isEmpty(): boolean{
        return this.rear == 0 ? true : false
    }
}