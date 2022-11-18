import Queue from "./queue";

(() => {
    const Q1 = new Queue(5)

    Q1.enqueue(7)
    Q1.enqueue(8)
    Q1.enqueue(9)
    console.log(Q1.size())

    Q1.dequeue()
    Q1.dequeue()
    Q1.dequeue()

    console.log(Q1.isEmpty())
})()

