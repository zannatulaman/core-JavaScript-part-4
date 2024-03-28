export const largestNumber = (num1, num2) =>{
    if(num1 === num2){
        return "The number is equal"
    }if(num1 > num2){
        return `${num1} is greater than ${num2}`
    }else{
        return `${num2} is greater than ${num1}`
    }
}

export const learning = () => "I am learning JavaScript";