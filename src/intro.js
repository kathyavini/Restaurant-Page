import { createNewElement } from "./utils";
import { container, background } from './index.js';
import navBar from './navbar';

// Create elements of the intro sequence and main page
// Create buttons
export const startButton = createNewElement('button', ['clickable'], "Enter");
export const skipButton = createNewElement('button', ['skip'], "Skip Intro");

// Create title text
const punjabi = createNewElement('h1', ['punjabi']);
punjabi.innerHTML = 'ਲਾਡੀ <span>ਦੇ</span> ਲੱਡੂ';

const english = createNewElement('div',['english']);
const englishTitle = createNewElement('h1', null, "Laddi's Laddoos");
const englishSubtitle = createNewElement('p', null, "...Quality Sweets and Chai");

english.append(englishTitle, englishSubtitle);

export { punjabi, english }

// Add event handler to the start button to play intro sequence
function playIntro() {
    startButton.addEventListener('click', () => {
        background.classList.add('transformed');

        background.addEventListener('transitionend', changeImage);

        startButton.classList.remove('clickable');
        skipButton.classList.add('clickable');
    })

    skipButton.addEventListener('click', () => {
        english.classList.add('quick');
        makeFinalState();
        skipButton.classList.remove('clickable')
    })
}

function makeInitialState() {
    skipButton.classList.remove('clickable');
    startButton.classList.add('clickable');

    english.style.visibility = 'visible';
    punjabi.classList.remove('visible', 'transitioned');
    english.classList.remove('transitioned', 'quick');

    background.classList.remove('transformed', 'second-image', 'final');
    navBar.classList.remove('visible');
}

function changeImage() {
    background.classList.remove('transformed');
    background.classList.add('second-image', 'transformed');

    skipButton.classList.remove('clickable');

    background.removeEventListener('transitionend', changeImage);
    
    setTimeout(startVideo, 2000);
}

// Create and play video
const video = document.createElement('video');
function startVideo() {
    // Oddly this won't work unless all set inside the event listener
    video.setAttribute('src', "./img/chai.mp4#t=2")
    video.setAttribute('muted','true');
    video.setAttribute('autoplay', 'true');
    container.appendChild(video);
    video.classList.add('visible');
    punjabi.classList.add('visible');

    setTimeout(makeFinalState, 8000);
}

function makeFinalState() {
    video.classList.remove('visible');
    punjabi.classList.add('transitioned');
    english.classList.add('transitioned');
    background.classList.remove('second-image', 'transformed');
    background.classList.add('final');
    navBar.classList.add('visible');
}

function clearMain() {
    english.style.visibility = 'hidden';
}

export { playIntro, makeInitialState, makeFinalState, clearMain }