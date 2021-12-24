import navBar from './navbar';
import { loader, loaderBackdrop } from './utils';
import { startButton, skipButton, punjabi, english, playIntro } from './intro.js';
import { menu } from './menu';
import { about } from './about';


export default function initialPageLoad() {
    const container = document.querySelector('#content');

    // Create and render background
    const background = document.createElement('div');
    background.classList.add('background');
    container.appendChild(background);

    // Render loader
    container.appendChild(loaderBackdrop);
    container.appendChild(loader);

    // Render Nav Bar
    container.appendChild(navBar);

    // Render buttons
    container.appendChild(startButton);
    container.appendChild(skipButton);

    // Render intro text
    container.appendChild(punjabi);
    container.appendChild(english);

    // Show the loading animation until page is loaded, plus buffer
    window.addEventListener('load', () => {
        setTimeout( () => {
            loader.style.display = 'none';
            loaderBackdrop.style.display = 'none';
        }, 2000);
    
    })

    // Play intro via setting up event Listeners
    playIntro();

    // Intro tab should be highlighted
    const introTab = document.querySelector('#intro');
    introTab.classList.add('current');

    // Render menu
    container.appendChild(menu);
    
    // Render about
    container.appendChild(about);

    return [container, background];
}
