// Array of background image URLs

const images = [
  "images/banner-8 new.jpg",
  "images/banner-7.jpg",
  "images/banner-6.jpg",
  "images/banner-5.jpg",
  "images/banner-4.jpg",
  "images/banner-3.jpg",
  "images/banner-2.jpg",
  "images/banner-1.jpg"
];

let currentIndex = 0;
const header = document.querySelector("header"); // select the header element

function changeBackground() {
  header.style.backgroundImage = `url('${images[currentIndex]}')`;
  header.style.backgroundSize = "cover";
  header.style.backgroundPosition = "center";
  header.style.transition = "background-image 1s ease-in-out";

  currentIndex = (currentIndex + 1) % images.length;
}

changeBackground(); // show the first image immediately
setInterval(changeBackground, 4000); // change every 4 seconds
