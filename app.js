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

const revealTargets = document.querySelectorAll('.hero__layout, .panel, .card, .initiative, .cta, .footer');

if ('IntersectionObserver' in window && revealTargets.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach((element) => {
    element.classList.add('is-visible');
  });
}
