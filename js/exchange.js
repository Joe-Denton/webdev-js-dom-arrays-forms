(function(){
//start

let pricePounds
let exchangeRate = 0.85
let priceEuros = 0
let convertForm = document.getElementById('myForm')
let msg = document.getElementById('msg')

convertForm.addEventListener('submit', function(ev) {
    ev.preventDefault()
    console.info("I was submitted")
    pricePounds = document.getElementById("pounds").value
    priceEuros = pricePounds*exchangeRate
    msg.innerHTML = "You will get: " + priceEuros + " euros"

    if(isNaN(pricePounds)) {
        msg.style.display = "block"
        msg.innerHTML = "You must enter a number"
        msg.setAttribute('class', 'error')
    }
    else if(pricePounds === 0) {
        msg.style.display = "block"
        msg.innerHTML = "You must enter a more than 0"
        msg.setAttribute('class', 'error')
    }
})

//end
})()