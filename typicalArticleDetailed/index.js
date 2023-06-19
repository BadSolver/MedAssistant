const btnArrowUp = document.querySelector(".btn-arrow-up");

btnArrowUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let name = btns[i].getAttribute("data-modal-btn");
    let modal = document.querySelector("[data-modal-window='" + name + "']");
    modal.style.display = "block";
    let close = modal.querySelector(".close_modal_window");
    close.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
}

window.onclick = function (event) {
  if (event.target.hasAttribute("data-modal-window")) {
    let modals = document.querySelectorAll("*[data-modal-window]");
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
};

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

const writeButton = document.querySelector('.write-btn');
const questionModal = document.querySelector('[data-modal-window="moduleQuestion"]');
const closeQuestionModal = questionModal.querySelector('.close_modal_window');

writeButton.addEventListener('click', () => {
  questionModal.style.display = 'block';
});

closeQuestionModal.addEventListener('click', () => {
  questionModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === questionModal) {
    questionModal.style.display = 'none';
  }
});





