// array methods 
//arry to string 

let a = [22, 24, 10,100,202]
let b = (a.toString())
console.log(typeof(b))

// join method 
let c = ["Tehniyat","Fatima","Adeena","Areesha","Amna"];
let d = c.join(",");
console.log(d);

// pop method (which substract last method of arry)
let r = a.pop()  // return poped elements
console.log(a,r)

// push method 
let r2 = a.push(89)  // return pushed elements
console.log(a,r2)

// shift method 
let r3 = a.shift()
console.log(r3,a)