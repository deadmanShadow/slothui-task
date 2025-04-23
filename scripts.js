document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const all = document.querySelectorAll(".faq-item");
    all.forEach((faq) => {
      if (faq !== item) faq.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const third = document.querySelectorAll(".faq-item")[2];
  third.classList.add("active");
});
document.querySelector(".scroll-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const topButton = document.getElementById("topBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};
topButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
document.querySelector(".load-more-btn").addEventListener("click", function () {
  const hiddenCards = document.querySelectorAll(
    ".testimonial-grid .testimonial-card:nth-child(n+5)"
  );

  hiddenCards.forEach((card) => {
    card.style.display = "block";
  });
  this.style.display = "none";
});
