//           dynamic
//h1 tag
 let a =document.createElement('h1')
let b=document.createTextNode('this is a new text using javascript')
a.appendChild(b)
document.body.appendChild(a)
// p tag
let c=document.createElement('p')
let d=document.createTextNode('welcome to the world')
c.appendChild(d)
document.body.appendChild(c)
//form tag
let e =document.createElement('form')
e.setAttribute('method','post')
e.setAttribute('action','#')
let f=document.createElement('input')
f.setAttribute('type','placeholder')
let f1=document.createElement('input')
f1.setAttribute('type','placeholder')
let f2=document.createElement('input')
f2.setAttribute('type','placeholder')
e.appendChild(f)
e.appendChild(f1)
e.appendChild(f2)
document.getElementById("div").appendChild(e)
//             