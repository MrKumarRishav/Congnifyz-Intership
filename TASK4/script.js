const password=

document.getElementById("password");

const strength=

document.getElementById("strength");

const message=

document.getElementById("message");

password.addEventListener("input",()=>{

let value=password.value;

let score=0;

if(value.length>=8){

score++;

}

if(/[A-Z]/.test(value)){

score++;

}

if(/[0-9]/.test(value)){

score++;

}

if(/[^A-Za-z0-9]/.test(value)){

score++;

}

if(score<=1){

strength.style.background="red";

strength.style.width="30%";

message.innerText="Weak";

}

else if(score<=3){

strength.style.background="orange";

strength.style.width="70%";

message.innerText="Medium";

}

else{

strength.style.background="green";

strength.style.width="100%";

message.innerText="Strong";

}

});

function toggleMode(){

document.body.classList.toggle("dark");

}