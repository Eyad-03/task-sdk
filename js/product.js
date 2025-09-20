const modal = document.getElementById('productModal');
const closeBtn = modal.querySelector('.modal-close');


const openButtons = document.querySelectorAll('.openModal');

openButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  });
});

closeBtn.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    modal.setAttribute('aria-hidden', 'true');
  }
});
