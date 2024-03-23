//> < <= >= == === !=
// document.getElementById("vote").addEventListener("click",()=>{
//     let use=document.getElementById("age").value
//     if (use>18 ){
//         document.getElementById("h1").innerHTML="eligible"
//     }
//     else{
//         document.getElementById("h1").innerHTML=" not eligible" 
//     }
// })
// document.write(`Rs 100 ${500>100}`)
// let a=5,b="5"
// document.write(`<br>${a===b}`)
// document.getElementById("div").addEventListener("click",()=>{
//    let use=document.getElementById("text1").value
// let sel=document.getElementById("app").value
// if(use>5000 && sel==="samsung") {
//     document.getElementById("h1").innerHTML="success"

// }
// else{
//     document.getElementById("h1").innerHTML="failure"  
// }
// })

// document.getElementById("vote").addEventListener("click",()=>{
//     let use=document.getElementById("age").value
//     if (use>18 ){
//         document.getElementById("h1").innerHTML="eligible"
//     }
//     else{
//         document.getElementById("h1").innerHTML=" not eligible" 
//     }
// })

document.getElementById("div").addEventListener("click",()=>{
    // let val=document.getElementById("val").value;
    let text=document.getElementById("text2").value
    let select=document.getElementById("sel").value
    if( select=="tamiln" && text>20)
{
    document.getElementById("res").innerHTML="eligible"
}
else if(select=="karnataka" && text>20){
    document.getElementById("res").innerHTML="eligible"
}
else if(select=="kerala" && text>20){
    document.getElementById("res").innerHTML="eligible"
}
else{
    document.getElementById("res").innerHTML=" not eligible"
}
})

