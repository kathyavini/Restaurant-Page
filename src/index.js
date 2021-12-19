import './style.css';
import './loading-io.css';
// import pageLoad from './initialPageLoad';


let background = document.querySelector('.background');
let loader = document.querySelector('.loader');
let loaderBackdrop = document.querySelector('.loader-background');
let navBar = document.querySelector('nav');

window.addEventListener('load', () => {
    setTimeout( () => {
        loader.style.display = 'none';
        loaderBackdrop.style.display = 'none';
    }, 2000);

})

let container = document.querySelector('#content');

let startButton = document.querySelector('button');
let punjabi = document.querySelector('.punjabi');
let english = document.querySelector('.english');
let skipButton = document.querySelector('.skip');

startButton.addEventListener('click', () => {
    background.classList.add('transformed');
    background.addEventListener('transitionend', changeImage);
    startButton.style.opacity = '0';
    skipButton.style.opacity = '1';
    skipButton.style.pointerEvents = 'initial';
})

skipButton.addEventListener('click', () => {
    english.classList.add('quick');
    makeFinalState();
    skipButton.style.opacity = '0';
})

function changeImage() {
    background.classList.remove('transformed');
    background.classList.add('second-image');
    background.classList.add('transformed');
    skipButton.style.opacity = '0';

    background.removeEventListener('transitionend', changeImage);
    
    setTimeout(startVideo, 2000);
}

let video = document.createElement("video");
function startVideo() {
    video.setAttribute('src', "../src/img/chai.mp4#t=2")
    video.setAttribute('autoplay', "true");
    video.setAttribute('muted', "true");
    container.appendChild(video);
    video.classList.add('visible');
    punjabi.classList.add('visible');
    video.addEventListener('ended', () => {
        makeFinalState();
    })
    video.addEventListener('paused', () => {
        console.log("Video paused")
        makeFinalState();
    })
}



function makeFinalState() {
    video.classList.remove('visible');
    punjabi.classList.add('transitioned');
    english.classList.add('transitioned');
    background.classList.remove('transformed');
    background.classList.remove('second-image');
    background.classList.add('final');
    navBar.classList.add('visible');
    introTab.classList.add('current');
}

let introTab = document.querySelector('#intro');
introTab.addEventListener('click', () => {
    menuTab.classList.add('current');
    makeInitialState();
});

function makeInitialState() {
    clearMenu();
    clearAbout();
    skipButton.style.pointerEvents = 'none';
    startButton.style.pointerEvents = 'initial';
    english.style.visibility = 'visible';
    punjabi.classList.remove('visible');
    punjabi.classList.remove('transitioned');
    english.classList.remove('transitioned');
    english.classList.remove('quick');
    background.classList.remove('transformed');
    background.classList.remove('second-image');
    background.classList.remove('final');
    navBar.classList.remove('visible');
    startButton.style.opacity = '1';
}



// Menu functionality
let menuTab = document.querySelector('#menu');
menuTab.addEventListener('click', () => {
    clearMain();
    clearAbout();
    showMenu();
});

function clearMain() {
    english.style.visibility = 'hidden';
    introTab.classList.remove('current');
}

let menu = document.querySelector('.menu');
function showMenu() {
    menuTab.classList.add('current');
    startButton.style.pointerEvents = 'none';
    menu.classList.add('onLoad');
    menu.classList.add('show');
}
function clearMenu() {
    menu.classList.remove('onLoad');
    menu.classList.remove('show');
    menuTab.classList.remove('current');
}

// About tab
let aboutTab = document.querySelector('#about');
aboutTab.addEventListener('click', () => {
    clearMain();
    clearMenu();
    showAbout();
});

let about = document.querySelector('.about');
function showAbout() {
    aboutTab.classList.add('current');
    startButton.style.pointerEvents = 'none';
    about.classList.add('onLoad');
    about.classList.add('show');
}

function clearAbout() {
    aboutTab.classList.remove('current');
    about.classList.remove('onLoad');
    about.classList.remove('show');

}

// A small font size adjust for phones (sorry)
const touch = matchMedia('(hover: none)').matches;
if (touch) {
    let allHTML = document.querySelector('html');
    let computedFont = window.getComputedStyle(allHTML, 
    null).getPropertyValue('font-size').slice(0,-2);

    if (computedFont > 20) {
        allHTML.style.fontSize = '16px';
    } else if (computedFont <= 16 ) {
        allHTML.style.fontSize = '18px';
    }
}




// Responsive centering for mobile taking into account font sizes
// let computedHeightMenu = window.getComputedStyle(menu, 
//     null).getPropertyValue('height').slice(0,-2);

function calculateMargin(containerDiv, classDiv, navDiv) {
    let divHeight = classDiv.offsetTop + classDiv.offsetHeight;
    console.log("Div height is " + divHeight);
    let navHeight = window.getComputedStyle(navDiv, 
        null).getPropertyValue('height').slice(0,-2);
    console.log("Nav height is " + navHeight);
    let availHeight = window.getComputedStyle(containerDiv, 
    null).getPropertyValue('height').slice(0,-2);
    console.log("Container height is " + availHeight);

    return (availHeight - divHeight - navHeight);
}

let menuMargin = Math.max(0, 
    calculateMargin(container, menu, navBar) / 2);
menu.style.setProperty('--calcMargin', `${menuMargin}px`);

let aboutMargin = Math.max(0, 
    calculateMargin(container, about, navBar) / 2);
about.style.setProperty('--calcMarginAbout', `${aboutMargin}px`);

