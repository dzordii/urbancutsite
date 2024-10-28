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
window.addEventListener("scroll", function() {
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
  document.getElementById("whatsappPopup").onclick = function() {
    window.open("https://wa.me/555196100769", "_blank");
  };
