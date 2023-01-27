self.addEventListener("install", event => {
    console.log("Service Worker installing ...");
    //self.skipWaiting();
    event.waitUntil(
        caches.open("static-cache-v1").then(cache => cache.addAll([
        "./images/banner.png",
        "./",
        "./index.html",
        "./favicon.ico",
        "./style.css",
        "./script.js",
        "./movies.json",
        "./manifest.json",
        "./about.html",
        "./contact.html",
        "./review.html",
        "./submit.html",
        "./submitted.html",
        "./bootstrap-5.0.2-dist/css/bootstrap.min.css",
        "/bootstrap-icons-1.5.0/bootstrap-icons.css",
        "./bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js",
        "./bootstrap-icons-1.5.0/fonts/bootstrap-icons.woff2"
        ]))
        .then(self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker activating ...");
    event.waitUntil(caches.keys()
        .then(keys => {
            return Promise.all(
                keys.filter(key => {
                    return !key.startsWith("static-cache");  
                }).map(key => { 
                return caches.delete(key);
                })
            );
        }))
});

self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request, {ignoreSearch: true}).then(response => {
        return response || fetch(event.request);
    }));
});
