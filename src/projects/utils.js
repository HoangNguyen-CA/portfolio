export const openNewPage = (url) => {
  if (!url) return;
  window.open(url, '_blank');
};
