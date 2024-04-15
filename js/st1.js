import {arr} from "../js/19.js";
document.getElementById("h1").addEventListener("click",()=>{
    // console.log("10")
    let w=arr.map((a)=>{
    return`<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
    }).join("")
    document.getElementById("div").innerHTML=`${w}`
})
//filter
document.getElementById("bsc").addEventListener("click",()=>{
let file= arr.filter((b)=>{return b.degree=="bsc"})
let w=file.map((a)=>{
    return`<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
}).join(" ")

document.getElementById("div").innerHTML=`${w}`
})

//insert  push
let ins={stuid:1,stuName:"Agal",
stuAge:21,
stuDob:"25/05/2002",
stuCont:9486075434,
image:"../images/1.jpg",
degree: "bca", 
hobbies:["listening music","games","read"] ,
address:{street:"a street", doorno:"123", pincode:"600087"}}
document.getElementById("push").addEventListener("click",()=>{
    arr.push(ins);
    let w=arr.map((a)=>{
        return`<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
    }).join(" ")
    
    document.getElementById("div").innerHTML=`${w}`
    })
    

