//Images to appear when scrolled
window.addEventListener("scroll", function () {
  var images = document.querySelectorAll(".float-img");
  var screenHeight = window.innerHeight;

  images.forEach(function (image) {
    var imgPosition = image.getBoundingClientRect().top;

    if (imgPosition < screenHeight) {
      image.classList.add("fade-in");
    }
  });
});
