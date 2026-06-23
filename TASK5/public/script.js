let data=[];

async function load(){

let res=

await fetch(

"/api/students"

);

data=

await res.json();

display(data);

}

async function addStudent(){

let name=

document.getElementById(

"name"

).value;

let course=

document.getElementById(

"course"

).value;

await fetch(

"/api/students",

{

method:"POST",

headers:{

"Content-Type":

"application/json"

},

body:

JSON.stringify({

name,

course

})

}

);

load();

}

function display(arr){

let students=

document.getElementById(

"students"

);

students.innerHTML="";

document

.getElementById(

"count"

)

.innerHTML=

arr.length;

arr.forEach(

(s,i)=>{

students.innerHTML+=`

<div class="card">

<div>

${s.name}

<br>

${s.course}

</div>

<div class="actions">

<button

onclick="editStudent(${i})">

✏️

</button>

<button

onclick="deleteStudent(${i})">

🗑️

</button>

</div>

</div>

`;

});

}

async function deleteStudent(i){

await fetch(

"/api/students/"+i,

{

method:"DELETE"

}

);

load();

}

async function editStudent(i){

let newName=

prompt(

"New Name",

data[i].name

);

let newCourse=

prompt(

"New Course",

data[i].course

);

await fetch(

"/api/students/"+i,

{

method:"PUT",

headers:{

"Content-Type":

"application/json"

},

body:

JSON.stringify({

name:newName,

course:newCourse

})

}

);

load();

}

function searchStudent(){

let value=

document

.getElementById(

"search"

)

.value

.toLowerCase();

let filtered=

data.filter(

s=>

s.name

.toLowerCase()

.includes(

value

)

);

display(filtered);

}

load();