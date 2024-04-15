// document.getElementById('sub').addEventListener('click',()=>{
//     let a= document.getElementById('input').value
    //   literal pattern
//     let b=/hello/i
// console.log(b.exec(a))    
    // let c="agal"
//    if( a.match(b)){
// //    alert('match')}
// document.getElementById('div').innerHTML="matched"
//    }
//    else{
//     // alert('not match')
//     document.getElementById('div').innerHTML="not match"
//    }

// test method
// console.log(b.test(a))

// exec method
// console.log(b.exec(a))

// search method
// console.log(b.test(a))

// replace method
// console.log(a.replace(b,"hi everyone"))


//      constructor 

// let c= new RegExp ("agal","gim")
// console.log(c.exec(a))

// })

// email
document.getElementById('sub').addEventListener('click',()=>{
    let a= document.getElementById('input').value
    //   literal pattern
    // let b=/^[A-Za-z0-9+]+@[\w+]+\.[\w+]+$/i;
    const b = /^[https?]+:\/\/((w{3}\.)?[\w+]+)\.[\w+]+$/i;
console.log(b.exec(a))   
})

