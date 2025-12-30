// sw.js
self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Tutup notifikasi saat diklik
    
    // Buka website kembali atau fokus ke tab yang ada
    event.waitUntil(
        clients.openWindow('https://google.com')
    );
});