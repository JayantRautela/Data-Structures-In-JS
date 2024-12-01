//A Circular Singly Linked List is a dynamic data strcutre which consists of node just like Singly Linked List.
//The only difference between Singly Linked List and Circular Singly Linked List is that in the Circular Singly Linked List the last node  contains the address of the head node(first node), making a circle.

//Node class.
class Node {
	//constructor to assign values.
	constructor(data){
		this.data = data;
		this.next = null; //by default the next field will store the value null.
	}
}

class CircularSinglyLinkedList {
	constructor(){
		this.head = null;
		this.length = 0;
	}
	
	//function to create a Linked List.
	append(data){
		const newNode = new Node(data);
		if (this.head == null){
			this.head = newNode;
		} else {
			let temp = this.head;
			while (temp.next != this.head){
				temp = temp.next;
			}
			temp.next = newNode;
		}
        newNode.next = this.head;
		this.length++;
	}

	//Function to insert a node at any index in the linked list.
	insert(data, index){
		if (index < 0 || index > this.length){
			console.log("Invalid Index");
			return;
		}

		const newNode= new Node(data);

		if (index === 0) {
            if (this.head == null) {
                this.head = newNode;
                newNode.next = this.head; // Point to itself
            } else {
                let temp = this.head;
                while (temp.next != this.head) {
                    temp = temp.next;
                }
                newNode.next = this.head;
                this.head = newNode;
                temp.next = this.head; // Update last node
            }
        } else {
            let curr = this.head;
            let prev = null;
            let cnt = 0;
    
            while (cnt < index) {
                prev = curr;
                curr = curr.next;
                cnt++;
            }
            newNode.next = curr;
            prev.next = newNode;
        }
        this.length++;
    
	}

	//funtion to remove a node from a linked list.
	remove(index) {
        if (index < 0 || index >= this.length) {
            console.log("Invalid Index");
            return null;
        }
    
        let temp = this.head;
    
        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
            } else {
                let last = this.head;
                while (last.next != this.head) {
                    last = last.next;
                }
                this.head = temp.next;
                last.next = this.head; // Update last node
            }
        } else {
            let prev = null;
            let cnt = 0;
    
            while (cnt < index) {
                prev = temp;
                temp = temp.next;
                cnt++;
            }
            prev.next = temp.next; 
        }
        this.length--;
        return temp.data; // Returning the deleted node data
    }    

	//function to display the linked list
	printList() {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        let temp = this.head;
        let listArr = [];
        do {
            listArr.push(temp.data);
            temp = temp.next;
        } while (temp != this.head);
        console.log(listArr.join(" -> ")); //returns the string.
    }    
}