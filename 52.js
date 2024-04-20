// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(4,5,4,2,10);
// console.log(ans);



function sumofall(a,b,...c){
    console.log(a,b,c)
    for(let i =0; i<= c.length; i++){
        console.log(c[i])
    }
}


sumofall(10,20,30,40,50,60,70,80,90)