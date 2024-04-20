// param destructuring 

// object 
// react 

// const person = {
//     firstName: "harshit",
//     gender: "male",
//     age: 500
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);




const skills = {
    skill1 : "Hacking",
    skill2 : "Coding",
    Skill3 : "Networking"
}


function mySkills({skill1,skill2,Skill3}){
    console.log(skill1)
    console.log(skill2)
    console.log(Skill3)
}

mySkills(skills)