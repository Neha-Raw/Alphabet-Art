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


   // create like icon//---------------------------======================

   let like = document.createElement("img")
   like.setAttribute("src", "imges/backcard-icons/likes.png")
   backDiv.appendChild(like);

   // create expend icon==================================

   let expend = document.createElement("img")
   expend.setAttribute("src","imges/backcard-icons/expend.png")
   backDiv.appendChild(expend);

   // ====================create share icon ===============================

   let share = document.createElement("img")
   share.setAttribute("src","imges/backcard-icons/share.png")
   backDiv.appendChild(share);

   // create div for like,share and expend ===============

   let combineIcon = document.createElement("div")
   combineIcon.appendChild(like)
   combineIcon.appendChild(expend)
   combineIcon.appendChild(share)
   combineIcon.setAttribute("class","combine-icon")
   backDiv.appendChild(combineIcon)

    // ---------------spelling------------------
    
    let word = document.createElement("p")
    word.setAttribute("class", "words")
    word.innerHTML = soundArray[k];
    backDiv.appendChild(word);

   // flipCard=================================

   let flipCard = document.createElement("div")
   flipCard.appendChild(frontCard)
   flipCard.appendChild(backDiv)
   container.appendChild(flipCard)
   flipCard.setAttribute("class", "flip-card")
   // console.log(flipCard);

   flipCard.addEventListener("click", () => {
      flipCard.classList.toggle("flipped")

      let msg = new SpeechSynthesisUtterance();
      msg.text = soundArray[k];
      window.speechSynthesis.speak(msg);
      console.log(msg)
   })

}


