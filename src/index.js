import initialPageLoad from './initialPageLoad';
import { startButton } from './buttons';
import { makeInitialState, clearMain} from "./intro";
import { showAbout, clearAbout } from './about';
import { showMenu, clearMenu } from './menu';

// Exporting for use in the intro sequence once page load function is run
export const [container, background] = initialPageLoad();


// Tab Functionality

// Identify tabs - could possibly change this to an export from navBar
const tabs = document.querySelector('.tab');
const aboutTab = document.querySelector('#about');
const menuTab = document.querySelector('#menu');
const introTab = document.querySelector('#intro');

// Intro tab
introTab.addEventListener('click', () => {
    introTab.classList.add('current');
    aboutTab.classList.remove('current');
    menuTab.classList.remove('current');
    clearMenu();
    clearAbout();
    makeInitialState();
});

// About tab
aboutTab.addEventListener('click', () => {
    aboutTab.classList.add('current');
    introTab.classList.remove('current');
    menuTab.classList.remove('current');
    startButton.style.pointerEvents = 'none';
    clearMain();
    clearMenu();
    showAbout();
});

// Menu Tab
menuTab.addEventListener('click', () => {
    menuTab.classList.add('current');
    aboutTab.classList.remove('current');
    introTab.classList.remove('current');
    startButton.style.pointerEvents = 'none';
    clearMain();
    clearAbout();
    showMenu();
});


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
