console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds
let breedsObject

fetch(imgUrl)
.then( res => res.json())
.then( json => addDogImg(json))

fetch(breedUrl)
.then( res => res.json())
// .then( json => addDogBreed(json))
.then( json => {
    breeds = Object.keys(json.message);
    breedsObject = json.message
    addDogBreed(breeds)
})


// function to add dog images to page on load
function addDogImg(json){
    const imgs = json.message;
    const dogs = document.querySelector('#dog-image-container');
    
    for (i = 0; i < imgs.length; i++){
        image = document.createElement('img')
        image.src = imgs[i];
        dogs.append(image);
    }
}


//function to add dog breeds
function addDogBreed(whatever){
    // const breeds = json.message;
    let breedList = document.querySelector('#dog-breeds')

    // for (const breed in breeds){ //use for each key in the object
    for (i=0; i < whatever.length; i++) {
        li = document.createElement('li')
        li.innerText = whatever[i];
        

        li.addEventListener("click", function(e) {
            //console.log(e.target)
            e.target.style.color = "red";
        // })
        })

        if (breedsObject[whatever[i]].length > 0){
            for (const variety in breedsObject[whatever[i]]){
                ul = document.createElement('ul');
                vLi = document.createElement('li');

                vLi.innerText = `${breedsObject[whatever[i]][variety]} ${breedsObject[whatever[i]]}`;

                vLi.addEventListener("click", function(e){
                    e.target.style.color = "red";
                })

                ul.append(vLi);
                li.append(ul);
            }
        }
        breedList.append(li);
    }
}


const select = document.querySelector("#breed-dropdown");

select.addEventListener("change", function(e) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    addDogBreed(breeds.filter( breed => breed.startsWith(e.target.value)))
})


const nodeArray = document.querySelectorAll('li');


// new function that remove all lis (pass element that removes all children of that element)

function removeChildren(element){
    let child = element.lastElementChild
    while (child){
        element.removeChild(child)
        child = element.lastElementChild
    }
}

// call our function that creates elements, passing in new list (the values of select)

// // switch(select.value){
// //     case 'a':
        // for(const element in nodeArray){
        //     console.log(nodeArray);
        //     if (!nodeArray[element].textContent.startsWith('a')){
        //         ul.removeChild(nodeArray[element])
        //     }
        // }
    //     break;
    // case 'b':
    //     console.log('purr')
    //     break;
    // case 'c':
    //     console.log('howl')
    //     break;
    // case 'd':
    //     console.log('howl')
    //     break;



// function addColor(){
//     const nodeArray = document.querySelectorAll('li')

//     // for (i = 0; i > randomName.length; i++){
//     //     randomName[i].addEventListener('click', function(){
//     //     randomName[i].style.color = 'red';
//     //     });
//     // }

//     for (const element in nodeArray){
//         // element.addEventListener('click', function(){
//         element.innerText = 'asdfasdf'
//     }
// }

// addColor()
