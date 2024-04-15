     // event propagation
let parent=document.querySelector('div')
let child=document.querySelector('.btn')
parent.addEventListener('click',()=>{
    console.log('clicked parent')
},true)
child.addEventListener('click',()=>{
    console.log('clicked child')})

// mam's code

function showTagName()
 { alert("Capturing: "+ this.tagName); } 

var elems = document.querySelectorAll("div, p, a");
 for(let elem of elems) 
{ elem.addEventListener("click", showTagName, true);} 


//          another 
let paren=document.querySelector('ul')
let chil=document.querySelectorAll('li')
paren.addEventListener('click',()=>{
    console.log('clicked parent')
})
//     looping = for each
let a=
chil.forEach((x) => {
    x.addEventListener('click',(a)=>{
        a.stopPropagation()  // stop showing parent
        console.log('clicked child')
        a.target.classList.toggle('name')
    })
 });
// chil.forEach((x) => {
//     x.addEventListener('click',()=>{
//         event.stopPropagation()  // stop showing parent
//         console.log('clicked child')
//         event.target.classList.toggle('name')
//     })
//  });

//       JSON
// JSON.parse()
// JSON.stringify()
