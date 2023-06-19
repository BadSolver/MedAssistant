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

const openModalBtns = document.querySelectorAll(".modal-open-btn");
const closeModalBtns = document.querySelectorAll(".close_modal_window");
const modalContainers = document.querySelectorAll(".modal");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalTarget = btn.getAttribute("data-modal-target");
    const modal = document.querySelector(`[data-modal-window="${modalTarget}"]`);
    modal.style.display = "block";

    if (modalTarget === "moduleSignUp") {
      const loginModal = document.querySelector('[data-modal-window="moduleLogIn"]');
      loginModal.style.display = "none";
    }
  });
});

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
  });
});

modalContainers.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

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
  });

  const passwordModal = document.querySelector('[data-modal-window="modulePassword"]');
  passwordModal.style.display = 'block';
});