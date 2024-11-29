//Arrays are the linear data structure, which are used to store elements.
//In js an array can store data of different data types.
//Array elements can be accessed using index, indexing starts from 0 and goes till size - 1,
//Size of an array can be determined by using the .length function.
//Example of an array :- arr[] = {12, 'a', 'coding', 4.56}

//Initializing an array.
const arr = [12, 'javascript', 2.56, 'coding', true, 'coding'];

//printing the elements of the array:- 
console.log("Array elements are :- ");
for (let i = 0; i < arr.length; i++){
	console.log(`arr[${i}] = ${arr[i]}`);
}

//In javascript there are various function which can be implements on the array like map, filter etc.
//Other than for loop various other loop like forEach, forOf can also be used with arrays.

//We can also declare the array using the Array keyword
const arr2 = new Array();
arr2[0] = 1;
arr2[1] = 2;


//Various operations in an Array in JS :-
console.log(arr2.push(3)); //add '3' at the last position of the array.
console.log(arr.pop()); //removes the last element from the array.
console.log(arr.toString()); //converts the whole array to the string.
console.log(arr2.at(1)); //return the element at the particular index.
console.log(arr.indexOf(12)); //return the first occurance index of the element.
console.log(arr.lastIndexOf('coding')); //return the last occurance index of the element.


