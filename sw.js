const cacheName = 'grind-v1';
const assets = [
  '/Grind/',
  '/Grind/index.html',
  '/Grind/manifest.json',
  '/Grind/icona.png'
  // Aggiungi qui altri file (es. style.css) se ne hai
];

// Installa il Service Worker e salva i file in cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Gestisce le richieste: se non c'è rete, usa la cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
