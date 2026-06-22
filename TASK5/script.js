async function addStudent(){

let name=

document.getElementById("name").value;

await fetch("/students",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name

})

});

load();

}

async function load(){

let res=

await fetch("/students");

let data=

await res.json();

let html="";

data.forEach((s,i)=>{

html+=`

<li>

${s.name}

<button onclick="del(${i})">

Delete

</button>

</li>

`;

});

document.getElementById("list")

.innerHTML=html;

}

async function del(i){

await fetch(`/students/${i}`,{

method:"DELETE"

});

load();

}

load();