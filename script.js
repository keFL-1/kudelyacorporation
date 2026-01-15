// Основной скрипт лендинга SecureCheck

// Устанавливаем актуальный год в подвале
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// Плавный скролл для кнопок с атрибутом data-scroll
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = btn.getAttribute("data-scroll");
    if (!target) return;
    const section = document.querySelector(target);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Бургер-меню и мобильная навигация
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    nav.classList.toggle("nav--open");
  });

  // Закрытие меню по клику на пункт
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("burger--active");
      nav.classList.remove("nav--open");
    });
  });
}

// Анимация появления блоков при скролле
const animatedEls = document.querySelectorAll(".fade-in, .fade-in-up, .app-card");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: если IntersectionObserver недоступен, показать всё сразу
  animatedEls.forEach((el) => el.classList.add("is-visible"));
}


