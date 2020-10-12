console.log('%c HI', 'color: firebrick')

let breeds = []

function fetching() {
 return fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response) {
    return response.json();
})
.then(function(json){
    json.message.forEach(item => images(item))
})
}

function images(item) {
    let container = document.querySelector("#dog-image-container");
    let imga = document.createElement("img");
    imga.src = item;
    container.appendChild(imga); 
}

function breedFetching() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(function(json) {
        breeds = Object.keys(json.message);
        breeds.forEach(item => addingBreeds(item))
        addBreedSelectListener()
    })

}

function addingBreeds(breed) {
    let ul = document.querySelector("#dog-breeds");
    let li = document.createElement("li");
    li.innerText = breed;
    ul.append(li)
    li.addEventListener("click", function(e) {
        e.target.style.color = "red"
    })
}


function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addingBreeds(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }




document.addEventListener("DOMContentLoaded", () => {
    fetching();
    breedFetching();
})