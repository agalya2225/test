document.getElementById("h1").addEventListener("click", () => {
    let use = document.getElementById("sel").value
    let text = document.getElementById("age").value
    if (text >= 3 && text <= 5) {

        if (use == "dev") {
            document.getElementById("div").innerHTML = "eligible for 6000"
        }

        else {
            document.getElementById("div").innerHTML = "not eligible"
        }
    }
    else if (text >= 6 && text <= 8) {
        if (use == "editing") {
            document.getElementById("div").innerHTML = "eligible for 8000"
        }
    }
    else if (text >=10){
        if(use == "design"){
            document.getElementById("div").innerHTML = "eligible for 10000"
        }
        else{
            document.getElementById("div").innerHTML = "not eligible"
        }
    }
    else {
        document.getElementById("div").innerHTML = "errorx"
    }



})