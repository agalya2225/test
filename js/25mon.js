// for              class
let que=document.querySelector('#ol')
que.classList.add('sty')

// mouseover  and click
document.getElementById('h1').addEventListener('click',()=>{
    document.querySelector('#h1').classList.add('one')
})

//           remove class
document.querySelector('p').classList.remove('para')

//             add tag
// document.getElementById('div').classList.add('h1')

// let ele1=document.createElement('h1')
// let ele2=document.createTextNode('this is h1 tag')
// ele1.appendChild(ele2)
// document.getElementById('div').appendChild(ele2)

//            another=method
let ele1=document.createElement('h1')
let ele2=document.createTextNode('this is h1 tag')
ele1.appendChild(ele2)
document.getElementById('create').addEventListener('click',()=>{
     document.getElementById('div').insertBefore(ele1,document.querySelector('p'))
    
})

//              for image
// document.getElementById('img').addEventListener('mouseover',()=>{
//     let img=document.getElementById('img')
//     document.body.removeChild(img)
// })

//            button show and hide
let image=document.createElement('img')
image.setAttribute('src','../images/7.jpg')
image.setAttribute('id','img')
document.getElementById('show').addEventListener('click',()=>{
//    let image1=document.getElementById('img')
document.body.appendChild(image)
})

//            remove child
// let image1=document.createElement('img')
// image1.setAttribute('src','../images/7.jpg')
// image1.setAttribute('id','img1')
document.getElementById('hide').addEventListener('click',()=>{ let image2=document.getElementById('img')
document.body.removeChild(image)

    
})

//       replace child

let img= document.createElement('img')
img.setAttribute('src','../images/7.jpg')
img.setAttribute('id','images')
document.getElementById('replace').addEventListener('click',()=>{
let qu=document.querySelector('#pa')
document.getElementById('div1').replaceChild(img,qu)
})

//          navigation tavel== one node to to another


// let order=document.getElementById('ol')
// console.log(order.lastElementChild.nodename)

// let order=document.getElementById('div1')
// console.log(order.lastElementChild.nodeName)
// //color
// order.lastElementChild.style.color='blue'

// console.log(order.childNodes.nodeName) //nodename

//figure the child
// console.log(document.body.children)
// //length
// console.log(document.body.children.length)

//previous 
console.log(document.getElementById('pa').previousElementSibling)
console.log(document.getElementById('pa').nextElementSibling)
// change text
document.getElementById('pa').previousElementSibling.innerHTML=`hello`
// parent node
console.log(document.getElementById('list1').parentNode)
console.log(document.getElementById('list1').parentElement)




