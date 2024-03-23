document.getElementById("form").addEventListener("click",(e)=>{
    // console.log("hello")
    switch(e.target.getAttribute("id"))
    {
        case "credit":
        document.getElementById("div").innerHTML="selected"
        break;
        case "debit":
        document.getElementById("div").innerHTML="selected"
        break;
        case "cash":
        document.getElementById("div").innerHTML="selected"
        break;
        case "upi":
        document.getElementById("div").innerHTML="selected"
        break;
        case "gpay":
        document.getElementById("div").innerHTML="selected"
        break;
        default:
        document.getElementById("div").innerHTML="choose any option"
        break;
        
    }
})
// if method
// if(e.target.getAttribute("id")=="credit"){
//     document.getElementById("div").innerHTML="selected" 
// }

document.getElementById("res").addEventListener("click",()=>{
let use=document.getElementById("year").value
let sel=Number(document.getElementById("opt").value)
if(sel=="dev"){
    if(use<=4 && use>=6 ){
    document.getElementById("div1").innerHTML="6000"
    }
else if(use<=7 && use>=9 ){
     document.getElementById("div1").innerHTML="8000"
}

else if(use<=10){
     document.getElementById("div1").innerHTML="10000"
}
    else{
        document.getElementById("div1").innerHTML="not eligible"   
    }
}
})