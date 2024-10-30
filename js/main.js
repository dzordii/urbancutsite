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
  "header,.feature-box,.feature-menu-box,.item-box,.m-item-box,.t-box,.newsletter",
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
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');

let currentIndex = Math.floor(slides.length / 2);
let isDragging = false;
let startX, currentX;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width + 10; // incluindo o gap de 10px
  const offset = currentIndex - Math.floor(slides.length / 2);
  track.style.transform = `translateX(-${offset * slideWidth}px)`;

  // Marca a imagem central e adiciona a classe 'center'
  slides.forEach((slide, index) => {
    slide.classList.toggle('center', index === currentIndex);
  });

  // Desativa o botão "anterior" se estiver no primeiro slide
  prevButton.disabled = currentIndex === 0;

  // Desativa o botão "próximo" se estiver no último slide
  nextButton.disabled = currentIndex === slides.length - 1;
}

// Botão "próximo"
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1;
    updateSlidePosition();
  }
});

// Botão "anterior"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateSlidePosition();
  }
});

// Habilitar arrastar para navegar no mobile
slides.forEach((slide) => {
  slide.addEventListener('mousedown', startDragging);
  slide.addEventListener('mouseup', stopDragging);
  slide.addEventListener('mouseleave', stopDragging);
  slide.addEventListener('touchstart', startDragging);
  slide.addEventListener('touchend', stopDragging);
  slide.addEventListener('touchmove', drag);
});

function startDragging(event) {
  isDragging = true;
  startX = event.type === 'mousedown' ? event.pageX : event.touches[0].pageX;
  currentX = startX;
}

function stopDragging() {
  isDragging = false;
}

function drag(event) {
  if (!isDragging) return;

  const x = event.type === 'mousemove' ? event.pageX : event.touches[0].pageX;
  const distance = x - currentX;

  // Desliza para a esquerda ou direita
  if (distance > 50) { // Ajuste o valor 50 conforme necessário para sensibilidade
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlidePosition();
    }
    currentX = x; // Reseta a posição inicial para o próximo movimento
  } else if (distance < -50) {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      updateSlidePosition();
    }
    currentX = x; // Reseta a posição inicial para o próximo movimento
  }
}

// Ajusta a posição do slide central ao redimensionar a janela
window.addEventListener('resize', updateSlidePosition);
updateSlidePosition();

