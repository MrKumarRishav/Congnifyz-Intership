const text=

"Full Stack Developer | B.Tech CSE Student";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing")

.innerHTML+=text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();

const cursor=

document.querySelector(".cursor");

document.addEventListener(

"mousemove",

e=>{

cursor.style.left=

e.clientX+"px";

cursor.style.top=

e.clientY+"px";

}

);