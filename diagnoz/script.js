const accordionHeaders = document.querySelectorAll(".accordeon-header");
const accordionContents = document.querySelectorAll(".accordeon-content");
const accordeonTitle = document.querySelectorAll(".accordeon-title");

const btnArrowUp = document.querySelector(".btn-arrow-up");

btnArrowUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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

document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll("[data-modal-btn]");
  const closeButtons = document.querySelectorAll(".close_modal_window");
  const modals = document.querySelectorAll(".modal");

  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modalBtn;
      const modal = document.querySelector(`[data-modal-window="${modalId}"]`);

      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");

      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
