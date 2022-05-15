const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    remoeveActiveClasses();
    panel.classList.add("active");
  });
});

function remoeveActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
