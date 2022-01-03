//start slider
//get array from slider items
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

//get number of slides
let slidesCount = sliderImages.length;

//set current slide
let currentSlide = 1;

//slider number of element
let slideNumberElement = document.getElementById("slide-number");

//get perv and next button
let pervButton = document.getElementById("perv");
let nextButton = document.getElementById("next");

//handle click on perv and next button
pervButton.onclick = pervslide;
nextButton.onclick = nextslide;

//create ul element
let ulElement = document.createElement("ul");

//set id on created element
ulElement.setAttribute("id", "pagination-ul");

//create list items based on slides count

for (let i = 1; i <= slidesCount; i++) {
  //create li item
  let liItem = document.createElement("li");

  //set custom attribute
  liItem.setAttribute("data-index", i);

  //set item content
  liItem.appendChild(document.createTextNode(i));

  //append li to the parent ul
  ulElement.appendChild(liItem);
}

//add the created element ul to the page
document.getElementById("indicators").appendChild(ulElement);

//get the new element ul
let newUl = document.getElementById("pagination-ul");

//get li items from the new ul
let newLi = Array.from(document.querySelectorAll("#pagination-ul li"));

//loop through all li
for (let i = 0; i < newLi.length; i++) {
  newLi[i].onclick = function () {
    currentSlide = this.getAttribute("data-index");
    theChecker();
  };
}

//trigger the checker function
theChecker();

//next slide function
function nextslide() {
  if (nextButton.classList.contains("disabeld")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
//perv slide function

function pervslide() {
  if (pervButton.classList.contains("disabeld")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
//create the checker function
function theChecker() {
  //remove active classes
  removeAllActive();

  //set the slide number
  slideNumberElement.textContent =
    "Slide # " + currentSlide + " of " + slidesCount;

  //set active class on the current slide
  sliderImages[currentSlide - 1].classList.add("active");

  //set active class on the current ul
  newUl.children[currentSlide - 1].classList.add("active");

  //check if the current slide is the first
  if (currentSlide == 1) {
    //add class disabled
    pervButton.classList.add("disabeld");
  } else {
    //remove class disabled
    pervButton.classList.remove("disabeld");
  }

  //check if the current slide is the last
  if (currentSlide == slidesCount) {
    //add class disabled
    nextButton.classList.add("disabeld");
  } else {
    //remove class disabled
    nextButton.classList.remove("disabeld");
  }
}

// remove active class from images and li
function removeAllActive() {
  //loop through images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  //loop through bullets
  newLi.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}

//end slider
