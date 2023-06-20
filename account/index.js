// Функция открытия модального окна
function openModal(modal) {
  modal.style.display = "block";
}

// Функция закрытия модального окна
function closeModal(modal) {
  modal.style.display = "none";
}

// Функция закрытия модальных окон по клику вне модального окна
function closeModalOnOutsideClick(modal) {
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}

// Modal window question
const openModalQuestionBtns = document.querySelectorAll(
  "[data-modal-btn='moduleQuestion']"
);
const modalQuestions = document.querySelectorAll(
  "[data-modal-window='moduleQuestion']"
);

openModalQuestionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalQuestions.forEach((modal) => {
      openModal(modal);
    });
  });
});

const closeModalBtns = document.querySelectorAll(".close_modal_window");
const modalContainers = document.querySelectorAll(".modal");

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    closeModal(modal);
  });
});

modalContainers.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});
