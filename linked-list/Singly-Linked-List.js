//A Singly Linked List is a dynamic data strcutre which consists of node.
//Each node consists of two fields:- data and next.
//The data field stores the data of that particular node and the next field stores the address of the next node.
//It does not follow contiguous memory allocation unlike arrays.
//A head node si declared which is the first node of the Linked List.

//Node class.
class Node {
	//constructor to assign values.
	constructor(data){
		this.data = data;
		this.next = null; //by default the next field will store the value null.
	}
}

class SinglyLinkedList {
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
			while (temp.next != null){
				temp = temp.next;
			}
			temp.next = newNode;
		}
		this.length++;
	}

	//Function to insert a node at any index in the linked list.
	insert(data, index){
		if (index < 0 || index > this.length){
			console.log("Invalid Index");
			return;
		}

		const newNode= new Node(data);

		if (index === 0){
			newNode.next = head;
			this.head = newNode;
		} else {
			let cnt = 0;
			let curr = this.head;
			let prev = null;
			while (index > cnt){
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
		if (index == 0 || index > this.length) {
			console.log("Inalid Index");
			return null;
		}
		let temp = this.head;

		if (index == 0){
			this.head = temp.next;
		} else {
			let prev = null;
			let cnt = 0;

			while (index > cnt){
				prev = temp;
				temp = temp.next;
				cnt++;
			}
			prev.next = curr.next;
		}
		this.length--;
		return temp.data; //returning the deleted node data.
	}

	//function to display the linked list
	printList() {
        let temp = this.head;
    	let listArr = [];
    	while (temp) {
      		listArr.push(temp.data);
      		temp = temp.next;
    	}
    	console.log(listArr.join(" -> ")); //return the string
  	}
}

