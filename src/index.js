import './style.css';
import './loading-io.css';
// import pageLoad from './initialPageLoad';


let background = document.querySelector('.background');
let loader = document.querySelector('.loader');
let loaderBackdrop = document.querySelector('.loader-background');
let navBar = document.querySelector('nav');

window.addEventListener('load', () => {

    console.log("Page is fully loaded");
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
    // about.classList.remove('onLoad');
    about.classList.add('show');
}

function clearAbout() {
    aboutTab.classList.remove('current');
    // about.classList.remove('onLoad');
    about.classList.remove('show');

}

// Responsive centering for mobile taking into account font sizes
// let computedHeightMenu = window.getComputedStyle(menu, 
//     null).getPropertyValue('height').slice(0,-2);

let menuHeight = menu.offsetTop + menu.offsetHeight;

let computedHeightNav = window.getComputedStyle(navBar, 
        null).getPropertyValue('height').slice(0,-2);

let availHeight = window.getComputedStyle(container, 
    null).getPropertyValue('height').slice(0,-2);

console.log(menuHeight, computedHeightNav, availHeight);

let heightDifference = availHeight - computedHeightNav - menuHeight;

console.log(heightDifference);

console.log(typeof heightDifference);

menu.style.setProperty('--calcMargin', `${Math.max(0, heightDifference / 2)}px`);