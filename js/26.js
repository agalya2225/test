
//            window
// console.log(window.innerHeight)

//            open url app
document.getElementById('click').addEventListener('click',()=>{
let op=window.open('https://www.myntra.com/','myntra','height=500px,width=500px')
op.setTimeout(()=>{
   op.resizeTo(300,100) 
    // for close time === anothe one is setinterval
},1000)
})


//         scroll
document.getElementById('h5').addEventListener('click',()=>{
    window.open()
})
// another method==== scroll
function scrolldown() {
 let win=window.open('https://www.myntra.com/','myntra','height=500px,width=500px')
win.scrollTo(0, 200); }

//     open window=====move to
document.getElementById('window').addEventListener('click',()=>{
   let wind =window.open('https://www.google.co.in/','','height=500px,width=500px')
  wind.moveTo(200,300)
})

//         focus   





//            screen


// console.log(screen.availHeight)
// console.log(screen.colorDepth)
// console.log(screen.width)
// console.log(screen.height)
// console.log(screen.pixelDepth)
// console.log(screen.orientation)


//             location == url info
// console.log(location.ancestorOrigins)
// console.log(location.host)
// console.log(location.hash)
// console.log(location.href)
// console.log(location.origin)
// console.log(location.port)
// console.log(location.pathname)
// console.log(location.search)
// console.log(location.href)
// console.log(location.replace)
// console.log(location.reload)

// document.getElementById('click').addEventListener('click',()=>{
// location.assign('https://www.w3schools.com/')
// },2000)

//           set timer

// let times;
//     function startTime() {
//         times = setInterval(ChangeTime, 1000);
//     }
//     function ChangeTime() {
//         let date = new Date();
//         let h = date.getHours();
//         let m = date.getMinutes();
//         let s = date.getSeconds();
//         document.querySelector(".h").innerText = `${h} hours`;
//         document.querySelector(".m").innerText =`${m} minutes`;
//         document.querySelector(".s").innerText =`${s} seconds`;
//     }
//     function stopTime() {
//         clearInterval(times);}



// let time;
// function startTime(){
    // time=setInterval(ChangeTime, 1000)
// }
let times;
function ChangeTime(){
let date=new Date();
let h=date.getHours()
let m=date.getMinutes()
let s=date.getSeconds()
document.querySelector('.h').innerText=`${h} hours`;
 document.querySelector('.m').innerText=`${m} minutes`;
 document.querySelector('.s').innerText=`${s} seconds`;}
 
 function startTime(){
    times = setInterval(ChangeTime,1000)
 }
    document.getElementById('start').addEventListener('click',()=>{
    //  ChangeTime();  
    //  setInterval(ChangeTime,1000);
    startTime()
    });

    function stopTime(){
clearInterval(times);
    }
    document.getElementById('stop').addEventListener('click',()=>{
    //  ChangeTime();  
    //  clearInterval(ChangeTime);
     stopTime()
    });

        
  ///         navigator

console.log(navigator.clearAppBadge)
console.log(navigator.language)
console.log(navigator.cookieEnabled)
console.log(navigator.doNotTrack)
console.log(navigator.credentials)

//          history
        // in html line 22 == onclick method
        
        
 