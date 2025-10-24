// index Image switch
// Make a fadeing image function, where it shows Walter White and plays the intro guitar-twang
const indexImages = document.querySelector("img");

indexImages.addEventListener("click", () => {
  const indexSrc = indexImages.getAttribute("src");
  if (indexSrc === "images/ndavis.jpeg") {
    indexImages.setAttribute("src", "images/apa_colors.png");
  } else {
    indexImages.setAttribute("src", "images/ndavis.jpeg");
  }
}); 
