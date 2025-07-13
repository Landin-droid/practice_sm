document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMobileMenuButton = document.getElementById("close-mobile-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const mobileMenuPanel = document.getElementById("mobile-menu-panel");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenuOverlay.classList.add("open");
      mobileMenuPanel.classList.add("open");
    }, 10);
    document.body.style.overflow = "hidden";
  });

  function closeMenu() {
    mobileMenuOverlay.classList.remove("open");
    mobileMenuPanel.classList.remove("open");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
  }

  closeMobileMenuButton.addEventListener("click", closeMenu);
  mobileMenuOverlay.addEventListener("click", closeMenu);

  const mobileMenuLinks = mobileMenuPanel.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});