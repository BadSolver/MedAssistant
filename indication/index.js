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

// Scroll to top
const btnArrowUp = document.querySelector(".btn-arrow-up");

btnArrowUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

<<<<<<< Updated upstream
const openModalBtns = document.querySelectorAll(".modal-open-btn");
=======
// Modal windows
const openModalAuthBtns = document.querySelectorAll(".modal-open-btn");
>>>>>>> Stashed changes
const closeModalBtns = document.querySelectorAll(".close_modal_window");
const modalContainers = document.querySelectorAll(".modal");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalTarget = btn.getAttribute("data-modal-target");
<<<<<<< Updated upstream
    const modal = document.querySelector(`[data-modal-window="${modalTarget}"]`);
    modal.style.display = "block";

    if (modalTarget === "moduleSignUp") {
      const loginModal = document.querySelector('[data-modal-window="moduleLogIn"]');
      loginModal.style.display = "none";
=======
    const modal = document.querySelector(
      `[data-modal-window="${modalTarget}"]`
    );
    modal.style.display = "block";

    if (modalTarget === "moduleSignUp") {
      const loginModal = document.querySelector(
        '[data-modal-window="moduleLogIn"]'
      );
      closeModal(loginModal);
>>>>>>> Stashed changes
    }
  });
});

<<<<<<< Updated upstream
=======
const loginLink = document.querySelector(
  '[data-modal-window="moduleSignUp"] .main__link a'
);
loginLink.addEventListener("click", () => {
  const signUpModal = document.querySelector(
    '[data-modal-window="moduleSignUp"]'
  );
  const loginModal = document.querySelector(
    '[data-modal-window="moduleLogIn"]'
  );

  closeModal(signUpModal);
  openModal(loginModal);
});

const forgotPasswordLink = document.querySelector(
  '[data-modal-window="moduleLogIn"] .main__link a'
);
forgotPasswordLink.addEventListener("click", () => {
  const openModals = document.querySelectorAll(".modal");
  const passwordModal = document.querySelector(
    '[data-modal-window="modulePassword"]'
  );

  openModals.forEach((modal) => {
    closeModal(modal);
  });

  openModal(passwordModal);
});

>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
const loginLink = document.querySelector('[data-modal-window="moduleSignUp"] .main__link a');
loginLink.addEventListener("click", () => {
  const signUpModal = document.querySelector('[data-modal-window="moduleSignUp"]');
  signUpModal.style.display = "none";

  const loginModal = document.querySelector('[data-modal-window="moduleLogIn"]');
  loginModal.style.display = "block";
});

const forgotPasswordLink = document.querySelector('[data-modal-window="moduleLogIn"] .main__link a');
forgotPasswordLink.addEventListener("click", () => {
  const openModals = document.querySelectorAll('.modal');
  openModals.forEach((modal) => {
    modal.style.display = 'none';
=======
const openModalQuestionBtn = document.querySelector(
  "[data-modal-btn='moduleQuestion']"
);
const modalWindowQuestion = document.querySelector(
  "[data-modal-window='moduleQuestion']"
);

openModalQuestionBtn.addEventListener("click", function () {
  openModal(modalWindowQuestion);
});

closeModalOnOutsideClick(modalWindowQuestion);

const openModalLvlBtns = document.querySelectorAll(
  "[data-modal-btn='moduleLvl']"
);
const modalWindowLvl = document.querySelectorAll(
  "[data-modal-window='moduleLvl']"
);

openModalLvlBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWindowLvl.forEach((modal) => {
      openModal(modal);
    });
>>>>>>> Stashed changes
  });

  const passwordModal = document.querySelector('[data-modal-window="modulePassword"]');
  passwordModal.style.display = 'block';
});
