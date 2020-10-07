
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response) {
  return response.json();
})
.then(function(json){
    let messages = json.message
    for(let i of messages){
       let pic = document.createElement('img')
       pic.src = i
       let div = document.querySelector("#dog-image-container")
       div.append(pic)
    }
}
    )

fetch("https://dog.ceo/api/breeds/list/all")
.then(function(response) {
  return response.json();
})
.then(function(json){
    let messages = json.message
    for(const key in messages){
        let div = document.querySelector("#dog-breeds")
        let list = document.createElement('li')
        list.innerText = (`${key}: ${messages[key].join(', ')}`)
        list.setAttribute("id", `${key}`)
        div.append(list)
        list.addEventListener('click', colorChange)
    }
}
    )

function colorChange(e){
    document.getElementById(e.target.id).style.color = "red"
}

let dropDown = document.getElementById("breed-dropdown")
dropDown.addEventListener('change', function() {
    console.log(dropDown.value)
    list = document.querySelectorAll('li')
    for( let li of list){
        li.style.display = "block"
        console.log(li.id[0])
        if(li.id[0] != dropDown.value){
            li.style.display = "none"
        }
    }
  }
        )