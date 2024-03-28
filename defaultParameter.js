const greet = (name = "Aayan") => {
    console.log(`Hello, ${name}`);
}

greet();

const calculateArea = (width = 5, height = 5) => {
    return width * height
}
console.log(calculateArea());
console.log(calculateArea(10, 2));


const createName = (firstName = "Tanjina" , lastName = getLastName()) => {
    return `${firstName} ${lastName}`
}  

const getLastName = () => {
    return "Sultana"
}
console.log(createName())
console.log(createName("Osmane", "Dialle"))