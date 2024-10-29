document.addEventListener('DOMContentLoaded', () => {
  const { createElement } = React;
  const { createRoot } = ReactDOM;

  document.body.innerHTML = '<div id="app"></div>';

  const root = createRoot(document.getElementById('app'));
  root.render(createElement('h1', {}, 'Goodbye, World'));
});
