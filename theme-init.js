(function () {
  let saved;
  try { saved = localStorage.getItem('ting-xiao-theme'); } catch (_) {}
  const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = saved === 'light' || saved === 'dark' ? saved : (preferredDark ? 'dark' : 'light');
})();
