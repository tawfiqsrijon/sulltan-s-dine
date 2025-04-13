function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Hero banner

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

var carousel = document.querySelector("[data-carousel]");
var slides = document.getElementsByClassName("carousel-cell");
var flkty = new Flickity(carousel, options);

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});

// Show button when scrolling down
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
