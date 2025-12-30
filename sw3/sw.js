const CACHE_NAME = 'pwa-coba-v1';

// Kosongkan dulu daftar aset agar tidak error saat fetch
const ASSETS_TO_CACHE = [
  '/',
  'index.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Menggunakan addAll bisa gagal jika satu file saja tidak ada
      // Jadi kita pakai cara yang lebih aman
      return cache.addAll(ASSETS_TO_CACHE).catch(err => console.log("Gagal caching:", err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});