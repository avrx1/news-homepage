

let burger = document.getElementById("burger")
let sidebar = document.getElementById("sidebar")
burger.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})