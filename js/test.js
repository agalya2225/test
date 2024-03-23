// let op2=(a,b)=>{
//     document.write(`<br> Answer a+b=${a-b}`);
// }
// op2(10,20)
// let op3=(a,b)=>{
//     document.write(`<br> Answer a+b=${a*b}`);
// }
// op2(10,20)
let a=document.getElementById("n1");
let b=document.getElementById("n2")
document.getElementById("dit").addEventListener("click",()=>{

document.getElementById("p").innerHTML=Number(a.value /b.value);})

document.getElementById("mod").addEventListener("click",()=>{

document.getElementById("p").innerHTML=Number(a.value % b.value);})



