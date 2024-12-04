//A Queue is a linear data structure which follows first-in-first-out(fifo) principle.
//Various operations of Queue are enqueue, dequeue etc.
//Queue can be used for scheduling tasks.

//Queue class
class Queue {

    //Queue implementation using array.
    constructor () {
        this.queue = [];
    }

    //Function to insert a element in a Queue.
    enqueue (element) {
        this.queue.push(element);
    }

    //Function to delete a element from a Queue.
    dequeue () {
        if (this.queue.length === 0) {
            return "Queue is Empty.";
        }
        return this.items.shift();
    }

    //Function to get the first element of the Queue.
    front () {
        if (this.queue.length === 0) {
            return "Queue is Empty.";
        }
        return this.queue[0];
    }

    //Function to check whether the Queue is empty or not.
    isEmpty () {
        return this.queue.length === 0;
    }

    //Function to get the length of the Queue.
    length () {
        return this.queue.length;
    }

    //Function to print the Queue.
    print () {
        if (this.queue.length === 0) {
            return "Queue is Empty.";
        }
        console.log(this.queue.join(','));
    }
};