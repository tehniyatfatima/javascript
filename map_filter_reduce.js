// map 
// map create new array by performing some operations on previous array

let arr1 = [13,12,14,15];
let a = arr1.map((b)=>{
        return b+1
});

console.log(arr1)
console.log(a);

let arr2 = [0,4,6,10,17,76]
let a2 = arr2.filter((a)=>{
        return a<10
})

console.log(a2)