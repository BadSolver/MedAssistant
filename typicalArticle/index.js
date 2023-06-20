// Функция открытия модального окна
const openModal = (modal) => {
  modal.style.display = "block";
};

// Функция закрытия модального окна
const closeModal = (modal) => {
  modal.style.display = "none";
};

// Функция закрытия модальных окон по клику вне модального окна
const closeModalOnOutsideClick = (modal) => {
  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
};

// Scroll to top
const btnArrowUp = document.querySelector(".btn-arrow-up");

btnArrowUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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

// Modal window authentication
const openModalAuthBtns = document.querySelectorAll(".modal-open-btn");
const closeModalBtns = document.querySelectorAll(".close_modal_window");
const modalContainers = document.querySelectorAll(".modal");

openModalAuthBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalTarget = btn.getAttribute("data-modal-target");
    const modal = document.querySelector(
      `[data-modal-window="${modalTarget}"]`
    );

    openModal(modal);

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

const openModalShare = document.querySelectorAll("[data-modal-btn='share']");
const shareModalWindow = document.querySelectorAll(
  "[data-modal-window='share']"
);
const closeShareModalBtn = document.querySelectorAll(
  "[data-modal-btn='close-share']"
);

openModalShare.forEach((btn) => {
  btn.addEventListener("click", () => {
    shareModalWindow.forEach((modalWindow) => {
      const btnRect = btn.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width - 280;
      const btnCenterY = btnRect.top + btnRect.height - 45;

      modalWindow.style.left = `${btnCenterX}px`;
      modalWindow.style.top = `${btnCenterY}px`;
      modalWindow.style.display = "block";
      modalWindow.style.backgroundColor = "transparent";
    });
  });
});

closeShareModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    shareModalWindow.forEach((modal) => {
      closeModal(modal);
    });
  });
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

const lastScrollPosition = window.scrollY;

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    closeModal(modal);
  });
});

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition !== lastScrollPosition) {
    const openModals = document.querySelectorAll("[data-modal-window='share']");
    openModals.forEach((modal) => {
      closeModal(modal);
    });
  }

  lastScrollPosition = currentScrollPosition;
});
