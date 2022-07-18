var number=34;
var number1=98;
console.log(number+number1);

//Data Types in JavaScript

var number=78;
var str="This is string";
var str2="This is also string";

//objects
var marks={
    ravi:78,
    harry:67,
    rahul:78.887
}

console.log(marks);

var a=true;
var b=false;

var arr=[1,3,9,"Paridhi",8,7];
console.log(arr);
arr.forEach(function(element){

    console.log(element);
})


function sum(a,b)
{
    c=a+b;
    return c;
}
console.log(sum(3,8));

let mydate=new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getSeconds());
console.log(mydate.getMonth());
console.log(mydate.getHours());
console.log(mydate.getDay());


// document.location->Gives details of location

/*tn=document.getElementsByTagName('div');
console.log(tn);
createdelement=document.createElement('p');
createdelement.innerTEXT="This is my world";
tn[0].appendChild(createdelement);
createdelement2=document.createElement('b');
createdelement2.innerTEXT="hgjhb";
tn[0].replaceChild(createdelement,createdelement2); */

// dom manipulation
let elemid=document.getElementById('click');
console.log(elemid);

let elemclass=document.getElementsByClassName("container");
console.log(elemclass);
elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");


/*tn=document.getElementsByTagName('div');
console.log(tn);
createdelement=document.createElement('p');
createdelement.innerTEXT="This is my world";
tn[0].appendChild(createdelement);
createdelement2=document.createElement('b');
createdelement2.innerTEXT="hgjhb";
tn[0].replaceChild(createdelement,createdelement2); */


sel=document.querySelectorAll('.container');
console.log(sel);

//Javascript events
function clicked()
{
    console.log("The button was clicked");
}
window.onload=function()
{
    console.log("The document was loaded");
}
let prevhtml=document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevhtml;
    console.log("click hua");
})

firstcontainer.addEventListener('mouseover',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>";
    console.log("Mouse on container");
})


//settimeout and setinterval
//Arror functions
sum=(a,b)=>{
    return a+b;
}

logkaro=()=>{
    console.log("log Karo");
}
//setTimeout(logkaro,1000);
setInterval(logkaro,2000);

obj={
    name:"Paridhi",
    length:1
}
jso=JSON.stringify(obj);
console.log(jso);
parsed=JSON.parse(`{"name":"Paridhi","length":1}`);
console.log(parsed);

//Backticks of template literals
a=34;
console.log(`this is ${a}`);