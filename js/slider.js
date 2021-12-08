let slider = document.getElementById("about");
  var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.querySelector(".dot");
  console.log(slides.length)
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
  // dots[slideIndex-1].style.display = "flex";
}

function changeWeb(n){
  console.log(n)
  var slides = document.getElementsByClassName("mySlides");
  slideIndex=(n);
for(let i =0; i<slides.length; i++){
  if(i==(slideIndex-1)){
    slides[i].style.display='flex';
  }else{
    slides[i].style.display='none';
  }
}
}