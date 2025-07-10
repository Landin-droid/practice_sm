document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMobileMenuButton = document.getElementById("close-mobile-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const mobileMenuPanel = document.getElementById("mobile-menu-panel");

  // Открытие мобильного меню
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenuOverlay.classList.add("open");
      mobileMenuPanel.classList.add("open");
    }, 10);
    document.body.style.overflow = "hidden";
  });

  // Закрытие мобильного меню
  function closeMenu() {
    mobileMenuOverlay.classList.remove("open");
    mobileMenuPanel.classList.remove("open");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300); // Должно совпадать с duration анимации
  }

  closeMobileMenuButton.addEventListener("click", closeMenu);

  // Закрытие при клике на оверлей
  mobileMenuOverlay.addEventListener("click", closeMenu);

  // Закрытие при клике на ссылку в меню
  const mobileMenuLinks = mobileMenuPanel.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показать/скрыть кнопку при прокрутке
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    // Показать, если прокручено более 150px
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

// Плавная прокрутка наверх при клике
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});