const container = document.querySelector(".main-container")
const crouselImg = document.querySelector(".crousel-img")
const dots = document.querySelectorAll(".dot")
// console.log(crouselImg)
let i = 0;
let alphabet;
let images;

// crousel ======================================================
let crousel = [
   "imges/crousel/crousel.jpg",
   "imges/crousel/crousel1.jpg",
   "imges/crousel/crousel2.jpg"
]
autoplay = setInterval(function () {
   i++;
   let selectedDotId = "#dot" + i;
   let selectedDot = document.querySelector(selectedDotId);

   dots.forEach(dot => dot.style.backgroundColor = "white");
   selectedDot.style.backgroundColor = "black";
   if (i > 2)
      i = 0;
   crouselImg.setAttribute("src", crousel[i])
}, 1200);


// frontPattern=========================== is liye lgaye hai kyoki hame 6 ke bad fir se vahi pattern lana hai==

let frontPattern = [
   "pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6"
]

// soundArray=============================== is liye bnaye hai taki usko pta chale ki use bolna kya hai

let soundArray = ["Apple", "Ball", "Cat", "Dog", "Elephant", "Fish", "Goat", "Hourse", "Igloo", "Joker", "Kite", "Lion", "Monkey", "Nose", "Octopus", "Pig", "Queen", "Rocket", "Snake", "Tiger", "Umbrella", "Van", "Watermelon", "X-ray", "Yak", "zebra"]

// loop chala rhe hai i vala loop image ke liye chal rha hai j vala loop pattern ke liye chal rha hai and k vala loop sound ke liye chal rha hai

for (let i = 65, j = 0, k = 0; i <= 90; i++, j++, k++) {
   if (j >= 6)
      j = 0;
   alphabet = String.fromCharCode(i)

   let frontCard = document.createElement("div")
   let backDiv = document.createElement("div")
   container.appendChild(frontCard)
   container.appendChild(backDiv)

   // frontCard.setAttribute("class", "front-card");
   backDiv.setAttribute("class", "back-card")
   frontCard.classList.add("front-card")
   frontCard.classList.add(frontPattern[j])

   // text==============================

   let text = document.createElement("p")
   text.setAttribute("class", "text")
   frontCard.appendChild(text)
   text.innerHTML = alphabet;

   // backImg=======================================

   let imageArr = document.createElement("img")
   imageArr.setAttribute("src", `imges/alphabets-img/${alphabet.toLocaleLowerCase()}.jpeg`)
   imageArr.setAttribute("class", "img-class")
   backDiv.appendChild(imageArr)
   //   console.log(imageArr)

   // ---------------spelling------------------

   let word = document.createElement("p")
   word.setAttribute("class", "words")
   word.innerHTML = soundArray[k];
   backDiv.appendChild(word);
   //===================================//

   let faIcons = document.createElement("div");
   faIcons.classList.add("fa-icons");
   backDiv.appendChild(faIcons);

   
   // create like icon//---------------------------======================

   let like = document.createElement("i")
   like.classList.add("fa-regular","fa-heart");
   faIcons.appendChild(like);

   // create expend icon==================================

   let expend = document.createElement("i")
   expend.classList.add("fa-solid","fa-arrow-rotate-left");
   faIcons.appendChild(expend);

   // ====================create share icon ===============================

   let share = document.createElement("i")
   share.classList.add("fa-solid","fa-share-from-square")
   faIcons.appendChild(share);

   //=======================flipIcon==============

   expend.addEventListener("click",(event)=>{
      flipCard.classList.remove("flipped");
      event.stopPropagation();
   });

   //============================like icon=======
   
   like.addEventListener("click", (event) => {
      like.classList.toggle("fa-solid");
      like.style.color = "red";
      event.stopPropagation();

   });

   //=====================ANIMATION LIKES =============================

   like.addEventListener("mouseover",(event)=>{
     like.claasList.add("fa-bounce");
     event.stopPropagation() 
   });

   //===============================================//


   like.addEventListener("mouseleave",(event)=>{
      like.classList.remove("fa-bounce");
      event.stopPropagation();
  });

   // flipCard=================================

   let flipCard = document.createElement("div")
   flipCard.appendChild(frontCard)
   flipCard.appendChild(backDiv)
   container.appendChild(flipCard)
   flipCard.setAttribute("class", "flip-card")
   // console.log(flipCard);

   flipCard.addEventListener("click", () => {
      flipCard.classList.add("flipped")

      let msg = new SpeechSynthesisUtterance();
      msg.text = soundArray[k];
      window.speechSynthesis.speak(msg);
      // console.log(msg)
   })

}


