console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response) {
    return response.json()
})
 .then(function(json){
//  console.log(json.message[2])
    for(const image of json.message){
        const pic = document.createElement('img')
        const div = document.querySelector('#dog-image-container')
        pic.src = image
        div.append(pic)
    }
 })
 




 fetch('https://dog.ceo/api/breeds/list/all')
 .then(function(res) { 
    return res.json()
})
.then(function(json){
    // console.log(json.message.bulldog)
    const ul = document.querySelector('#dog-breeds')

     for(const breed in json.message){
        const li = document.createElement('li')
        li.append(breed)
        ul.append(li)
        li.addEventListener('click',function() {
           li.style.color = "red"
        });
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



})