let overlay = document.querySelector(".galleryOverlay"); 
let imagebox = document.querySelector(".imgbox");
let img = document.querySelector(".imgbox img"); 
let closeBtn = document.querySelector(".imgbox span"); 
let boxes = document.querySelectorAll(".box"); 

boxes.forEach(box => {
    box.addEventListener("click", () => {
        let currentImagePath = box.getAttribute("data-src"); 
        img.src = currentImagePath; 
        overlay.classList.add('galleryOverlayShow');
        imagebox.classList.add('imgboxShow');
    });
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove('galleryOverlayShow');
    imagebox.classList.remove('imgboxShow');
});

overlay.addEventListener("click", () => {
    overlay.classList.remove('galleryOverlayShow');
    imagebox.classList.remove('imgboxShow');
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});