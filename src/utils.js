export const openNewPage = (url) => (e) => {
  if (!url) return;
  window.open(url, '_blank');
};
