const person = {name :"Abdur Rahman", role: "Frontend Developer", age: 25};

const {name : AbdurRahman, role, age} = person;

console.log(AbdurRahman, role, age);

const stack = ["ReactJS", "NodeJs", "Redux"];
const [firstFramework, secondFramework, ...restFramework] = stack;

//console.log(firstFramework, secondFramework);
//console.log(restFramework);

const numbers = [1, 2, 3, 4, 5 , 6];

const [firstnumbers, secondnumbers, ...restnumbers] = numbers;

console.log(restnumbers);
