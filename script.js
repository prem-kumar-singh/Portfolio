
const menu = document.getElementById("menu");
const links = document.getElementById("links");

// Mobile menu
menu.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");

  menu.setAttribute("aria-expanded", String(isOpen));
  menu.textContent = isOpen ? "×" : "☰";
});

// Close menu after selecting a section
links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "☰";
  });
});

// Current copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Scroll reveal animations
const elements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
} else {
  elements.forEach((element) => element.classList.add("show"));
}
