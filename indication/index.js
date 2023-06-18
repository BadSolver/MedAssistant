const openModalBtns = document.querySelectorAll('.modal-open-btn');
const closeModalBtn = document.querySelector('.close_modal_window');
const modal = document.querySelector('.modal');

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});