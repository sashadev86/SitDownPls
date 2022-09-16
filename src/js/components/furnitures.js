import { gsap } from "gsap";

let furnitureItems = gsap.timeline({ paused: true });

furnitureItems
  .to(".furniture-hidden", { duration: .3, opacity: 1, visibility: "visible", display: "block" })

document.querySelectorAll(".btn-furniture").forEach(function (btnFurniture) {
  btnFurniture.addEventListener("click", function () {
    document.querySelectorAll(".btn-close-furniture").forEach(function (btnCloseFurniture) {
      btnCloseFurniture.classList.add("block")
    })
    btnFurniture.classList.add("none")
    furnitureItems.timeScale(1).play()
  })
})

document.querySelectorAll(".btn-close-furniture").forEach(function (butCloseFurniture) {
  butCloseFurniture.addEventListener("click", function () {
    document.querySelectorAll(".btn-furniture").forEach(function (butFurniture) {
      butFurniture.classList.remove("none")
    })
    butCloseFurniture.classList.remove("block")
    furnitureItems.timeScale(2).reverse()
  })
})

document.querySelectorAll(".catalog__btnfurniture").forEach(function (btnFurniture) {
  btnFurniture.addEventListener("click", function () {
    document.querySelectorAll(".catalog__closefurniture").forEach(function (btnCloseFurniture) {
      btnCloseFurniture.classList.add("block")
    })
    btnFurniture.classList.add("none")
    furnitureItems.timeScale(1).play()
  })
})

document.querySelectorAll(".catalog__closefurniture").forEach(function (butCloseFurniture) {
  butCloseFurniture.addEventListener("click", function () {
    document.querySelectorAll(".catalog__btnfurniture").forEach(function (butFurniture) {
      butFurniture.classList.remove("none")
    })
    butCloseFurniture.classList.remove("block")
    furnitureItems.timeScale(2).reverse()
  })
})
