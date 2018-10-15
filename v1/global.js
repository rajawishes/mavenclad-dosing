(function() {
  // ServiceWorker is a progressive technology. Ignore unsupported browsers
  if ('serviceWorker' in navigator) {
    alert('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('service-worker.js').then(function() {
      alert('CLIENT: service worker registration complete.');
    }, function() {
      alert('CLIENT: service worker registration failure.');
    });
  } else {
    alert('CLIENT: service worker is not supported.');
  }

})();
