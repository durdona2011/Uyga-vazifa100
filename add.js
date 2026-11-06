let body = document.querySelector("body")
let tugma1 = document.querySelector("nav button")

let matnlar = document.querySelectorAll("h1, p, nav button, header button")

tugma1.addEventListener("click", function(){

    if(body.classList.contains("qora")){
        body.classList.remove("qora")

        tugma1.innerHTML = '<i class="fa-solid fa-moon"></i>'

        matnlar.forEach(function(element){
            element.style.color = "black"
        })

    }
    else{
        body.classList.add("qora")

        tugma1.innerHTML  = '<i class="fa-solid fa-sun"></i>'

        matnlar.forEach(function(element){
            element.style.color = "white"
        })
    }
})