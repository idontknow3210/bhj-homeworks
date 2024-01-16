let reveal=document.querySelector(".reveal");
function playReveal (element) {
    let {top, bottom} = reveal.getBoundingClientRect();
    if (bottom<0) {
        return false;
    }
    if (top>window.innerHeight) {
        return false;
    }
    reveal.classList.add("reveal_active");
    return true;
}

playReveal(reveal);