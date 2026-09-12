// 导航：滚过英雄区后切换为「纸砂底 + 深色字」，并加分隔线
const nav = document.getElementById('nav');
const onScroll = () => {
  const threshold = Math.min(window.innerHeight * 0.72, 560);
  nav.classList.toggle('is-scrolled', window.scrollY > threshold);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });

// 移动端菜单
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav__links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  document.body.classList.remove('menu-open');
}));

// 滚动渐显
const items = document.querySelectorAll('.section, .stat, .card, .tl, .ccard');
items.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
items.forEach(el => io.observe(el));
