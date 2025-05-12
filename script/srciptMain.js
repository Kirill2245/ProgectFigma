const poligon = document.getElementById('poligon');
const rectangleHeader = document.getElementById('rectangleHeader');
const rectangleText = document.getElementById('rectangleText');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
    toggle.checked = true; 
    body.classList.add('dark-theme');
    poligon.src = 'img/polygon1.svg';
    rectangleHeader.innerText = "Pricing";
    rectangleText.innerText = "Honest pricing, no surprises.";
} else {
    toggle.checked = false; 
    body.classList.remove('dark-theme');
    poligon.src = 'img/polygon.svg';
    rectangleHeader.innerText = "How Much Does it Cost";
    rectangleText.innerText = "Honest pricing, no surprises.";
}
function switchingTheme() {
    const body = document.getElementById('body');
    const toggle = document.getElementById('toggle');
    toggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-theme');
            poligon.src = 'img/polygon1.svg';
            rectangleHeader.innerText = "Pricing";
            rectangleText.innerText = "Honest pricing, no surprises.";
        } else {
            rectangleHeader.innerText = "How Much Does it Cost";
            rectangleText.innerText = "Honest pricing, no surprises.";
            body.classList.remove('dark-theme');
            poligon.src = 'img/polygon.svg';
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    switchingTheme();
});