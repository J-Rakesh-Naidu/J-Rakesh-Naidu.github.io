document.addEventListener("DOMContentLoaded", function(event) {
    var navbar = document.querySelector(".navbar");
    var navlinks = document.querySelector(".nav-links");
    navbar.addEventListener("click", function() {
      navbar.classList.toggle("clicked");
      navlinks.classList.toggle("open");
    });
});

var currentIndex = 1;
      
      //Show current image
      showSlides(currentIndex);
      
      //Function to move Next
      function plusSlides(n) {
         showSlides(currentIndex += n);
      }
      
      //Function to move back
      function currentSlide(n) {
         showSlides(currentIndex = n);
      }
      
      
      //Initiate moving of slides
      function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("images");
         if (n > slides.length) {currentIndex = 1}
         if (n < 1) {currentIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         slides[currentIndex-1].style.display = "block";
      }