let name = "Taiwo";
let surname = "owoseje";
let age = 25;
let isStudent = true;
let favColor = "Green"




function displayInformation () {
    let info = document.getElementById("info");
    let output = `
        My name is ${name} ${surname}<br> I am ${age} years old. <br> Am I a student? ${isStudent} <br> My favorite color is ${favColor}. 
    `;
    info.innerHTML = output;
    document.getElementById("new-age").innerHTML = "";
    
}

let active_info = document.getElementById("btn-info");
let active_age = document.getElementById("btn-age");


document.getElementById("btn-info").onclick = function() {
    displayInformation();
    active_info.style.backgroundColor = "blue"
    active_age.style.backgroundColor = "grey"
    
    let information = document.getElementById("information")
    information.style.backgroundColor = "white"
    information.style.padding = "20px 40px"
    information.style.border = "1px solid grey"
    information.style.borderLeft = "3px solid green"
    information.style.borderRadius = "10px"
}


let nextAge = age + 5;

function displayAge () {
    let output = `
        I will be ${nextAge} in five years.
    `
    document.getElementById("new-age").innerHTML = output;
    document.getElementById("info").innerHTML = "";
}

document.getElementById("btn-age").onclick = function() {
    displayAge();
    active_age.style.backgroundColor = "blue"
    active_info.style.backgroundColor = "grey"
    
}