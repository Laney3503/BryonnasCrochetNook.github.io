//////////////////////////////
// Logo Animation Script //
//////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('img[alt="Logo"]');
  if (!logo) return;

  // smooth transforms
  logo.style.transition = 'transform 300ms cubic-bezier(.2,.8,.2,1), box-shadow 300ms';
  logo.style.transformOrigin = 'center center';
  logo.style.willChange = 'transform';

  // entry "pop" animation
  logo.style.transform = 'scale(0.95)';
  setTimeout(() => {
    logo.style.transform = 'scale(1.12)';
    logo.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
    setTimeout(() => {
      logo.style.transform = 'scale(1)';
      logo.style.boxShadow = '0 6px 18px rgba(0,0,0,0.15)';
    }, 260);
  }, 120);

  // hover/touch interactions
  logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'scale(1.06)';
    logo.style.boxShadow = '0 14px 36px rgba(0,0,0,0.28)';
  });
  logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
    logo.style.boxShadow = '0 6px 18px rgba(0,0,0,0.15)';
  });

  // quick press/tap feedback
  logo.addEventListener('pointerdown', () => {
    logo.style.transition = 'transform 120ms';
    logo.style.transform = 'scale(0.9)';
  });
  logo.addEventListener('pointerup', () => {
    logo.style.transition = 'transform 240ms cubic-bezier(.2,.8,.2,1)';
    logo.style.transform = 'scale(1.06)';
    setTimeout(() => (logo.style.transform = 'scale(1)'), 180);
  });
});
//////////////////////////////////////
// End Logo Animation Script //
//////////////////////////////////////

