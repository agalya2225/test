// document.getElementById("h1").addEventListener("click" , ()=>{
//     let a=document.getElementById("input").value
//     if (a>=500){
// document.getElementById("div").innerHTML="offer available"
//     }
//     else{
//         document.getElementById("div").innerHTML="offer not available"      
//     }[]
//      a>=500 ? document.getElementById("div").innerHTML="offer": document.getElementById("div").innerHTML="offer not available"
// })
 
// let i=0
// while=

// while(i<5) // 0<5 , 1<5 , 2<5 , 3<5 , 4<5 , 5<5 =false
// {
//     document.write(`<br> ${i}=Hello World`)
//     i++ //i+1 0+1 1+1 2+1 3+1 4+1 
// }
//do=

// do{
//     document.write(`<br>${i}=Hello World`)
//     i--
// }
// while(i>100)

//for=

// for(let j=0; j<5; j++){
//     document.write(`<br> ${j}`);
// }

//odd even

// for(let j=15; j>0; j--){
//     if(j%2==0){
//         document.write(`<br> ${j}=Even`);
//     }else{
//     document.write(`<br> ${j}=odd`);
//     }
// }


//              module of 10

// a=567
// let sum=0
// while(a){
//     let rem=a%10
//     console.log(rem)


//     sum=sum+rem;
//     console.log(sum)
//     a=Math.floor(a/10)
// }

// console.log(sum)

// nested loop
for(let i=0; i<10; i++){
    for(let j=0; j<i; j--){
        document.write(`${i}`)
    }
    document.write(`<br`)
}

