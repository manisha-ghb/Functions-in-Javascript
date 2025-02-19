// task-1
function processNumbers(a, b, callback){
    return callback(a, b)
}
var res=processNumbers(3, 4, function(x, y){
    return x+y
})
console.log(res);

// task-2
function greet(callback){
    return callback("Alice!");
 }
 var result=greet(function(name){
     return "hello, "+name
 });
 console.log(result);

//  task-3
function calculate(num1, num2, callback){
    return callback(num1, num2)
}
var res=calculate(10, 5, function(x, y){
    return x-y
})
console.log(res);