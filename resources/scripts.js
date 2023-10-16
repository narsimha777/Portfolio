let proj1 = document.getElementById("pj1");
let proj2 = document.getElementById("pj2");
let proj3 = document.getElementById("pj3");
let que1 = document.getElementById("ques1");
let que2 = document.getElementById("sry");

que1.hidden = true;
que2.hidden = true;

function click1(){
    proj2.hidden=true;
    que1.hidden=false;
    proj3.hidden=true;
}
proj1.addEventListener('mousedown',click1);

function click2(){
    proj1.hidden=true;
    proj3.hidden=true;
    que1.hidden=false;
}
proj2.addEventListener('mousedown',click2);

function click3(){
    proj1.hidden=true;
    proj2.hidden=true;
    proj3.hidden=true;
    que2.hidden=false;
}
proj3.addEventListener('mousedown',click3);

function sk1click(){
    para1.hidden = false;
    skill2.hidden = true;
    skill3.hidden = true;
    skill4.hidden = true;
    skill5.hidden = true;
}
skill1.addEventListener('mousedown',sk1click);
