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

document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll("[data-modal-btn]");
  const closeButtons = document.querySelectorAll(".close_modal_window");
  const modals = document.querySelectorAll(".modal");

  modalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modalBtn;
      const modal = document.querySelector(`[data-modal-window="${modalId}"]`);

      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");

      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});