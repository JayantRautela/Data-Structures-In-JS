//A Doubly Linked List is a dynamic data structure.
//It also consists of node just like Singly Linked List and Circular Singly Linked List.
//Each node in a Doubly Linked Linked List consists of three fields :- prev, data and next.
//The prev field consists of the address of the previous node.
//The data field consists of the data of that particular node.
//The next field consists of the address of the next node.

//Node class
class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; 
        this.length = 0; 
    }

    // Function to append a node at the end of the list
    append(data) {
        const newNode = new Node(data);

        if (this.head === null) { 
            this.head = newNode;
        } else {
            let temp = this.head;

            // Traverse to the last node
            while (temp.next !== null) {
                temp = temp.next;
            }

            temp.next = newNode;
            newNode.prev = temp;
        }

        this.length++;
    }

    // Function to insert a node at any index
    insert(data, index) {
        if (index < 0 || index > this.length) {
            console.log("Invalid Index");
            return;
        }

        const newNode = new Node(data);

        if (this.head === null) { 
            if (index === 0) {
                this.head = newNode;
                this.length++;
            } else {
                console.log("Invalid Index");
            }
            return;
        }

        if (index === 0) { 
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let cnt = 0;
            let curr = this.head;

            while (cnt < index) {
                curr = curr.next;
                cnt++;
            }

            const prev = curr.prev;

            newNode.prev = prev;
            newNode.next = curr;
            prev.next = newNode;
            curr.prev = newNode;
        }

        this.length++;
    }

    // Function to remove a node by index
    remove(index) {
        if (index < 0 || index >= this.length) {
            console.log("Invalid Index");
            return null;
        }

        if (this.length === 0) { 
            console.log("Cannot remove from an empty list");
            return null;
        }

        let temp = this.head;

        if (index === 0) { 
            if (this.length === 1) { 
                this.head = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else {
            let cnt = 0;

            while (cnt < index) {
                temp = temp.next;
                cnt++;
            }

            const prev = temp.prev;
            const next = temp.next;

            if (prev) prev.next = next;
            if (next) next.prev = prev;
        }

        this.length--;
        return temp.data; // Return the data of the removed node
    }

    // Function to print the list
    printList() {
        let temp = this.head;
        const result = [];

        while (temp !== null) {
            result.push(temp.data);
            temp = temp.next;
        }

        console.log(result.join(" <-> "));
    }
}