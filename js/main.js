// Menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

// Close Menu On Scroll
window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};

// Scrolled
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50); // Ajuste o valor conforme necessário
});

// ScrollReveal
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "1500",
  delay: "100",
});

animate.reveal(".home-text", { origin: "left" });
animate.reveal(".home-img", { origin: "bottom" });
animate.reveal(".heading,.newsletter h2", { origin: "top" });
animate.reveal(
  "header,.feature-box,.feature-menu-box,.item-box,.m-item-box,.t-box,.newsletter, .services-section, .menu-container, .services-title ",
  {
    interval: 100,
  }
);

// Função para abrir o WhatsApp ao clicar no pop-up
document.getElementById("whatsappPopup").onclick = function () {
  window.open("https://wa.me/555196100769", "_blank");
};

// 
// 
// 
// 
//
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img") [0]
arrowIcons = document.querySelectorAll(".wrapper i")

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    setTimeout(() => showHideIcons(), 60) 
  })
})

const autoSlide = () => {
  positionDiff = Math.abs(positionDiff)
}

const dragStart = (e) => {
  isDragStart = true
  prevPageX = e.pageX || e.touches[0].pageX
  prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if(!isDragStart) return
  e.preventDefault()
  carousel.classList.add("dragging")
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
  carousel.scrollLeft = prevScrollLeft - positionDiff
  showHideIcons()
}

const dragStop = () => {
  isDragStart = false
  carousel.classList.remove("dragging")
  autoSlide()
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("touchstart", dragStart)

carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("touchmove", dragging)

carousel.addEventListener("mouseup", dragStop)
carousel.addEventListener("mouseleave", dragStop)
carousel.addEventListener("touchend", dragStop)