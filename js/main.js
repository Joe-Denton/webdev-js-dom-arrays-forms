(function(){
//start
document.getElementById("myHeading").innerHTML="Joe Denton"

let firstListItem = document.querySelector("nav ul li")
firstListItem.setAttribute("class", "currentPage")

let firstLink = document.querySelector("nav ul li a")
firstLink.setAttribute("href", "https://www.google.co.uk")
//add a test event
document.getElementById("myTestEvent").addEventListener("click", myFunction)
function myFunction(ev){
    console.dir(ev.target)
}
//background colour changer
//red
//let redBtn = document.querySelector(".red")
//let bodyElement =  document.querySelector("body")
//redBtn.addEventListener("click", function(){
    //bodyElement.setAttribute("class", "redBack")
//})
//blue
//let blueBtn = document.querySelector(".blue")
//blueBtn.addEventListener("click", function(){
//    bodyElement.setAttribute("class", "blueBack")
//})
//green
//let greenBtn = document.querySelector(".green")
//greenBtn.addEventListener("click", function(){
//    bodyElement.setAttribute("class", "greenBack")
//})
//default
//let defaultBtn = document.querySelector(".reset")
//defaultBtn.addEventListener("click", function(){
//    bodyElement.removeAttribute("class")
//})
//more efficient way
let bodyElement = document.querySelector("body")
let colourBtns = document.querySelectorAll(".colPicker")
for(let i=0; i<colourBtns.length; i++){
    colourBtns[i].addEventListener("click", chgColour)
}
function chgColour(ev){
    let newColour = ev.target.classList[0] +"Back"
    if(newColour === "resetBack"){
        bodyElement.removeAttribute("class")
    } else{
    bodyElement.setAttribute("class", newColour)
    }
}

//image rotator
let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg',
'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];
let count = 0
document.getElementById("myImages").setAttribute('src', imageAr[count])

setInterval(chgImage, 5000)

function chgImage(){
    count++
    if(count === imageAr.length){
        count = 0
    }
    document.getElementById("myImages").setAttribute('src', imageAr[count])
}

//end
})()
