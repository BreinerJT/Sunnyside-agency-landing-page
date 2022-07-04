const links = document.querySelector(".links")
const toggle = document.querySelector(".js-toggle")
const link = document.querySelectorAll(".link")

toggle.addEventListener("click", () => {
    links.classList.toggle ("hide")
})

link.forEach(item => {
    item.addEventListener("click", () => {
        links.classList.add ("hide")
    })
})