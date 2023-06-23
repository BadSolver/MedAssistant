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
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
};

//scroll to top
const btnArrowUp = document.querySelector(".btn-arrow-up");

if (btnArrowUp !== null) {
  btnArrowUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Modal share

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

// modal indication

const openModalLvlBtn = document.querySelectorAll(
  "[data-modal-btn='moduleLvl']"
);
const modalWindowLvl = document.querySelectorAll(
  "[data-modal-window='moduleLvl']"
);

openModalLvlBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(123);
    modalWindowLvl.forEach((modal) => {
      modal.style.display = "block";
    });
  });
});

let lastScrollPosition = window.scrollY;

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

// accordeon
const accordionHeaders = document.querySelectorAll(".accordeon-header");
const accordionContents = document.querySelectorAll(".accordeon-content");
const accordeonTitle = document.querySelectorAll(".accordeon-title");

accordionHeaders.forEach((accordionHeader, index) => {
  accordionHeader.addEventListener("click", () => {
    accordionContents[index].classList.toggle("active");
    accordionHeader.classList.toggle("active");
    accordeonTitle[index].classList.toggle("active");
    const accordionIcon = accordionHeader.querySelector(".accordeon-minus img");
    accordionIcon.src = accordionContents[index].classList.contains("active")
      ? "../images/accordeon-minus.svg"
      : "../images/accordeon-plus-white.svg";
  });
});

// accordeon main template
const accordionMTHeaders = document.querySelectorAll(".mt__accordeon-header");
const accordionMTContents = document.querySelectorAll(".mt__accordeon-content");
const accordionMTIcons = document.querySelectorAll(".mt__accordeon-minus img");

accordionMTHeaders.forEach((accordionHeader, index) => {
  accordionHeader.addEventListener("click", () => {
    accordionMTContents[index].classList.toggle("active");
    accordionHeader.classList.toggle("active");
    const accordionIcon = accordionMTIcons[index];

    accordionMTContents[index].classList.contains("active")
      ? (accordionIcon.src = "../images/accordeon-minus.svg")
      : (accordionIcon.src = "../images/accordeon-plus.svg");
  });
});

// Modal auth
const openModalAuthBtns = document.querySelectorAll(".modal-open-btn");
const closeModalBtns = document.querySelectorAll(".close_modal_window");
const modalContainers = document.querySelectorAll(".modal");

openModalAuthBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const modalTarget = btn.getAttribute("data-modal-target");
    const modal = document.querySelector(
      `[data-modal-window="${modalTarget}"]`
    );

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
if (loginLink) {
  loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    const signUpModal = document.querySelector(
      '[data-modal-window="moduleSignUp"]'
    );
    signUpModal.style.display = "none";
    const loginModal = document.querySelector(
      '[data-modal-window="moduleLogIn"]'
    );
    loginModal.style.display = "block";
  });
}

const forgotPasswordLink = document.querySelector(
  '[data-modal-window="moduleLogIn"] .main__link a'
);
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", (event) => {
    event.preventDefault();
    const openModals = document.querySelectorAll(".modal");
    openModals.forEach((modal) => {
      modal.style.display = "none";
    });

    const passwordModal = document.querySelector(
      '[data-modal-window="modulePassword"]'
    );
    passwordModal.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll("[data-modal-btn]");
  const closeButtons = document.querySelectorAll(".close_modal_window");
  const modals = document.querySelectorAll(".modal");

  modalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
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
