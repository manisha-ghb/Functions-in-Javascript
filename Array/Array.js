//1.Create an array
//create an array with five numbers and print it
var numbers = [5, 10, 15, 20, 25];
console.log(numbers);

//2.Access an Element
//Given an array, print the third element
var arrayAccess = [10, 20, 30, 40, 50];  
console.log(arrayAccess[2]); 

//3.Change an Element
//Modify the second element of an array to a new value
var arrayChange = [10, 20, 30, 40, 50];  
arrayChange[1] = 99; 
console.log(arrayChange); 

//4.Find length
//write a function that returns the length of an array
function getArrayLength(arr) {
    return arr.length;
}
var myArray = [10, 20, 30, 40, 50];
console.log(getArrayLength(myArray)); 

//5.Add an Element(push)
//add a new element to the end of an array
var arrayAdd = [10, 20, 30, 40, 50];  
arrayAdd.push(60);  
console.log(arrayAdd);

//6.Remove the last element(pop)
//Remove the last element from an array and print the updated array
var arrayRemove = [10, 20, 30, 40, 50]; 
arrayRemove.pop(); 
console.log(arrayRemove); 

//7.Loop thorugh an array
//use a loop to print each element of an array
var arrayLoop = [10, 20, 30, 40, 50]; 
for (var i = 0; i < arrayLoop.length; i++) {
  console.log(arrayLoop[i]);  
}

//8.check if an element exists
//write a function to check if a given value exists in an array
function containsValue(arr, value) {
    return arr.includes(value);
}
var array = [10, 20, 30, 40, 50];
console.log(containsValue(array, 30));  
console.log(containsValue(array, 60));

//9.Copy an Array
//Creates a copy of an array and print it
var arrayCa = [10, 20, 30, 40, 50];  
var arrayCopy = arrayCa.slice();  //using slice()method
console.log(arrayCopy);
//(or)
var array_ca = [10, 20, 30, 40, 50]; 
var copyArray = [...array_ca]; //using spread operator
console.log(copyArray); 

//10.convert array to string
//convert an array to string using .join() and print the result
var arrayConvert = [10, 20, 30, 40, 50];
var arrayString = arrayConvert.join(', ');  
console.log(arrayString);  