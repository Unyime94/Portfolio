const nav = document.querySelector("nav");
const body = document.querySelector("body");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
};

function zoom() {
    document.body.style.transform = "scale(1)";
}
window.onload = zoom();
window.onresize = zoom();