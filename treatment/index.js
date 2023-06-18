const btnArrowUp = document.querySelector(".btn-arrow-up");

btnArrowUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
    const modalButtons = document.querySelectorAll("[data-modal-btn]");
    const closeButtons = document.querySelectorAll(".close_modal_window");
  
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
  });