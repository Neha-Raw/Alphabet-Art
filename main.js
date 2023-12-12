const container = document.querySelector(".main-container")
const crouselImg = document.querySelector(".crousel-img")
// console.log(crouselImg)
let i = 0;
let alphabet;

// crousel ======================================================

let crousel = [
   "imges/crousel/crousel1.jpg",
   "imges/crousel/crousel2.jpeg",
   "imges/crousel/crousel3.jpeg"
]
autoplay = setInterval(function () {
   i++;
   if (i > 2)
      i = 0;
   crouselImg.setAttribute("src", crousel[i])
}, 1200);

// frontPattern=============================

let frontPattern = [
   "pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6"

]

for (let i = 65, j = 0; i <= 90; i++, j++) {
   if (j >= 6)
      j = 0;
   alphabet = String.fromCharCode(i)

   let frontCard = document.createElement("div")
   let backDiv = document.createElement("div")
   container.appendChild(frontCard)
   container.appendChild(backDiv)
   // frontCard.setAttribute("class", "front-card");
   backDiv.setAttribute("class", "back-card")
   //    console.log(container)
   frontCard.classList.add("front-card")
   frontCard.classList.add(frontPattern[j])

// text==============================

   let text = document.createElement("p")
   text.setAttribute("class", "text")
   frontCard.appendChild(text)
   text.innerHTML = alphabet;

// backImg=======================================

   let imageArr = document.createElement("img")
   imageArr.setAttribute("src", `imges/alphabets-img/${alphabet.toLocaleLowerCase()}.png`)
   imageArr.setAttribute("class", "img-class")
   backDiv.appendChild(imageArr)
   //   console.log(imageArr)

// flipCard=================================

   let flipCard = document.createElement("div")
   flipCard.appendChild(frontCard)
   flipCard.appendChild(backDiv)
   container.appendChild(flipCard)
   flipCard.setAttribute("class", "flip-card")
   // console.log(flipCard);


   flipCard.addEventListener("click", () => {
      flipCard.classList.toggle("flipped")
   })


}
