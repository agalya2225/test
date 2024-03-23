// //numbers 1 to 10

// for(i=1; i<=10; i++){
//     document.write("<br>", i)
// }

// // odd numbers 1 to 100
// for(i=1; i<=100; i+=2){
//     document.write("<br>" , i)
// }
// multiplication table
for (i=1; i<=7; i++){
    let result=i*7
    document.write("<br>7*" ,i ,"=" ,result)
}
// for (i=1; i<=7; i++){
   
//     document.write(`<br> 7* ${i}=${i*7} `)
// }
// for (i=1; i<=7; i++){
   
//     document.write(`<br> 7* ${i}=${i*7} `)
// }
// for (a = 1; a <= 10; a++) {
//     for (b = 1; b <= 10; b++) {
//         document.write (` <br> ${a} * ${b} = ${a * b}`);
//     }

// }

//sum of numbers
// let sum=0;
// for(i=1; i<=10; i++){
//     sum += i;
    
// }
// document.write("<br>", sum);

//sum of odd numbers 10 to 30
// let sum=0
// for(i=11; i<=30; i+=2){
//     sum +=i
// }
// document.write("<br>" ,sum)

// //factorial
// let factorial=1
// for(let i=1; i<=10; i++){
//     factorial *= i
// }
// document.write( "<br>", factorial)

// fibonaci series
document.write("<hr>")
let n=10,a=0, b=1,c;


document.write(a)
document.write(b)
 for(i=0; i<10; i++){
    c=a+b;
    a=b;
    b=c;
    document.write("," ,c)
    
 }



