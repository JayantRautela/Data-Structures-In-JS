//A Stack i a dynamic data structure which works on the principle of FILO(First In Last Out).
//The first element entered will be the last to be retrieved.
//All the operatins like push, pop, seek etc are all performed in o(1) time complexity.

class Stack {
    constructor () {
        this.stack = [];
    } 

    //Function to push an element to the stack.
    push (element) {
        this.stack.push(element);
    }

    //Function to pop an element from the stack.
    pop () {
        if (this.stack.length === 0) {
            console.log("Stack is Empty");
        }
        return this.stack.pop();
    }

    //Function to find the last element of the stack.
    peek () {
        if (this.stack.length === 0) {
            console.log("Stack is Empty");
        }
        return this.stack[this.stack.length - 1];
    }

    //Function to check whether the stack is empty or not.
    isEmpty () {
        return this.stack.length === 0
    }

    //Function to get the size of the stack
    size() {
        return this.items.length;
    }

    //Function to display the stack elements
    display() {
        if (this.stack.length === 0) {
            console.log("Stack is empty.");
        } else {
            console.log(this.items.join(" -> "));
        }
    }
}