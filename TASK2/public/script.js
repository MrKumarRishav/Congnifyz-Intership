const form =

document.getElementById("form");

const table =

document.getElementById("table");

const search =

document.getElementById("search");

async function load() {

let res =

await fetch("/students");

let data =

await res.json();

show(data);

}

function show(data){

let html = "";

data.forEach(s => {

html += `

<tr>

<td>${s.name}</td>

<td>${s.email}</td>

<td>${s.course}</td>

</tr>

`;

});

table.innerHTML = html;

}

form.addEventListener(

"submit",

async e => {

e.preventDefault();

const student = {

name:

name.value,

email:

email.value,

phone:

phone.value,

course:

course.value,

gender:

gender.value

};

await fetch("/register", {

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:

JSON.stringify(student)

});

load();

form.reset();

});

search.addEventListener(

"input",

async () => {

let res =

await fetch("/students");

let data =

await res.json();

data = data.filter(

s =>

s.name

.toLowerCase()

.includes(

search.value

.toLowerCase()

)

);

show(data);

});

load();