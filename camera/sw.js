const CACHE_NAME = "cosmizy-camera-v1";

const ASSETS = [
    "/camera/",
    "/camera/index.html",
    "/camera/manifest.json",
    "/camera/icon-192.png",
    "/camera/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
