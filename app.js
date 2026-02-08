const form = document.querySelector('.cta__form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (!button) {
      return;
    }

    button.textContent = 'Signal Sent';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Send Signal';
      button.disabled = false;
      form.reset();
    }, 2200);
  });
}
