//         bind method
// let obj={
//     empid:1111,
//     empname:"agal",
//     empsalary:20000,
//     empage:21,
//     dept:"fsd",
//     // function in array
//     diplay: function(){
//         return (`${this.empid} <br> ${this.empname} <br> ${this.empsalary}<br> ${this.empage} <br> ${this.dept}<br>`)
//     }
// }
// let obj1={v:function(salary,designation){
//     document.write(`${this.diplay()}<br>${salary}<br>${designation} <br>`)}
// }
// let borrow=obj1.bind(obj)
// borrow('20k',"designer")
// borrow(`${20000} <br> ${designer} <br>`)


//            call method
// obj1.v.call(obj,20000,"dev")

// //          apply method
// obj1.apply(obj,[20000,"developer"])



//       hoisting
//        function hoisting
// a()
// function a(){
// document.write('hello')
// }

//            closure
//  var a=10
 
//  function aname(){
//     let b=20
//     function bname(){
//         console.log(b)
//     }
//     b++
//     return bname()
//  }
//  aname()

//            task

//  var x = 10;

// function foo() {
//   var y = 20; // free variable
//   function bar() {
//     var z = 15; // free variable
//     return x + y + z;
//   }
//   return bar();
// }
// console.log(foo())

//          rest operator

// function fund(...d){
//     let sum=0;
    
//     for(i of d){
//         // sum=sum+
//         document.write(`<br>${i.name}<br> ${i.age}<br> ${i.id}`)
//     }
//     // document.write(sum)
// }
// // fund(1,2,3,4)
// //          object
// fund({
//     name:"agal",
//     age:21,
//     id:123
// },{
//     name:"ketz",
//     age:22,
//     id:111
// })


//              spread operator
//  let arr=["agal","ketz","sabi"]
//  let arr1=[21,22,23]
//  let arr2=[...arr,...arr1] // congadination
//  console.log(arr2)
 //     array of abject
//  let arr3=[{
//     name:"agal",age:21,place:"salem"
//  },{name:"wasim",age:24,place:"salem"}]

//  let arr4=[...arr3]
// //  console.log(arr4)

//  let z=[...arr4.filter((e)=>{
//    return e.name=="agal"
//  })]
// //  console.log(z)
// let y= z.map((x)=>{
// return(`<br> ${x.name}<br> ${x.age}<br>${x.place}`)
//  })
//  document.write(y)

 
//                distructruing assignment


// let arr=['kavitha','9845603112','mummy'] 
// let [a,b,c]= arr
// document.write(b)

// let obj={name:'kavitha',cont:9845603112,place:'coorg'}
// let {name,cont,place}=obj
// document.write(name)


//              ajax

document.getElementById('ajax').addEventListener("click",()=>{
  let obj1= new XMLHttpRequest()
  obj1.onreadystatechange=function(){
    try{
    if(this.readyState==4 && this.status==200){
      // document.write(this.responseText)
document.getElementById('div').innerHTML=this.responseText
    }}catch(e){
      console.log(e)

    }
  }
  obj1.open("get","../html/25mon.html",true)
  obj1.send();
})