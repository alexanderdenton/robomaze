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

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
