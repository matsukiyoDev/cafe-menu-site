document.addEventListener('DOMContentLoaded', () => {
  const modalBg = document.getElementById('modalBg');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const confirmBtn = document.getElementById('confirmBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  let currentProduct = null;

  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
      openModal(card);
    }
  });

  document.body.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement.classList.contains('product-card')) {
      e.preventDefault();
      openModal(document.activeElement);
    }
  });

  function openModal(product) {
    const name = product.dataset.name;
    const desc = product.dataset.desc;
    const price = product.dataset.price;
    currentProduct = name;

    modalDesc.textContent = desc ? `${name} (${desc}) を注文しますか？` : `${name} を注文しますか？`;
    modalPrice.textContent = price;

    modalBg.style.display = 'flex';
    confirmBtn.focus();
  }

  function closeModal() {
    modalBg.style.display = 'none';
    currentProduct = null;
  }

  confirmBtn.addEventListener('click', () => {
    alert(`${currentProduct}を注文しました。ありがとうございます！`);
    closeModal();
  });

  cancelBtn.addEventListener('click', () => closeModal());

  modalBg.addEventListener('click', e => {
    if (e.target === modalBg) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalBg.style.display === 'flex') {
      closeModal();
    }
  });
});
