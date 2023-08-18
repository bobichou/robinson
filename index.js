
// BUTTON DE LE FEUILLE TEAM.HTML SHARE THE PROJECT 


document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;
    inputField.addEventListener("focus", () => inputField.select());
    copyButton.addEventListener("click", () => {
    inputField.select();
    navigator.clipboard.writeText(text);
    inputField.value = "Copied!";
    setTimeout(() => (inputField.value = text), 2000);
    });
});


// SLIDESHOW DES DIFFERENTES MAISONS //


const slider = document.querySelector('.slideshow-container')
let holding = false;
let firstClickX;
let alreadyLeftScrolled;
let velocity;
let rafID;

slider.addEventListener('mousedown', e => {
holding = true;

firstClickX = e.pageX - slider.offsetLeft;

alreadyLeftScrolled = slider.scrollLeft;

stopTransition()
})

slider.addEventListener('mousemove', e => {
if(!holding) return;

const x = e.pageX - slider.offsetLeft;

const scrolled = (x - firstClickX) * 2;

const prevScrollLeft = slider.scrollLeft

slider.scrollLeft = alreadyLeftScrolled - scrolled;

velocity = slider.scrollLeft - prevScrollLeft;

})

slider.addEventListener('mouseup', () => {
holding = false;
startTransition()
})
slider.addEventListener('mouseleave', () => {
holding = false;
})

function startTransition(){

stopTransition();

rafID = requestAnimationFrame(decreasingTransition);
}

function stopTransition(){
cancelAnimationFrame(rafID)
}
function decreasingTransition(){

slider.scrollLeft += velocity;
velocity *= 0.95;
if(Math.abs(velocity) > 0.5){
rafID = requestAnimationFrame(decreasingTransition)
console.log(velocity);
}

}

slider.addEventListener('touchstart', e => {
holding = true;
// pageX => la largeur entre mon click et le DOCUMENT
firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;

alreadyLeftScrolled = slider.scrollLeft;
stopTransition()
})
slider.addEventListener('touchend', () => {
holder = false;
startTransition()
})
slider.addEventListener('touchmove', e => {
if(!holding) return;

const x = e.targetTouches[0].pageX - slider.offsetLeft;

const scrolled = (x - firstClickX) * 2;

const prevScrollLeft = slider.scrollLeft;

slider.scrollLeft = alreadyLeftScrolled - scrolled;

velocity = slider.scrollLeft - prevScrollLeft;
})