let arr=[{
    name:"iphone",
    id:1,
    price:50000,

}]
let arr1=[{
    name:"laptop",
    id:1,
    price:50000,
   brand :{brand1:"asus",brand2:"hp"}

}]
let arr2=[{
    name:"laptop",
    id:1,
    price:50000,
   brand :{brand1:"asus",brand2:"hp"},
   rating:["good","poor","ave","bad"]

}]


arr2.push(arr[0])
console.log(arr2)

let up=arr2.findIndex((e)=>{
    return e.price==50000
})
arr2[up].price=80000
console.log(arr2)

let del=arr2.filter((e)=>{
    return e.arr2
})