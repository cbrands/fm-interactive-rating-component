const available_ratings = document.querySelectorAll(".card__rating")
const button = document.querySelector(".card__btn")
cardRate = document.getElementById("card__rate");
const startScreen = document.querySelector("#start_screen");
const endScreen = document.querySelector("#end_screen");
let selectedRate

available_ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const current = document.querySelector(".card__rating--checked")
    if (current){
       current.classList.remove("card__rating--checked")
     }
     const selected = e.target
     selected.classList.add("card__rating--checked")
     selectedRate = e.target.innerText
     console.log(selectedRate)
  }) 
})

button.addEventListener("click", ()=> {
  if (selectedRate) {
    cardRate.innerText = selectedRate
    startScreen.classList.add("hidden")
    endScreen.classList.remove("hidden")
  }
})