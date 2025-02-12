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