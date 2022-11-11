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
//end
})()
