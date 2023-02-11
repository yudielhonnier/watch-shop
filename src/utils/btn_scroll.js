const d = document,
  w = window;

export default function scrollTopBtn(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener('scroll', (e) => {
    if (e) {
      let scrollTop = w.scrollY || d.documentElement.scrolltop;

      if (scrollTop > 600) {
        $scrollBtn.classList.remove('hidden');
      } else {
        $scrollBtn.classList.add('hidden');
      }
    }
    // console.log(w.scrollY);
  });
  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  });
}
