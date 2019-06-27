const mainNavLinks = document.querySelectorAll("nav div ul li a");

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop < fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});