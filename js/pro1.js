import{array} from "./pro.js";
document.getElementById("pro").addEventListener("click",()=>{
    let a=array.map((b)=>{
        return `<br> <img src="${b.image}" height="100px" width="200px"> <br> proid:${b.proid}  <br> proname:${b.proname} <br> prors:${b.prors} <br> probrand:${b.probrand} <br> procat:${b.procat} <hr>`
    })
    document.getElementById("div1").innerHTML=`${a}`
})
