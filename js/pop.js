//pop delete =last
import {arr} from "./19.js";
     document.getElementById("pop").addEventListener("click",()=>{
        arr.pop();
        let w=arr.map((a)=>{
           return`<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
       }).join(" ")
       
       document.getElementById("div").innerHTML=`${w}`
     })
     
    //shift
    document.getElementById("shift").addEventListener("click",()=>{
        arr.shift();
        let w=arr.map((a)=>{
           return`<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
       }).join(" ")
       
       document.getElementById("div").innerHTML=`${w}`
     })