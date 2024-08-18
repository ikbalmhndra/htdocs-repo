let pictAnime = ["img/anime_pict.png", "img/anime_pict2.png", "img/anime_pict3.png"]
widthBox = false

// selector element
const parentBox = document.querySelector("#box-content")
const btn = document.querySelector("#btn-change")
const pict = document.querySelector("#pict")
console.log(btn)
console.log(pict)
console.log(parentBox)

// command

btn.addEventListener("click", function() {

    randomPict = Math.floor(Math.random() * pictAnime.length)
    widthBox = false

    if (randomPict === 0) {
        pict.removeAttribute("src")
        pict.setAttribute("src", pictAnime[0])
        pict.setAttribute("width", "250px")
    } else if (randomPict === 1) {
        pict.removeAttribute("src")
        pict.setAttribute("src", pictAnime[1])
        pict.setAttribute("width", "250px")

    } else {
        pict.removeAttribute("src")
        pict.setAttribute("src", pictAnime[2])
        pict.setAttribute("width", "200px")
        widthBox = true
    }

    if (widthBox === true) {
        parentBox.style.width = "200px";
    } else {
        parentBox.style.width = "250px";
    }
    console.log(randomPict)

})