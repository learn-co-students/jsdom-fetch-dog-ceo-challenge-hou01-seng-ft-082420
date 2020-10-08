console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(function (whatever) {
        // parse our data
        return whatever.json() //json() is a function that 'parses'
    }) //first then statement takes a fn as arg
    .then(function (json) {
        // console.log("This is my response" , json)
        // we have our array 
        let images = json["message"]
        for (const image of images) { //for every 'post'(think element) in the array(referenced by 'json' which is the argument we passed in our function on line 36)
            let div = document.getElementById("dog-image-container")
            let img = document.createElement("img")
            img.src = image
            div.appendChild(img)
        }
    })

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
    .then(function (whatever) {
        // parse our data
        return whatever.json() //json() is a function that 'parses'
    }) //first then statement takes a fn as arg
    .then(function (json) {
        //   console.log("This is my response" , json.message)
        // we have our array 
        let breeds = json.message
        for (const breed in breeds) { //for every 'post'(think element) in the array(referenced by 'json' which is the argument we passed in our function on line 36)
            let ul = document.getElementById("dog-breeds")
            let li = document.createElement("li")
            li.innerHTML = breed
            ul.appendChild(li)
            li.addEventListener('click', changeColor)
        }
    })


function changeColor(event) {
    event.target.style.color = 'blue'
}

let dropDown = document.getElementById("breed-dropdown")
dropDown.addEventListener("change", function filter() {
    let list = document.getElementsByTagName("li")
    for (let i = 0; i < list.length; i++) {
        let first = list[i].innerText.charAt(0)
        if (first == dropDown.value) {
            list[i].style.display = "block"
        } else {
            list[i].style.display = "none"
        }
    }
})