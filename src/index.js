const breeds = []

//DOMContentLoaded that houses the fetch requests
document.addEventListener("DOMContentLoaded", function(){
    console.log("We're loaded up!")
    //fetch the images here
    loadImages()
    //fetch the breeds here
    loadBreeds()
    
    const breedFilter = document.getElementById("breed-dropdown")
    breedFilter.addEventListener('change', function(e){
        // console.log(e.target.value);
        let breedsList = document.getElementsByTagName('li')
        for (li of breedsList) {
            let first = li.innerText.charAt(0)
            if (first === e.target.value) {
                li.style.display = "block"
            } else {
                li.style.display = "none"
            }
        }
    })
})    

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const dogImages = document.getElementById("dog-image-container")
    fetch(imgUrl)
    .then( function(response){
        return response.json()
    })
    .then( function(json){
        // console.log(json)
        for(const image of json.message) {
            // console.log(image)
            let img = document.createElement("img")
            img.src = image
            dogImages.append(img)
        }
    })
}

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogBreeds = document.getElementById("dog-breeds")
    fetch(breedUrl)
    .then( function(response){
        return response.json()
    })
    .then( function(json){
        // console.log("These are my breeds, ", json)
        const breedsArray = Object.keys(json.message)
        for(const breed of breedsArray) {
            breeds.push(breed)
            const li = document.createElement("li")
            li.innerText = breed
            li.addEventListener('click', function(e){
                li.style.color = "green";
            })
            dogBreeds.append(li)
        }
    })
}

