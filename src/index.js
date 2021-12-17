import './style.css';
// import pageLoad from './initialPageLoad';

// pageLoad();

let container = document.querySelector('#content');
let background = document.querySelector('.background');
let startButton = document.querySelector('button');
let punjabi = document.querySelector('.punjabi');
let english = document.querySelectorAll('.english');

startButton.addEventListener('click', () => {
    background.classList.add('transformed');
    background.addEventListener('transitionend', changeImage);
    startButton.style.opacity = '0';
})

// let smallImage = document.createElement("div");

function changeImage() {
    background.classList.remove('transformed');
    background.classList.add('second-image');
    background.classList.add('transformed');


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
        punjabi.classList.add('transitioned');
        english.forEach(element =>
            element.classList.add('transitioned')
        )
    })
}