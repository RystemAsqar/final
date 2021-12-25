


//   $('.slides').slick();

  
// $('.Slider').slick({
//     // setting-name: setting-value
//   });



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
  let slides = document.getElementsByClassName("Slider");
  console.log(slides.length)
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].style.display = "none";
  // }
  slides[slideIndex-1].style.display = "flex";
  // dots[slideIndex-1].style.display = "flex";
}

