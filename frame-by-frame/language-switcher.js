document.querySelectorAll('.language-switcher').forEach((switcher) => {
  const trigger = switcher.querySelector('.language-trigger');
  const options = switcher.querySelector('.language-options');

  const close = (returnFocus = false) => {
    options.hidden = true;
    switcher.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    if (returnFocus) trigger.focus();
  };

  trigger.addEventListener('click', () => {
    const willOpen = options.hidden;
    document.querySelectorAll('.language-switcher.open').forEach((other) => {
      if (other !== switcher) other.querySelector('.language-trigger').click();
    });
    options.hidden = !willOpen;
    switcher.classList.toggle('open', willOpen);
    trigger.setAttribute('aria-expanded', String(willOpen));
    if (willOpen) options.querySelector('[aria-current="true"]')?.focus();
  });

  switcher.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close(true);
  });

  document.addEventListener('click', (event) => {
    if (!switcher.contains(event.target)) close();
  });
});
