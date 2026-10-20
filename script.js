// Fade sections in as they scroll into view. Without this script (or without
// IntersectionObserver) everything simply stays visible.
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
