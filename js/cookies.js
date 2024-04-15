document.getElementById('button').addEventListener('click',()=>{
    // console.log(form)
    if(document.form.user.value==''){
        alert('fill the form')
        return
    }
    let es=escape(document.form.user.value)+';'
    document.cookie='name='+es
    document.cookie='name1='+ketz
    document.cookie='name2='+sabi
    document.cookie='name1=agal;expires=wed, 27 Mar 2024 11:32:00 GMT'
// //     delete after one week 
    document.cookie='name1=agal;max-age==604800'   //if i dont know the date
// //      secure  == attribute  
//     document.cookie='name1=agal;max-age==604800;secure;HttpOnly'
//     // console.log(name)
})

console.log(Math.floor(5))
console.log(Math.pow(3,5))

//         event  propocation


