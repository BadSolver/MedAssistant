const accordionHeaders = document.querySelectorAll(".accordeon-header");
const accordionContents = document.querySelectorAll(".accordeon-content");
const accordeonTitle = document.querySelectorAll(".accordeon-title");
console.log(accordeonTitle);

accordionHeaders.forEach((accordionHeader, index) => {
  accordionHeader.addEventListener("click", function () {
    accordionContents[index].classList.toggle("active");
    accordionHeader.classList.toggle("active");
    accordeonTitle[index].classList.toggle("active");
    const accordionIcon = accordionHeader.querySelector(".accordeon-minus img");
    accordionContents[index].classList.contains("active")
      ? (accordionIcon.src = "../images/accordeon-minus.svg")
      : (accordionIcon.src = "../images/accordeon-plus-white.svg");
  });
});
