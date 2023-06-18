const openModalBtns = document.querySelectorAll(".modal-open-btn");
const closeModalBtn = document.querySelector(".close_modal_window");
const modalMistake = document.querySelector(
  '[data-modal-window="moduleMistake"]'
);

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalMistake.style.display = "block";
  });
});

closeModalBtn.addEventListener("click", () => {
  modalMistake.style.display = "none";
});

modalMistake.addEventListener("click", (event) => {
  if (event.target === modalMistake) {
    modalMistake.style.display = "none";
  }
});
