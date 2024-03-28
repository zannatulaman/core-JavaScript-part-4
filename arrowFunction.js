//functions expressions == traditionals functions

const addNumber = function (a, b){
    return a + b;
}
console.log(addNumber(20, 20));

//arrow function

const addNumber2 = (a, b) => {
    return a + b;
}
console.log(addNumber2(5, 5));

//implicit arrow function

const add =  (a, b) => a + b;
console.log(add(5,8));

const sayHello = () => console.log("Hello, How are u?");
sayHello();

//cannot implicit arrow function

const subtract = (a, b) => {
    const subtractNum = a - b;
    return subtractNum
}
console.log(subtract(20, 5));




