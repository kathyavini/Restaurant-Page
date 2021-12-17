import './style.css';
import './loader.css';
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
// pageLoad();

let container = document.querySelector('#content');

let startButton = document.querySelector('button');
let punjabi = document.querySelector('.punjabi');
let english = document.querySelectorAll('.english');
let skipButton = document.querySelector('.skip');

startButton.addEventListener('click', () => {
    background.classList.add('transformed');
    background.addEventListener('transitionend', changeImage);
    startButton.style.opacity = '0';
    skipButton.style.opacity = '1';
})

skipButton.addEventListener('click', () => {
    makeFinalState();
    skipButton.style.opacity = '0';
})

// let smallImage = document.createElement("div");

function changeImage() {
    background.classList.remove('transformed');
    background.classList.add('second-image');
    background.classList.add('transformed');
    skipButton.style.opacity = '0';


    // punjabi.style.opacity = '1';

    // smallImage.classList.add('small-image');    
    // container.appendChild(smallImage);
    // smallImage.classList.add('visible');

    background.removeEventListener('transitionend', changeImage);
    setTimeout(startVideo, 2000);
    // background.addEventListener('transitionstart', startVideo);
}

function startVideo() {
    let video = document.createElement("video");
    video.setAttribute('src', "../src/img/chai.mp4#t=2")
    video.setAttribute('autoplay', "true");
    video.setAttribute('muted', "true");
    container.appendChild(video);
    video.classList.add('visible');
    punjabi.classList.add('visible');

    video.addEventListener('ended', () => {
        video.classList.remove('visible');
        makeFinalState();

    })
}

function makeFinalState() {
    punjabi.classList.add('transitioned');
    english.forEach(element =>
        element.classList.add('transitioned')
    )
    background.classList.remove('transformed');
    background.classList.remove('second-image');
    background.classList.add('final');
    navBar.classList.add('visible');
}