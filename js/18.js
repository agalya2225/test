//array
let name=["agal","ketz","sabi","monu"]
document.write(name[0])
document.write(`<br>name=${name[0]}`)

//for
for(let a=0; a<name.length;a++){
    document.write(`<br> name=${name[a]}`)
}
//for in
for(let i in name){
    document.write(`<br> ${i}=${name[i]}`)
}
//for off
for (let j of name){
    document.write(`<br> ${j}`)
}
//for each
document.write("for each")
name.forEach((arr) => {
   document.write(`<br>${arr}`) 
});

//map
document.write("<h1>map</h1>")
let name1=name.map((ar)=>{
    // document.write(`<br> ${ar}`)
    return `<br> ${ar}`
})
.join("")
document.write(`<br> ${name1}`)

let a=[1,2,3,4,5,6,7,8]
document.write(`<br> a=${a}`)
for (let b=0; b<a.length; b++){
    document.write(`<br> b=${a[b]}`)
}

for (let b=0; a.length>b ;b++){
    document.write(`<br> b=${a[b]}`)
}

//object
let obj={
    rollnumber:1,fullName:"agal", dob:"25/05/2002", number:9486075434
}
for(let i in obj){ //for in
    document.write(`<br>${i}:${obj[i]}`)
}
document.write(`<br>${obj.fullName}`)// one data