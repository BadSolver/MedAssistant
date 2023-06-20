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

// Accordion
const accordionHeaders = document.querySelectorAll(".accordeon-header");
const accordionContents = document.querySelectorAll(".accordeon-content");

accordionHeaders.forEach((accordionHeader, index) => {
  accordionHeader.addEventListener("click", function () {
    accordionContents[index].classList.toggle("active");
    accordionHeader.classList.toggle("active");
    const accordionIcon = accordionHeader.querySelector(".accordeon-minus img");
    accordionIcon.src = accordionContents[index].classList.contains("active")
      ? "../images/accordeon-minus.svg"
      : "../images/accordeon-plus.svg";
  });
});

// Modal windows
const openModalAuthBtns = document.querySelectorAll(".modal-open-btn");
const closeModalBtns = document.querySelectorAll(".close_modal_window");
const modalContainers = document.querySelectorAll(".modal");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalTarget = btn.getAttribute("data-modal-target");
    const modal = document.querySelector(
      `[data-modal-window="${modalTarget}"]`
    );
    modal.style.display = "block";

    if (modalTarget === "moduleSignUp") {
      const loginModal = document.querySelector(
        '[data-modal-window="moduleLogIn"]'
      );
      closeModal(loginModal);
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

const openModalQuestionBtn = document.querySelector(
  "[data-modal-btn='moduleQuestion']"
);
const modalWindow = document.querySelector(
  "[data-modal-window='moduleQuestion']"
);

openModalQuestionBtn.addEventListener("click", function () {
  openModal(modalWindow);
});

closeModalOnOutsideClick(modalWindow);
