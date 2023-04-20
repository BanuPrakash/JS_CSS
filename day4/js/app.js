function init() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        }).then(reg => {
            console.log(reg);
        });
    } else {
        console.log("service worker not supported!!!");
    }
}

document.addEventListener('DOMContentLoaded', init);