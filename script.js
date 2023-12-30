const urlPoke = "https://pokeapi.co/api/v2/pokemon"
const id = () => Math.floor(Math.random()*905)
const containerPoke = document.getElementById("pokemon-con")
const pokeNome = document.getElementById("pokeNome")
const imagePoke = document.getElementById("imagePoke")
const typesPoke = document.getElementById("typesPoke")

const botao = document.getElementById("button")

botao.addEventListener("click", function(){
    fetch(`${urlPoke}/${id()}`)
    .then(response => response.json())
    .then(pokemon => {
        const select = {
            name: pokemon.name,
            img: pokemon.sprites.front_default,
            types: pokemon.types
        }
        types(select)
        poke(select)
    })
    typesPoke.innerHTML = ""
})

function poke(select){
    pokeNome.innerHTML=`Nome: ${select.name}`
    imagePoke.setAttribute("src",select.img)
}

function types(select){
    let quantp = Object.keys(select.types).length
    for(var i=0; i < quantp; i++){
        console.log(i)
        let type = (select.types[i].type.name)
        typesPoke.innerHTML += `<li class="${type}">${type}</li>`
    }
}


