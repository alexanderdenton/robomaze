function copyCode(button) {
  const codeBlock = button.closest(".code-wrap")?.querySelector("code");

  if (!codeBlock) {
    console.error("Could not find code block to copy.");
    return;
  }

  navigator.clipboard.writeText(codeBlock.textContent).then(() => {
    const previousText = button.textContent;
    button.textContent = "Copied!";

    setTimeout(() => {
      button.textContent = previousText;
    }, 1600);
  }).catch((error) => {
    console.error("Could not copy code:", error);
    button.textContent = "Copy failed";

    setTimeout(() => {
      button.textContent = "Copy code";
    }, 1600);
  });
}

function updateThemeButton() {
  const button = document.querySelector(".theme-toggle");

  if (!button) {
    return;
  }

  const darkMode = document.documentElement.dataset.theme === "dark";

  button.setAttribute(
    "aria-label",
    darkMode ? "Switch to light mode" : "Switch to dark mode"
  );

  button.setAttribute(
    "title",
    darkMode ? "Switch to light mode" : "Switch to dark mode"
  );

  const label = button.querySelector(".theme-toggle-label");

  if (label) {
    label.textContent = darkMode ? "Light mode" : "Dark mode";
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
      const currentTheme = document.documentElement.dataset.theme;
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("robomaze-theme", nextTheme);

      updateThemeButton();
    });
  }
});