// // let price=500
// // let product="fruits"
// // let tax=20
// // console.log(product)
// // console.log(total=price+tax)

// var fruitname="pine apple"
// var count= 10
// var price=300
// var total=count*price
// console.log(fruitname)
// console.log(total)

// // let a=10
// // // a++
// // let b=a++
// // // ++a
// // console.log(a)
// // console.log(b)


// // function myname(){
// //     console.log("agal")
// // }

// // function a(){
// //     console.log("task")
// // }
// // a()
// // myname()
// // let a=10
// // let b=20
// // function add(){
// //     console.log(a+b)
// // }
// // add()
// // let factor="a"
// // let fplayer="dhoni"
// // let fmovie="k2"
// // function favourite(){
// //     console.log("Favourite Actor:a ")

// //     console.log("favourite player: dhoni")

// //     console.log(" favourite movie:k2")
// // }
// // favourite()


// // let add=(a,b)
// function area(a,b)
// {
// console.log(a*b)
// }
// area(20,40)

// //if else
// // var color="red"
// // var color="yellow"
// // var color="green"
// // if(color=="red" ){
// //     console.log("stop")
// // }
// //  else if(color=="yellow"){
// //     console.log("be ready")
// // }
// // else if(color=="green"){
// //     console.log("go")
// // }
// let n=31
// if(n%2==0){
// console.log("even")
// }
// else{
//     console.log("odd")
// }


//1

// for(i=1; i<=5; i++){
//     document.write(`<br>`,i)
// }

// let a=0
// while(a<=5){
//     document.write(`<br>`,a)
//     a++
// }

// function printNumbers(n){
//     if(n<=4){
//     document.write(`<br>`,n)
//     printNumbers(n+1)
//     }
// }
// printNumbers(1)

//2
// for(let i = 1; i <= 100; i += 2)
// {
//     document.write(i);
// }
let sum = 0;

for (let i = 10; i < 30; i += 2) {
    sum += i;
}

document.write("Sum of odd numbers between 10 and 30:" ,sum );

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate 10!
let result = factorial(10);

console.log("10! =", result);

