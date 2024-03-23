//splice 0 and 1
import { arr } from "./19.js";
let spl = {
    stuid: 2,
    stuName: "splice",
    stuAge: 21,
    stuDob: "25/05/2002",
    stuCont: 9486075434,
    image: "../images/2.jpg",
    degree: "bca",
    hobbies: [" music", "games", "read"],
    address: { street: "a street", doorno: "123", pincode: "600087" }
}
document.getElementById("splice").addEventListener("click", () => {
    arr.splice(2, 0, spl);
    let w = arr.map((a) => {
        return `<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
    }).join(" ")

    document.getElementById("div").innerHTML = `${w}`
})

//unshift


let uns = {
    stuid: 2,
    stuName: "splice",
    stuAge: 21,
    stuDob: "25/05/2002",
    stuCont: 9486075434,
    image: "../images/2.jpg",
    degree: "bca",
    hobbies: [" music", "games", "read"],
    address: { street: "a street", doorno: "123", pincode: "600087" }
}
document.getElementById("unshift").addEventListener("click", () => {
    arr.unshift(uns);
    let w = arr.map((a) => {
        return `<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
    }).join(" ")

    document.getElementById("div").innerHTML = `${w}`
})

             //update
document.getElementById("update").addEventListener("click", () => {
    let up = arr.findIndex((a) => {
        return a.stuid == 3
    })
    console.log(up)
    arr[up].image = "https://th.bing.com/th/id/OIP.70qiYhYu45pdLXgVdCrA7QHaLE?w=184&h=275&c=7&r=0&o=5&pid=1.7";
    arr[up].stuName = "mani ";
    let w = arr.map(a => {
        return `<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
    }).join(" ")
    document.getElementById("div").innerHTML = `${w}`        
})
            // update more than one
document.getElementById('more').addEventListener('click',()=>{
    let more=arr.map((a)=>{
      a.degree=='bsc'?a.degree='msc': // ternary
    //     if(a.degree=='bsc'){
    //     a.degree='msc'}
       console.log(arr) 
       return  `<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
 }).join(" ")
    document.getElementById("div").innerHTML = `${more}` 

})
 
//             search operation
document.getElementById('search').addEventListener('click',()=>{
    let search=arr.filter((a)=>{
        return (a.stuAge==21 && a.degree=='bca')
    })
    console.log(search)
    let w=search.map((a)=>{
        return  `<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
    }).join(" ")
       document.getElementById("div").innerHTML = `${w}`  
    })

//              sort
document.getElementById('sort').addEventListener('click',()=>{
 let srt=arr.sort((x,y)=>{
return ((x.stuName>y.stuName)?-1:0)
    })
    console.log(srt)
    document.getElementById("div").innerHTML = srt.map((a)=>{
        return  `<br> <img src="${a.image}" height="100px" width="200px"> <br> stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> address: <br> street:${a.address.street} doorno:${a.address.doorno} pincode:${a.address.pincode} <hr>`
    }).join(" ")
         
})


