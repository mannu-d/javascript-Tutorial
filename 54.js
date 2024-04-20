// callback functions 

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }


// myFunc(myFunc2);





// function myfunc2(name){
//     console.log("hello i am " + name)
//     console.log("and calling inside the main func" )
// }

// function myFunc(callback){
//     console.log("Hello world main function")
//     callback("myfunc2")
// }



// myFunc(myfunc2)



function myfunc2(name){
    console.log("hello my name is" +name)
}

function myFunc(mynewfunc){
    console.log("Hello my name is main function")
    mynewfunc("func2")
}



myFunc(myfunc2)
