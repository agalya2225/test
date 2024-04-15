 //              exceptional handling
// a=20
// console.log(a)  // error object{name:message}

  // for user find error
// document.write(a)
// try{
//     document.write(a)
// }
// catch(err){
//      alert(err.name+":"+err.message)
// }

// let num = document.querySelector('#input')
// document.getElementById('submit').addEventListener('click',()=>{

// let num1=Number(num.value)
// // try
// try{
//     if(num1==""||num1==null|| !Number.isInteger(+num1)){
//         throw new Error("invalid, kindly enter valid details")
//     }
//     else{
//         alert("success")
//     }
// }
// //              catch
// catch(e){
//     alert(e.message)
// }
// //            finaly
// finally{
//     document.write('done')
// }
// })


//             throw
// let x=parseInt(prompt("input a number less than 5")) 
// try{ 
// y=x-10 
// if(y>=5) 
// throw{
//     name:"Reference Error",message:"y is not less than 5"
// }

// // throw new Error(" y is not less than 5") 
// else alert(y) 
// }catch(e){ 
// alert(e.name+":"+e.message) 
// }

//                rethrow
// let x1=parseInt(prompt("input a number less than 5")) 
// try{ 
// y=x1-10 
// if(y>=5) throw new Error(" y is not less than 5") 
// else alert(y) 
// }catch(e){ 
//     if(e instanceof ReferenceError){
//         throw e
//     }
//     else{
//         alert(e) 
//     }

// }

// Assigning the value returned by the prompt dialog box to a variable
// var num = prompt("Enter a positive integer between 0 to 100");
// // Storing the time when execution start
// var start = Date.now();
//  try {
//  if(num > 0 && num <= 100) {
//      alert(Math.pow(num, num)); // the base to the exponent power
//  } else {
//      throw new Error("An invalid value is entered!");
//  }
// } catch(e) {
//  alert(e.message);
// } finally {
//  // Displaying the time taken to execute the code
//  alert("Execution took: " + (Date.now() - start) + "ms");
// }



// URI encode & decode
// var a = "%E6%A2%B";
// var a="agal"

//     try {     
//       var b= encodeURI(a) ;  
//       console.log(b)
//         // decodeURI(a);  // throws a URI error          
//     } catch(e) {
//        console.error(e.name + ": " +  e.message);
//     }

// methods  == string   

let a= prompt('enter')
// document.write(a.toUpperCase())
// document.write(a.toLowerCase())
// document.write(a.charCodeAt())
document.write(a.toString())