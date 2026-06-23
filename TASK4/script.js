const form =

document.getElementById("form");

const password =

document.getElementById("password");

const confirmPassword =

document.getElementById("confirm");

const strength =

document.getElementById("strength");

const meter =

document.getElementById("meter");

const message =

document.getElementById("message");

password.addEventListener(

"input",

()=>{

let p=

password.value;

if(p.length<6){

meter.style.width="30%";

meter.style.background="red";

strength.innerHTML=

"🔴 Weak";

}

else if(

p.length>=6 &&

/[0-9]/.test(p)

){

meter.style.width="70%";

meter.style.background=

"orange";

strength.innerHTML=

"🟡 Medium";

}

if(

p.length>=8 &&

/[A-Z]/.test(p)

&&

/[0-9]/.test(p)

&&

/[^A-Za-z0-9]/.test(p)

){

meter.style.width="100%";

meter.style.background=

"green";

strength.innerHTML=

"🟢 Strong";

}

});

form.addEventListener(

"submit",

e=>{

e.preventDefault();

if(

confirmPassword.value.trim()

!==

password.value.trim()

){

message.innerHTML=

"❌ Password mismatch";

return;

}

message.innerHTML=

"✅ Account Created Successfully 🎉";

form.reset();

meter.style.width="0";

strength.innerHTML=

"Password Strength";

});

document

.getElementById("eye")

.onclick=()=>{

password.type=

password.type==="password"

?

"text"

:

"password";

};

function showPage(id){

document

.querySelectorAll(".page")

.forEach(

p=>p.classList.remove(

"active"

)

);

document

.getElementById(id)

.classList.add(

"active"

);

}

document

.getElementById("theme")

.onclick=()=>{

document.body

.classList.toggle(

"dark"

);
};