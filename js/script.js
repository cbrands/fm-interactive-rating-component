const available_ratings = document.querySelectorAll(".card__rating")
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
