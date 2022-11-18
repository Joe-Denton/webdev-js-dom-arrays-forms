(function(){
//start

console.dir(window.location)
let url = window.location.href
let filename = url.split("/").pop()
console.info(filename)

let listOfLinks = document.querySelectorAll("nav ul li")

for(let i=0; i < listOfLinks.length; i++){
    let currentLink = listOfLinks[i].querySelector("a").getAttribute("href")
    if(currentLink === filename){
        listOfLinks[i].setAttribute("class","currentPage")
        break
    }
}

//end
})()