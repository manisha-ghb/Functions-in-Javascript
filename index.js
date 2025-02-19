/* Task-1 */

function sayHello(){
    console.log("Hello, World!");
}
sayHello();

/* Task-2 */

function displayWarning(){
    console.log("Warning! System Overload!");
}
displayWarning();

/* Task-3 */

function printStatus(){
    console.log("System Status: Active");
}
printStatus();

/* Task-4 */

function initialize(){
    console.log("Initialization Complete");
    shutdown();
}
function shutdown(){
    console.log("System Shutting Down...");
}
initialize();

/* Task-5 */

function startProcess(){
    console.log("Process Started");
    endProcess();
}
function endProcess(){
    console.log("Process Ended");
}
startProcess();

/* Task-6 */

function greetUser(name){
    console.log("Hello, " + name + "!");
}
greetUser("Manisha");
greetUser("Sindhu");

/* Task-7 */

function calculateSum(a, b){
    console.log(a+b);
}
calculateSum(2, 3);
calculateSum(3, 7);

/* Task-8 */

function countDown(){
    for( var i = 5; i >= 1; i--){
        console.log(i);
    }
}
countDown();

// task-9

function checkEvenOdd(num){
    if(num % 2 == 0){
        console.log(num + "is even");
    }
    else{
        console.log(num + "is odd");
    }
}
checkEvenOdd(5);
checkEvenOdd(6);

// task-10

function beginSession(){
    console.log("Session Started");
    endSession();
}
function endSession(){
    console.log("Session Ended");
}
beginSession();

// 14th-feb
// q-1
function calculate_area(length , width){
    return length*width;
}
console.log(calculate_area(2,3));
// q-2
function greet(name){
    return "hello, " + name;
}
console.log(greet("manisha"));
// q-3
function add_numbers(num1,num2,num3){
    return num1+num2+num3;
}
console.log(add_numbers(1,2,3));
// q-4
function multiply_by_two(num){
    return num*2;
}
console.log(multiply_by_two(2));
// q-5
function get_initials(fullName) {
    return fullName.split(" ").map(name => name[0].toUpperCase()).join("");
}
console.log(get_initials("Manisha Pidugu"));
// q-6
function conversion(celsius){
    return (celsius *9/5)+32;
}
console.log(conversion(0));
console.log(conversion(100));
// q-7
function is_positive(num){
    return num>0;
}
console.log(is_positive(2));
console.log(is_positive(-2));
// q-8
function average(a,b){
    return (a+b)/2;
}
console.log(average(2,4));
// q-9
function get_full_name(first_name , last_name){
    return first_name + last_name;
}
console.log(get_full_name("pidugu" , "manisha"));
// q-10
function cube(num){
    return num**3;
}
console.log(cube(2));
console.log(cube(5));
