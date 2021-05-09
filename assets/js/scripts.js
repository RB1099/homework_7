/*anime js instruction taken from https://www.youtube.com/watch?v=apaQe1tDA4M*/

document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.container-fluid',
        translateX: [-1000, 0],
        easing: 'easeOutExpo',
        duration: 2000,
    })

});