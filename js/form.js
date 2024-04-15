//            add info in form

import {arr} from "../js/19.js"
document.getElementById('form').addEventListener('click', () => {

    let a = document.createElement('form')
    a.setAttribute('action', 'get')
    a.setAttribute('action', '#')
    a.setAttribute('enctype', 'multipart/form-data')
    a.setAttribute('id', 'info')
    
    let b1 = document.createElement('label')
    b1.setAttribute('for', 'id')
    let text3 = document.createTextNode("Student ID")
    b1.appendChild(text3)
    let b = document.createElement('input')
    b.setAttribute('type', 'number')
    b.setAttribute('placeholder', 'Enter student id ')
    b.setAttribute('id', 'stid')

    
    let c1 = document.createElement('label')
    c1.setAttribute('for', 'id')
    let text4 = document.createTextNode("Student name")
    c1.appendChild(text4)
    let c = document.createElement('input')
    c.setAttribute('type', 'text')
    c.setAttribute('placeholder', 'enter student name')
    c.setAttribute('id', 'name')

    let d1 = document.createElement('label')
    d1.setAttribute('for', 'id')
    let text5 = document.createTextNode("Student age")
    d1.appendChild(text5)
    let d = document.createElement('input')
    d.setAttribute('placeholder', 'enter student age')
    d.setAttribute('type', 'number')
    d.setAttribute('id', 'age')

    let e1 = document.createElement('label')
    e1.setAttribute('for', 'id')
    let text6 = document.createTextNode("Student Dob")
    e1.appendChild(text6)
    let e = document.createElement('input')
    e.setAttribute('type', 'date')
    e.setAttribute('placeholder', 'enetr dob')
    e.setAttribute('id', 'dob')

    let f = document.createElement('input')
    f.setAttribute('type', 'checkbox')
    f.setAttribute('value', 'sports')
    f.setAttribute('name', 'hobbies[]')
    f.setAttribute('id', 'sports')
    let l = document.createElement('label')
    l.setAttribute('for', 'sports')
    let text = document.createTextNode('sport')
    l.appendChild(text)


    let g = document.createElement('input')
    g.setAttribute('type', 'checkbox')
    g.setAttribute('value', 'read')
    g.setAttribute('name', 'hobbies[]')
    g.setAttribute('id', 'read')
    let m = document.createElement('label')
    m.setAttribute('for', 'read')
    let text1 = document.createTextNode('read')
    m.appendChild(text1)



    let h = document.createElement('input')
    h.setAttribute('type', 'checkbox')
    h.setAttribute('value', 'music')
    h.setAttribute('name', 'hobbies[]')
    h.setAttribute('id', 'music')
    let n = document.createElement('label')
    n.setAttribute('for', 'music')
    let text2 = document.createTextNode("music")
    n.appendChild(text2)



    let i = document.createElement('input')
    i.setAttribute('type', 'button')
    i.setAttribute('id', 'submit')
    i.addEventListener('click',addItem)
    i.setAttribute('value', 'submit')

    a.appendChild(text3)
    a.appendChild(b)
    a.appendChild(text4)
    a.appendChild(c)
    a.appendChild(text5)
    a.appendChild(d)
    a.appendChild(text6)
    a.appendChild(e)
    a.appendChild(text)
    a.appendChild(f)
    a.appendChild(text1)
    a.appendChild(g)
    a.appendChild(text2)
    a.appendChild(h)
    a.appendChild(i)
    // document.body.appendChild(a)

    document.getElementById('div').innerHTML = '<br>'
    document.getElementById('div').appendChild(a)

})
let addItem = (k) => {
    k.preventDefault();
    console.log('hi')

    let obj = {
        stuid: document.getElementById('stid').value,
        stuName: document.getElementById('name').value,
        stuAge: document.getElementById('age').value,
        stuDob: document.getElementById('dob').value,
        hobbies: Array.from(document.getElementsByName('hobbies[]'))
        .filter((x) => { return x.checked })
        .map((y) => { return y.value })
    }
    console.log(obj)
    arr.push(obj)
    document.getElementById('div').innerHTML=arr.map((a)=>{
        return  `<br>  stuid:${a.stuid} <br> stuName:${a.stuName} <br> stuDob:${a.stuDob} <br> stuAge:${a.stuAge} <br> stucont:${a.stuCont} <br> degree:${a.degree} <br> hobbies:${a.hobbies}<br> <hr>`
    })
}

