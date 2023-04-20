console.log("Service worker running!!!");

let staticCache = "APP2_CACHE";
let imgCache = "IMG_CACHE";

let assets = ['/', '/serviceworker.html', 'css/style.css', 'js/app.js'];

self.addEventListener("install", (evt) => {
    console.log("installed!!!");
    evt.waitUntil(
        caches.open(staticCache).then(cache => {
            cache.addAll(assets).then(() => {
                console.log("Cache Updated!!!");
            })
        })
    )
});

self.addEventListener("activate", (evt) => {
    console.log("activate!!!");
});

self.addEventListener("fetch", (evt) => {
    console.log("fetch!!!", evt.request);
    evt.respondWith(
        caches.match(evt.request).then(function(response) {
            if(response) {
                console.log("found response in cache ", response)
                return response;
            } 
            console.log("No response found in cache!!!");
            return fetch(evt.request).then(function(response) {
                return response; 
            })
        })
    );
});
self.addEventListener("message", (evt) => {
    console.log("message!!!");
});