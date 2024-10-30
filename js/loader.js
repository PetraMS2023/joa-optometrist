
document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.querySelector('.overlay');
    var body = document.querySelector('body');

    // Users can skip the loading process if they want.
    document.querySelector('.skip').addEventListener('click', function () {
        overlay.classList.add('loaded');
        body.classList.add('loaded');
    });

    // Will wait for everything on the page to load.
    window.addEventListener('load', function () {
        setTimeout(function () {
            overlay.classList.add('loaded');
            body.classList.add('loaded');
        }, 500); // Remove overlay after 2 seconds
    });

    // Will remove overlay after 1 minute if users cannot load properly.
    setTimeout(function () {
        overlay.classList.add('loaded');
        body.classList.add('loaded');
    }, 30000);
});