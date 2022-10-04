// javascript Practice set 
// Question 
// let array1 = [1,24,55,67,88]
// let a = prompt("enter number")
// let b = Number.parseInt(a)
// let c = array1.push(b)

// console.log(array1)


// question2
// let array2 = []
// do{
//         a2 = prompt("enter number")
//         a2= Number.parseInt(a2)
//         array2.push(a2)
// } while (a2 != 0);
// console.log(array2)

// question 03
let array3 = [1,24,55,67,88]
let n = array3.filter((a) =>{
        return(a>24)
});
console.log("filter array",n)

let array4 = [1,24,55,67,88]
let n2 = array4.map((a) =>{
        return(a+1)
});
console.log("maped array",n2)

let array5 = [1,2,3,4,5]
let n3 = array5.reduce((a,b) =>{
        return(a*b)
});
console.log("reduce array",n3)