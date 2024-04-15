 //console.log(document.documentElement.getAttribute('lang'))
//console.log(document.head.nodeName)
// console.log(document.body.nodeName)

//                    bg color

document.body.style.background='grey'
// document.getElementById('h1').style.color='white'
// document.getElementById('h1').style.background='purple'
document.getElementById('ul').style.color='white'
// document.getElementById('h1').style.textAlign='center'
document.getElementById('h1').style.cssText='color:white;font-size:30px; padding:30px; margin-top:20px; background:purple;text-align:center;'
let list=document.getElementsByClassName('list')
// .style.cssText='background:purple;'
// list[0].style.background='purple'
// list[3].style.background='purple'


//                  for in
for(i in list){
    if(i%2==0){
        list[i].style.cssText='background:black; color:white'
    }
 }
// another one is loop method
let h2= document.getElementsByTagName('h2')
h2[1].style.cssText='background:purple; color:white;'

//query selector
document.querySelector('#h5').style.cssText='color:lightblue; background:purple'
 let all=document.querySelectorAll('ol li')
// all[3].style.cssText='background:purple; color:black;'
for (i in all){
    if (i%2!==0){
      all[i].style.cssText='background:purple; color:white'
    }
}

// for(i in all){
//     if(all%2 !=0){
//         all[i].style.cssText='background:grey; color:white'
//     }
//  }

//             for color
console.log(document.getElementById('arr').style.color)

//             
// console.log(window.getComputedStyle(a))

//                    for property value
// console.log(e.getPropertyValue('font-size'))

//                  remove id
// document.getElementById('arr').removeAttribute('style')




