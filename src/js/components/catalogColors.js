import { gsap } from "gsap";

let catalog = document.querySelector('.catalog');

if (catalog) {
  let colorItems = gsap.timeline({ paused: true })

  colorItems
    .to(".color-hidden", { duration: .3, opacity: 1, visibility: "visible", display: "block" })

  document.querySelectorAll(".color-btn").forEach(function (btnColor) {
    btnColor.addEventListener("click", function () {
      document.querySelectorAll(".color-close-btn").forEach(function (btnCloseColor) {
        btnCloseColor.classList.add("block")
      })
      btnColor.classList.add("none")
      colorItems.timeScale(1).play()
    })
  })

  document.querySelectorAll(".color-close-btn").forEach(function (btnCloseColor) {
    btnCloseColor.addEventListener("click", function () {
      document.querySelectorAll(".color-btn").forEach(function (btnColor) {
        btnColor.classList.remove("none")
      })
      btnCloseColor.classList.remove("block")
      colorItems.timeScale(2).reverse()
    })
  })

  document.querySelectorAll(".catalog__btncolor").forEach(function (btnColor) {
    btnColor.addEventListener("click", function () {
      document.querySelectorAll(".catalog__closecolor").forEach(function (btnCloseColor) {
        btnCloseColor.classList.add("block")
      })
      btnColor.classList.add("none")
      colorItems.timeScale(1).play()
    })
  })

  document.querySelectorAll(".catalog__closecolor").forEach(function (btnCloseColor) {
    btnCloseColor.addEventListener("click", function () {
      document.querySelectorAll(".catalog__btncolor").forEach(function (btnColor) {
        btnColor.classList.remove("none")
      })
      btnlorItems.timeScale(2).reverse()
    })
  })
}


