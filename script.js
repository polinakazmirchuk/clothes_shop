let list = document.querySelector("#list")
let grid = document.querySelector("#grid")
let carousel = document.querySelector("#carousel")
function changeGrid() {
    list.classList.remove("btn-dark")
    list.classList.add("btn-light")
    carousel.classList.remove("btn-dark")
    carousel.classList.add("btn-light")
    grid.classList.add("btn-dark")
}
function changeList() {
    grid.classList.remove("btn-dark")
    list.classList.add("btn-dark")
    carousel.classList.remove("btn-dark")
    carousel.classList.add("btn-light")
    grid.classList.add("btn-light")
}
function changeCarousel() {
    list.classList.remove("btn-dark")
    list.classList.add("btn-light")
    carousel.classList.add("btn-dark")
    grid.classList.add("btn-light")
    grid.classList.remove("btn-dark")
}
grid.addEventListener("click", changeGrid)
list.addEventListener("click", changeList)
carousel.addEventListener("click", changeCarousel)