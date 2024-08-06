//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const num25 = numbers.filter( (num) => {
    return num > 25;
    }
)
console.log(num25)

const div5 = numbers.filter( (num) => {
    return num % 5 == 0;
})
console.log(div5)

const squared = numbers.map( (num) => {
    return num * num;
})
console.log(squared)
const times = numbers.map( (num) => {
    return num * 2;
})
console.log(times)

const num20 = numbers.filter( (num)=>{
    return num >= 20;
})
const num21 = num20.map( (num)=>{
    return num * num;
})
console.log(num21)
const divisible5 = numbers.filter( (num)=>{
    return num % 5 == 0;
})
const times3 = divisible5.map( (num)=>{
    return num * 3
})
console.log(times3)