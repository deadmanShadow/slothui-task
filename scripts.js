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
