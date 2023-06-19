const btnArrowUp = document.querySelector(".btn-arrow-up");

btnArrowUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
