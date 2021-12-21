import { startButton, skipButton } from './buttons';
import { container, background } from './index.js';
import { punjabi, english } from './introText.js';
import navBar from './navbar';

function playIntro() {
    // Add Event Listeners to buttons
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
}

function makeInitialState() {
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

function changeImage() {
    background.classList.remove('transformed');
    background.classList.add('second-image');
    background.classList.add('transformed');
    skipButton.style.opacity = '0';

    background.removeEventListener('transitionend', changeImage);
    
    setTimeout(startVideo, 2000);
}

// Play video
const video = document.createElement("video");
function startVideo() {
    video.setAttribute('src', "./img/chai.mp4#t=2")
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
}

function clearMain() {
    english.style.visibility = 'hidden';
}


export { playIntro, makeInitialState, makeFinalState, clearMain }