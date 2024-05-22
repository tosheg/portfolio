document.addEventListener('scroll', debounce(function() {
    var parallaxElements = document.getElementsByClassName('parallax');
    var scrollTop = window.pageYOffset;
    Array.prototype.forEach.call(parallaxElements, function(el) {
        var speed = el.getAttribute('data-parallax-speed');
        var offset = scrollTop * speed;
        el.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
    });
}, 10));

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
