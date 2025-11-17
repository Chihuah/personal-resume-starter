(() => {
  const btn = document.getElementById('themeToggle');
  const apply = (mode) => document.documentElement.setAttribute('data-theme', mode);
  const get = () => localStorage.getItem('theme') || 'light';
  const set = (v) => localStorage.setItem('theme', v);

  let mode = get();
  apply(mode);
  btn?.addEventListener('click', () => {
    mode = (mode === 'light') ? 'dark' : 'light';
    set(mode); apply(mode);
  });

  // TODO: 交給學生：Intersection Observer / AOS 初始化（可選）
})();
