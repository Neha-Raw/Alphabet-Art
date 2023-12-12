const container = document.querySelector(".main-container")
// console.log(container)
let alphabet;
for (let i = 65, j=0; i <= 90; i++,j++) {

   alphabet = String.fromCharCode(i)

   let frontCard = document.createElement("div")
   let backDiv = document.createElement("div")
   container.appendChild(frontCard)
   container.appendChild(backDiv)
   frontCard.setAttribute("class", "front-card");
   backDiv.setAttribute("class", "back-card")
   //    console.log(container)

   let text = document.createElement("p")
   text.setAttribute("class", "text")
   frontCard.appendChild(text)
   text.innerHTML = alphabet;



  let imageArr = document.createElement("img")
  imageArr.setAttribute("src",`imges/alphabets-img/${alphabet.toLocaleLowerCase()}.png`)
  imageArr.setAttribute("class","img-class")
  backDiv.appendChild(imageArr)
//   console.log(imageArr)
  
let flipCard = document.createElement("div")
flipCard.appendChild(frontCard)
flipCard.appendChild(backDiv)
container.appendChild(flipCard)
flipCard.setAttribute("class","flip-card")
// console.log(flipCard);


flipCard.addEventListener("click", () =>{
   flipCard.classList.toggle("flipped")
})

}
