import "./css/loading-io.css";
import "./css/styles.css";
import "./css/intro.css";
import "./css/menu-about.css";
import "./css/mobile.css";

import initialPageLoad from './initialPageLoad';
import { makeInitialState, clearMain } from "./intro";
import { showAbout, clearAbout } from './about';
import { showMenu, clearMenu } from './menu';
import { adjustFontSizes } from './utils';

// Exporting for use in the intro sequence once page load function is run
export const [container, background] = initialPageLoad();

// Identify tabs - could possibly change this to an export from navBar
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
    clearMain();
    clearMenu();
    showAbout();
});

// Menu Tab
menuTab.addEventListener('click', () => {
    clearActiveTab();
    menuTab.classList.add('current');
    clearMain();
    clearAbout();
    showMenu();
});


const tabs = document.querySelectorAll('.tab');
function clearActiveTab() {
    for (let tab of tabs) {
        tab.classList.remove('current');
    }
}

adjustFontSizes();