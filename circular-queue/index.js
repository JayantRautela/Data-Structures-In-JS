//A Circular Queue is a linear data structure which works in the FIFO principle (First In First Out).
//The elements are kept in a circualr way.
//Efficient memory utilization takes place because the place which are left empty after dequeue can be used beacuse of the circular pattern, which was a problem in simple Queue.
//Real world examples are CPU scheduling, memory management, etc.

class CircularQueue {
    constructor(size) {
        this.size = size; 
        this.queue = new Array(size).fill(null); 
        this.front = -1; 
        this.rear = -1; 
    }

    //Function to check if the queue is empty
    isEmpty() {
        return this.front === -1;
    }

    //Function to check if the queue is full
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    //Function to add an element to the queue
    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full. Cannot enqueue.");
            return false;
        }

        if (this.isEmpty()) {
            // If the queue is empty, initialize `front` and `rear` to 0
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size; 
        this.queue[this.rear] = value;
        return true;
    }

    //Function to remove an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null;
        }

        const value = this.queue[this.front];
        this.queue[this.front] = null; 

        if (this.front === this.rear) {
            
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size; 
        }

        return value;
    }

    //Function to peek at the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.queue[this.front];
    }

    //Function to print the queue 
    printQueue() {
        console.log(this.queue.join('-'));
    }
}
