// object to json
let a={
    studid:1 ,
    studname:'agal',
    stuage:21
}
let b=JSON.stringify(a)
document.write(`${b }, <br></br>`)

// array to json
let c=[ 1,"ketz",22]
let d=JSON.stringify(c)
document.write(`${d},<br>`)

// json to javascript
// let json=`{'key':value}
let e=`{"studid":2,"studname":"sabi","studage":22}`
let f=JSON.parse(e)
document.write(`${f.studid}<br> ${f.studname} <br> ${f.studage} <br>`)

let g=`[3,"jp",23]`
let h=JSON.parse(g)
document.write(`${h},<br>`)

let i=`[
	{
        "name": "Aleix Melon",
        "id": "E00245",
        "role": ["Dev", "DBA"],
        "age": 23,
        "doj": "11-12-2019",
        "married": false,
        "address": {
            "street": "32, Laham St.",
            "city": "Innsbruck",
            "country": "Austria"
            },
        "referred": "E0012"
	},
    {
        "name": "Bob Washington",
        "id": "E01245",
        "role": ["HR"],
        "age": 43,
        "doj": "10-06-2010",
        "married": true,
        "address": {
            "street": "45, Abraham Lane.",
            "city": "Washington",
            "country": "USA"
            },
        "referred": null
	}
]`

let k=JSON.parse(i)
let arr=k.map((j)=>{
    return(`<br> <h3>${j.name}<br> ${j.id} <br> ${j.role} <br> ${j.age} <br> ${j.doj} <br> ${j.married} <br> ${j.address}<br> ${j.address.street} <br> ${j.address.city}<br> ${j.address.country}<br> ${j.referred} <h3>`)
}).join(" ")
document.write(`${arr}<br>`)