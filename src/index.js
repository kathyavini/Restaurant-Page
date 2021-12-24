import initialPageLoad from './initialPageLoad';
import { startButton } from './buttons';
import { makeInitialState, clearMain} from "./intro";
import { showAbout, clearAbout } from './about';
import { showMenu, clearMenu } from './menu';
import adjustFontSizes from './font-adjust';

// Exporting for use in the intro sequence once page load function is run
export const [container, background] = initialPageLoad();

// Identify tabs - could possibly change this to an export from navBar
const tabs = document.querySelectorAll('.tab');

const aboutTab = document.querySelector('#about');
const menuTab = document.querySelector('#menu');
const introTab = document.querySelector('#intro');

// Intro tab
introTab.addEventListener('click', () => {
    clearActiveTab();
    introTab.classList.add('current');
    clearMenu();
    clearAbout();
    makeInitialState();
});

// About tab
aboutTab.addEventListener('click', () => {
    clearActiveTab();
    aboutTab.classList.add('current');
    startButton.style.pointerEvents = 'none';
    clearMain();
    clearMenu();
    showAbout();
});

// Menu Tab
menuTab.addEventListener('click', () => {
    clearActiveTab();
    menuTab.classList.add('current');
    startButton.style.pointerEvents = 'none';
    clearMain();
    clearAbout();
    showMenu();
});

function clearActiveTab() {
    for (let tab of tabs) {
        tab.classList.remove('current');
    }
}

adjustFontSizes();