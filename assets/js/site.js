function copyCode(button) {
  const target = document.getElementById(button.dataset.copyTarget);
  if (!target) return;

  navigator.clipboard.writeText(target.innerText).then(() => {
    const previous = button.textContent;
    button.textContent = "Copied!";
    setTimeout(() => {
      button.textContent = previous;
    }, 1600);
  });
}

function updateThemeButton() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  const dark = document.documentElement.dataset.theme === "dark";
  button.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
  button.setAttribute(
    "title",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );

  const label = button.querySelector(".theme-toggle-label");
  if (label) {
    label.textContent = dark ? "Light mode" : "Dark mode";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    updateThemeButton();

    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme;
      const next = current === "dark" ? "light" : "dark";

      document.documentElement.dataset.theme = next;
      localStorage.setItem("robomaze-theme", next);
      updateThemeButton();
    });
  }
});
