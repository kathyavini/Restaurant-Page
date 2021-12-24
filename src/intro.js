
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
        startButton.style.pointerEvents = 'none';
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
    startButton.style.opacity = '1';
    startButton.style.pointerEvents = 'initial';

    english.style.visibility = 'visible';
    punjabi.classList.remove('visible', 'transitioned');
    english.classList.remove('transitioned', 'quick');

    background.classList.remove('transformed', 'second-image', 'final');
    navBar.classList.remove('visible');
}

function changeImage() {
    background.classList.remove('transformed');
    background.classList.add('second-image', 'transformed');

    skipButton.style.opacity = '0';
    skipButton.style.pointerEvents = 'none';

    background.removeEventListener('transitionend', changeImage);
    
    setTimeout(startVideo, 2000);
}

// Play video
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