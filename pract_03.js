// practice for loops 

// question no 1  by for in loop
let obj = {
        tehniyatfatima : 98,
        Adeena_Hussain : 90,
        Unsa_Faheem : 91,
        Marium_Rafique : 92
};

for (let i = 0; i < Object.keys(obj).length; i++) {
         console.log("The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])
      };

// question no 2  by for of loop

for (let key  in obj){
        console.log(obj[key])
};

// question no 3  by while loop

cn = 7
let i 
// while (i != cn){
//          i =   prompt("enter a correct number")
//       console.log("try again")
// };
// console.log("you entered a correct number")

// Write a function for find mean of 5 numbers

function tehniyat(a,b,c,d){
        
        return ((a+b+c+d)/4)
        
}

console.log( "mean is " + tehniyat(2,3,45,6))
