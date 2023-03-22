
const toggleHide = (element) => {
    element.toggleAttribute("show");
    element.toggleAttribute("hide");
}


const navbarButtonClass = "#navbar-dropdown";
const navbarButton = document.querySelector(navbarButtonClass);
const navbar = document.getElementById("navbar");

const dropdown = () => {
    toggleHide(navbar);
    navbarButton.toggleAttribute("open")
}

const rollingTextId = "#roll-me";
const rollingText = document.querySelector(rollingTextId);

function renderFrame() {

    return rollingText.animate(
        [
            {transform: "TranslateY(0)"},
            {transform: `TranslateY(${screen.width > 475 ? -6 : -5}vh)`}
        ],
        {
            easing: "linear",
            iterations: 1,
            duration: 800
        }
        ).finished;

}

function scroll() {
    renderFrame().then(() => {
        rollingText.appendChild(document.querySelectorAll(`${rollingTextId} > li`)[0]);
    });
}


window.setInterval(() => {
    scroll();
}, 5*1000);

// Also can pass in optional settings block
const parallax = new Rellax('.parallax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: true,
    
});