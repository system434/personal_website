let course1 = {
    code:"1620",
    name:"Web Fundamental Technologies"
};
let course2 = {
    code:"1515",
    name:"Scripting for IT"
};
let course3 = {
    code:"1310",
    name:"Math for IT"
};
let courseList = [course1,course2,course3];

let user;
do{
    user = prompt("Enter a 4 digit class code")
}while(isNaN(user) && user.length !== 4);


let list = 0;
for(let cour of courseList)
{
    if(cour.code == user)
    {
        console.log("Yes I am taking the course:" + cour.code)
        break;
    }else{
        list = list + 1;
    }
}
let new_code = "";
let new_name = "";

if(list == 3)
{
    console.log("I am not taking " + user + " please add the new course");
    code = prompt("Enter the new course's code");
    new_name = prompt("Enter the new course's name");
    let course4 = {
        new_code,
        new_name
    }
    courseList.push(course4)
}
