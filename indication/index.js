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

const openModalAuthBtns = document.querySelectorAll(".modal-open-btn");
const closeModalBtns = document.querySelectorAll(".close_modal_window");
const modalContainers = document.querySelectorAll(".modal");

openModalAuthBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalTarget = btn.getAttribute("data-modal-target");
    const modal = document.querySelector(
      `[data-modal-window="${modalTarget}"]`
    );
    console.log(modal);
    modal.style.display = "block";

    if (modalTarget === "moduleSignUp") {
      const loginModal = document.querySelector(
        '[data-modal-window="moduleLogIn"]'
      );
      loginModal.style.display = "none";
    }
  });
});

const loginLink = document.querySelector(
  '[data-modal-window="moduleSignUp"] .main__link a'
);
loginLink.addEventListener("click", () => {
  const signUpModal = document.querySelector(
    '[data-modal-window="moduleSignUp"]'
  );
  signUpModal.style.display = "none";

  const loginModal = document.querySelector(
    '[data-modal-window="moduleLogIn"]'
  );
  loginModal.style.display = "block";
});

const forgotPasswordLink = document.querySelector(
  '[data-modal-window="moduleLogIn"] .main__link a'
);
forgotPasswordLink.addEventListener("click", () => {
  const openModals = document.querySelectorAll(".modal");
  openModals.forEach((modal) => {
    modal.style.display = "none";
  });

  const passwordModal = document.querySelector(
    '[data-modal-window="modulePassword"]'
  );
  passwordModal.style.display = "block";
});


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

const openModalQustionBtn = document.querySelector(
  "[data-modal-btn='moduleQuestion']"
);
const modalWindow = document.querySelector(
  "[data-modal-window='moduleQuestion']"
);

openModalQustionBtn.addEventListener("click", function () {
  modalWindow.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === modalWindow) {
    modalWindow.style.display = "none";
  }
});

const openModalLvlBtn = document.querySelectorAll(
  "[data-modal-btn='moduleLvl']"
);
const modalWindowLvl = document.querySelectorAll(
  "[data-modal-window='moduleLvl']"
);

openModalLvlBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(123);
    modalWindowLvl.forEach((modal) => (modal.style.display = "block"));
  });
});


