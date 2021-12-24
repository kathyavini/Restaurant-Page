/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ background),
  "n": () => (/* binding */ container)
});

;// CONCATENATED MODULE: ./src/utils.js
function createNewElement ( 
            type, classes = null, text = null, attributes = null) {

    let createdElement = document.createElement(type);

    if (classes) {
        createdElement.classList.add(...classes);
    }

    if (text) {
        createdElement.textContent = text;
    }

    if (attributes) {
        for (let key in attributes) {
            createdElement.setAttribute(key, attributes[key])
        }
    }

    return createdElement;
}

function adjustFontSizes() {
    // Only for mobile/tablet
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
}



// Loading animation
const loader = createNewElement('div', ['loader', 'lds-default']);

loader.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";

const loaderBackground = createNewElement('div', ['loader-background']);


;// CONCATENATED MODULE: ./src/navbar.js


const navItems = ['Intro', 'About', 'Menu'];
const navBar = document.createElement('nav');

navItems.forEach( (item) => {
    let newNavItem = createNewElement('div', ['tab'], item, 
            {'id': item.toLowerCase()});
    navBar.appendChild(newNavItem);
})

/* harmony default export */ const navbar = (navBar);
;// CONCATENATED MODULE: ./src/intro.js




// Create elements of the intro sequence and main page
// Create buttons
const startButton = createNewElement('button', ['clickable'], "Enter");
const skipButton = createNewElement('button', ['skip'], "Skip Intro");

// Create title text
const punjabi = createNewElement('h1', ['punjabi']);
punjabi.innerHTML = 'ਲਾਡੀ <span>ਦੇ</span> ਲੱਡੂ';

const english = createNewElement('div',['english']);
const englishTitle = createNewElement('h1', null, "Laddi's Laddoos");
const englishSubtitle = createNewElement('p', null, "...Quality Sweets and Chai");

english.append(englishTitle, englishSubtitle);



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
    navbar.classList.remove('visible');
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
    navbar.classList.add('visible');
}

function clearMain() {
    english.style.visibility = 'hidden';
}


;// CONCATENATED MODULE: ./src/menu.js


const menuItems = [
    {
        name: "gujiya",
        titleEnglish: "Gujiya",
        titlePunjabi: "ਗੁਜੀਆ",
        description: "Pastry with sweet nut filling",
    },
    {
        name: "barfi",
        titleEnglish: "Besan Barfi",
        titlePunjabi: "ਬੇਸਨ ਬਰਫੀ",
        description: "Classic sweet and nutty taste",
    },
    {
        name: "jalebi",
        titleEnglish: "Jalebi",
        titlePunjabi: "ਜਲੇਬੀ",
        description: "Deep fried North Indian treat",
    },
    {
        name: "mysore-pak",
        titleEnglish: "Mysore Pak",
        titlePunjabi: "ਮੈਸੂਰ ਪਾਕ",
        description: "A rich barfi from Karnataka",
    },
    {
        name: "malai-peda",
        titleEnglish: "Malai Peda",
        titlePunjabi: "ਮਲਾਈ ਪੇਡਾ",
        description: "Sweet cream laddoo",
    },
    {
        name: "ladoo",
        titleEnglish: "Laddoo",
        titlePunjabi: "ਲੱਡੂ",
        description: "Original Punjabi taste",
    },

]

const menu = createNewElement('div', ['menu']);

const menuHeading = createNewElement('h2', null, "Menu");
const menuHeadingPunjabi = createNewElement('span', null, "ਮੀਨੂ");

const menuText = createNewElement('div', ['menuText']);

menuHeading.appendChild(menuHeadingPunjabi);
menu.append(menuHeading, menuText);


// Create div for each menu item
menuItems.forEach(item => {
    renderItemDiv(item.name, item.titleEnglish,
        item.titlePunjabi, item.description);
})


function renderItemDiv(name, titleEnglish, 
            titlePunjabi, description) {
    
    // Create elements
    let itemDiv = createNewElement('div', [name]);

    let itemTitle = createNewElement('h3', null, titleEnglish);
    let punjabiTitle = createNewElement('span', null, titlePunjabi);

    let itemDescription = createNewElement('p', null, description);

    // Append
    itemTitle.appendChild(punjabiTitle);
    itemDiv.append(itemTitle, itemDescription);

    menuText.appendChild(itemDiv);
}

function showMenu() {
    menu.classList.add('onLoad','show');

}
function clearMenu() {
    menu.classList.remove('onLoad', 'show');
}


;// CONCATENATED MODULE: ./src/about.js


const aboutInfo = [
    {
        name: "about-us",
        titleEnglish: "About Us",
        titlePunjabi: "ਸਾਡੇ ਬਾਰੇ",
        description: ["Chef Laddi brings the flavours of Hoshiapur to the heart of downtown Vancouver. With a discerning palette perfected over three Indian states and two Canadian provinces, only the freshest and highest quality sweets make the grade. Come taste for yourself!"]
    },
    {
        name: "contact",
        titleEnglish: "Contact",
        titlePunjabi: "ਸੰਪਰਕ",
        description: [
            "712 Granville Street, Vancouver BC",
            "eat@laddisladdoos.ca",
            "(604) 555-0150"
        ]

    },
    {
        name: "hours",
        titleEnglish: "Hours of Operation",
        titlePunjabi: "ਕਾਰਵਾਈ ਦੇ ਘੰਟੇ",
        description: [
            "Monday & Tuesday: Closed",
            "Wednesday-Sunday: 4pm-10pm"
        ]
    },
]

// menu classes included to inherent styling
const about = createNewElement('div', ['about', 'menu']);
const aboutText = createNewElement('div', ['aboutText', 'menuText']);

about.appendChild(aboutText);

// Render information
aboutInfo.forEach(section => {

    renderInfoSection(section.name, section.titleEnglish,
        section.titlePunjabi, section.description);

})


function renderInfoSection(name, titleEnglish, 
            titlePunjabi, description) {
    
    let sectionDiv = createNewElement('div', [name]);
    let sectionTitle = createNewElement('h3', null, titleEnglish);
    let punjabiTitle = createNewElement('span', null, titlePunjabi);
    
    sectionTitle.appendChild(punjabiTitle);
    sectionDiv.appendChild(sectionTitle);

    description.forEach(line => {
        let sectionDescription = createNewElement('p', null, line);
        sectionDiv.appendChild(sectionDescription);
    })

    aboutText.appendChild(sectionDiv);
}

function showAbout() {
    about.classList.add('onLoad');
    about.classList.add('show');
}

function clearAbout() {
    about.classList.remove('onLoad');
    about.classList.remove('show');
}


;// CONCATENATED MODULE: ./src/initialPageLoad.js







function initialPageLoad() {
    const container = document.querySelector('#content');

    // Create and render background
    const background = document.createElement('div');
    background.classList.add('background');
    container.appendChild(background);

    // Render loader
    container.appendChild(loaderBackground);
    container.appendChild(loader);

    // Render Nav Bar
    container.appendChild(navbar);

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
            loaderBackground.style.display = 'none';
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

;// CONCATENATED MODULE: ./src/index.js












// Exporting for use in the intro sequence
const [container, background] = initialPageLoad();

const aboutTab = document.querySelector('#about');
const menuTab = document.querySelector('#menu');
const introTab = document.querySelector('#intro');

introTab.addEventListener('click', () => {
    clearActiveTab();
    introTab.classList.add('current');
    clearMenu();
    clearAbout();
    makeInitialState();
});

aboutTab.addEventListener('click', () => {
    clearActiveTab();
    aboutTab.classList.add('current');
    clearMain();
    clearMenu();
    showAbout();
});

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnRyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxQYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJmdW5jdGlvbiBjcmVhdGVOZXdFbGVtZW50ICggXG4gICAgICAgICAgICB0eXBlLCBjbGFzc2VzID0gbnVsbCwgdGV4dCA9IG51bGwsIGF0dHJpYnV0ZXMgPSBudWxsKSB7XG5cbiAgICBsZXQgY3JlYXRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgY3JlYXRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgICBjcmVhdGVkRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZWRFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Rm9udFNpemVzKCkge1xuICAgIC8vIE9ubHkgZm9yIG1vYmlsZS90YWJsZXRcbiAgICBjb25zdCB0b3VjaCA9IG1hdGNoTWVkaWEoJyhob3Zlcjogbm9uZSknKS5tYXRjaGVzO1xuXG4gICAgaWYgKHRvdWNoKSB7XG4gICAgICAgIGxldCBhbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuICAgICAgICBsZXQgY29tcHV0ZWRGb250ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYWxsSFRNTCwgXG4gICAgICAgIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpLnNsaWNlKDAsLTIpO1xuXG4gICAgICAgIGlmIChjb21wdXRlZEZvbnQgPiAyMCkge1xuICAgICAgICAgICAgYWxsSFRNTC5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlZEZvbnQgPD0gMTYgKSB7XG4gICAgICAgICAgICBhbGxIVE1MLnN0eWxlLmZvbnRTaXplID0gJzE4cHgnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge2NyZWF0ZU5ld0VsZW1lbnQsIGFkanVzdEZvbnRTaXplc31cblxuLy8gTG9hZGluZyBhbmltYXRpb25cbmNvbnN0IGxvYWRlciA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbG9hZGVyJywgJ2xkcy1kZWZhdWx0J10pO1xuXG5sb2FkZXIuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj5cIjtcblxuY29uc3QgbG9hZGVyQmFja2dyb3VuZCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbG9hZGVyLWJhY2tncm91bmQnXSk7XG5cbmV4cG9ydCB7bG9hZGVyLCBsb2FkZXJCYWNrZ3JvdW5kIGFzIGxvYWRlckJhY2tkcm9wfSIsImltcG9ydCB7IGNyZWF0ZU5ld0VsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBuYXZJdGVtcyA9IFsnSW50cm8nLCAnQWJvdXQnLCAnTWVudSddO1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbm5hdkl0ZW1zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgbGV0IG5ld05hdkl0ZW0gPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ3RhYiddLCBpdGVtLCBcbiAgICAgICAgICAgIHsnaWQnOiBpdGVtLnRvTG93ZXJDYXNlKCl9KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmV3TmF2SXRlbSk7XG59KVxuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXI7IiwiaW1wb3J0IHsgY3JlYXRlTmV3RWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBjb250YWluZXIsIGJhY2tncm91bmQgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBuYXZCYXIgZnJvbSAnLi9uYXZiYXInO1xuXG4vLyBDcmVhdGUgZWxlbWVudHMgb2YgdGhlIGludHJvIHNlcXVlbmNlIGFuZCBtYWluIHBhZ2Vcbi8vIENyZWF0ZSBidXR0b25zXG5leHBvcnQgY29uc3Qgc3RhcnRCdXR0b24gPSBjcmVhdGVOZXdFbGVtZW50KCdidXR0b24nLCBbJ2NsaWNrYWJsZSddLCBcIkVudGVyXCIpO1xuZXhwb3J0IGNvbnN0IHNraXBCdXR0b24gPSBjcmVhdGVOZXdFbGVtZW50KCdidXR0b24nLCBbJ3NraXAnXSwgXCJTa2lwIEludHJvXCIpO1xuXG4vLyBDcmVhdGUgdGl0bGUgdGV4dFxuY29uc3QgcHVuamFiaSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2gxJywgWydwdW5qYWJpJ10pO1xucHVuamFiaS5pbm5lckhUTUwgPSAn4Kiy4Ki+4Kih4KmAIDxzcGFuPuCopuCphzwvc3Bhbj4g4Kiy4Kmx4Kih4KmCJztcblxuY29uc3QgZW5nbGlzaCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsWydlbmdsaXNoJ10pO1xuY29uc3QgZW5nbGlzaFRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgnaDEnLCBudWxsLCBcIkxhZGRpJ3MgTGFkZG9vc1wiKTtcbmNvbnN0IGVuZ2xpc2hTdWJ0aXRsZSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3AnLCBudWxsLCBcIi4uLlF1YWxpdHkgU3dlZXRzIGFuZCBDaGFpXCIpO1xuXG5lbmdsaXNoLmFwcGVuZChlbmdsaXNoVGl0bGUsIGVuZ2xpc2hTdWJ0aXRsZSk7XG5cbmV4cG9ydCB7IHB1bmphYmksIGVuZ2xpc2ggfVxuXG4vLyBBZGQgZXZlbnQgaGFuZGxlciB0byB0aGUgc3RhcnQgYnV0dG9uIHRvIHBsYXkgaW50cm8gc2VxdWVuY2VcbmZ1bmN0aW9uIHBsYXlJbnRybygpIHtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm1lZCcpO1xuXG4gICAgICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNoYW5nZUltYWdlKTtcblxuICAgICAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2FibGUnKTtcbiAgICAgICAgc2tpcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcbiAgICB9KVxuXG4gICAgc2tpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZW5nbGlzaC5jbGFzc0xpc3QuYWRkKCdxdWljaycpO1xuICAgICAgICBtYWtlRmluYWxTdGF0ZSgpO1xuICAgICAgICBza2lwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrYWJsZScpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUluaXRpYWxTdGF0ZSgpIHtcbiAgICBza2lwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrYWJsZScpO1xuICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xuXG4gICAgZW5nbGlzaC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIHB1bmphYmkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScsICd0cmFuc2l0aW9uZWQnKTtcbiAgICBlbmdsaXNoLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb25lZCcsICdxdWljaycpO1xuXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm1lZCcsICdzZWNvbmQtaW1hZ2UnLCAnZmluYWwnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zZm9ybWVkJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtaW1hZ2UnLCAndHJhbnNmb3JtZWQnKTtcblxuICAgIHNraXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2thYmxlJyk7XG5cbiAgICBiYWNrZ3JvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjaGFuZ2VJbWFnZSk7XG4gICAgXG4gICAgc2V0VGltZW91dChzdGFydFZpZGVvLCAyMDAwKTtcbn1cblxuLy8gQ3JlYXRlIGFuZCBwbGF5IHZpZGVvXG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5mdW5jdGlvbiBzdGFydFZpZGVvKCkge1xuICAgIC8vIE9kZGx5IHRoaXMgd29uJ3Qgd29yayB1bmxlc3MgYWxsIHNldCBpbnNpZGUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCBcIi4vaW1nL2NoYWkubXA0I3Q9MlwiKVxuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgcHVuamFiaS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cbiAgICBzZXRUaW1lb3V0KG1ha2VGaW5hbFN0YXRlLCA4MDAwKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZpbmFsU3RhdGUoKSB7XG4gICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIHB1bmphYmkuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbmVkJyk7XG4gICAgZW5nbGlzaC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uZWQnKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3NlY29uZC1pbWFnZScsICd0cmFuc2Zvcm1lZCcpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZmluYWwnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBjbGVhck1haW4oKSB7XG4gICAgZW5nbGlzaC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG59XG5cbmV4cG9ydCB7IHBsYXlJbnRybywgbWFrZUluaXRpYWxTdGF0ZSwgbWFrZUZpbmFsU3RhdGUsIGNsZWFyTWFpbiB9IiwiaW1wb3J0IHsgY3JlYXRlTmV3RWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZ3VqaXlhXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJHdWppeWFcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCol+CpgeConOCpgOCohlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQYXN0cnkgd2l0aCBzd2VldCBudXQgZmlsbGluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImJhcmZpXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJCZXNhbiBCYXJmaVwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Kis4KmH4Ki44KioIOCorOCosOCoq+CpgFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDbGFzc2ljIHN3ZWV0IGFuZCBudXR0eSB0YXN0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImphbGViaVwiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiSmFsZWJpXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqJzgqLLgqYfgqKzgqYBcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVlcCBmcmllZCBOb3J0aCBJbmRpYW4gdHJlYXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJteXNvcmUtcGFrXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJNeXNvcmUgUGFrXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqK7gqYjgqLjgqYLgqLAg4Kiq4Ki+4KiVXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcmljaCBiYXJmaSBmcm9tIEthcm5hdGFrYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm1hbGFpLXBlZGFcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIk1hbGFpIFBlZGFcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCoruCosuCovuCoiCDgqKrgqYfgqKHgqL5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3dlZXQgY3JlYW0gbGFkZG9vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibGFkb29cIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkxhZGRvb1wiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Kiy4Kmx4Kih4KmCXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk9yaWdpbmFsIFB1bmphYmkgdGFzdGVcIixcbiAgICB9LFxuXG5dXG5cbmNvbnN0IG1lbnUgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ21lbnUnXSk7XG5cbmNvbnN0IG1lbnVIZWFkaW5nID0gY3JlYXRlTmV3RWxlbWVudCgnaDInLCBudWxsLCBcIk1lbnVcIik7XG5jb25zdCBtZW51SGVhZGluZ1B1bmphYmkgPSBjcmVhdGVOZXdFbGVtZW50KCdzcGFuJywgbnVsbCwgXCLgqK7gqYDgqKjgqYJcIik7XG5cbmNvbnN0IG1lbnVUZXh0ID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydtZW51VGV4dCddKTtcblxubWVudUhlYWRpbmcuYXBwZW5kQ2hpbGQobWVudUhlYWRpbmdQdW5qYWJpKTtcbm1lbnUuYXBwZW5kKG1lbnVIZWFkaW5nLCBtZW51VGV4dCk7XG5cblxuLy8gQ3JlYXRlIGRpdiBmb3IgZWFjaCBtZW51IGl0ZW1cbm1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIHJlbmRlckl0ZW1EaXYoaXRlbS5uYW1lLCBpdGVtLnRpdGxlRW5nbGlzaCxcbiAgICAgICAgaXRlbS50aXRsZVB1bmphYmksIGl0ZW0uZGVzY3JpcHRpb24pO1xufSlcblxuXG5mdW5jdGlvbiByZW5kZXJJdGVtRGl2KG5hbWUsIHRpdGxlRW5nbGlzaCwgXG4gICAgICAgICAgICB0aXRsZVB1bmphYmksIGRlc2NyaXB0aW9uKSB7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgbGV0IGl0ZW1EaXYgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbbmFtZV0pO1xuXG4gICAgbGV0IGl0ZW1UaXRsZSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2gzJywgbnVsbCwgdGl0bGVFbmdsaXNoKTtcbiAgICBsZXQgcHVuamFiaVRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgnc3BhbicsIG51bGwsIHRpdGxlUHVuamFiaSk7XG5cbiAgICBsZXQgaXRlbURlc2NyaXB0aW9uID0gY3JlYXRlTmV3RWxlbWVudCgncCcsIG51bGwsIGRlc2NyaXB0aW9uKTtcblxuICAgIC8vIEFwcGVuZFxuICAgIGl0ZW1UaXRsZS5hcHBlbmRDaGlsZChwdW5qYWJpVGl0bGUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kKGl0ZW1UaXRsZSwgaXRlbURlc2NyaXB0aW9uKTtcblxuICAgIG1lbnVUZXh0LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ29uTG9hZCcsJ3Nob3cnKTtcblxufVxuZnVuY3Rpb24gY2xlYXJNZW51KCkge1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb25Mb2FkJywgJ3Nob3cnKTtcbn1cblxuZXhwb3J0IHttZW51LCBzaG93TWVudSwgY2xlYXJNZW51fSIsImltcG9ydCB7IGNyZWF0ZU5ld0VsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBhYm91dEluZm8gPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcImFib3V0LXVzXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJBYm91dCBVc1wiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Ki44Ki+4Kih4KmHIOCorOCovuCosOCph1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1wiQ2hlZiBMYWRkaSBicmluZ3MgdGhlIGZsYXZvdXJzIG9mIEhvc2hpYXB1ciB0byB0aGUgaGVhcnQgb2YgZG93bnRvd24gVmFuY291dmVyLiBXaXRoIGEgZGlzY2VybmluZyBwYWxldHRlIHBlcmZlY3RlZCBvdmVyIHRocmVlIEluZGlhbiBzdGF0ZXMgYW5kIHR3byBDYW5hZGlhbiBwcm92aW5jZXMsIG9ubHkgdGhlIGZyZXNoZXN0IGFuZCBoaWdoZXN0IHF1YWxpdHkgc3dlZXRzIG1ha2UgdGhlIGdyYWRlLiBDb21lIHRhc3RlIGZvciB5b3Vyc2VsZiFcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJjb250YWN0XCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJDb250YWN0XCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqLjgqbDgqKrgqLDgqJVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICAgIFwiNzEyIEdyYW52aWxsZSBTdHJlZXQsIFZhbmNvdXZlciBCQ1wiLFxuICAgICAgICAgICAgXCJlYXRAbGFkZGlzbGFkZG9vcy5jYVwiLFxuICAgICAgICAgICAgXCIoNjA0KSA1NTUtMDE1MFwiXG4gICAgICAgIF1cblxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImhvdXJzXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJIb3VycyBvZiBPcGVyYXRpb25cIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuColeCovuCosOCoteCovuCoiCDgqKbgqYcg4KiY4Kmw4Kif4KmHXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgICBcIk1vbmRheSAmIFR1ZXNkYXk6IENsb3NlZFwiLFxuICAgICAgICAgICAgXCJXZWRuZXNkYXktU3VuZGF5OiA0cG0tMTBwbVwiXG4gICAgICAgIF1cbiAgICB9LFxuXVxuXG4vLyBtZW51IGNsYXNzZXMgaW5jbHVkZWQgdG8gaW5oZXJlbnQgc3R5bGluZ1xuY29uc3QgYWJvdXQgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ2Fib3V0JywgJ21lbnUnXSk7XG5jb25zdCBhYm91dFRleHQgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ2Fib3V0VGV4dCcsICdtZW51VGV4dCddKTtcblxuYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcblxuLy8gUmVuZGVyIGluZm9ybWF0aW9uXG5hYm91dEluZm8uZm9yRWFjaChzZWN0aW9uID0+IHtcblxuICAgIHJlbmRlckluZm9TZWN0aW9uKHNlY3Rpb24ubmFtZSwgc2VjdGlvbi50aXRsZUVuZ2xpc2gsXG4gICAgICAgIHNlY3Rpb24udGl0bGVQdW5qYWJpLCBzZWN0aW9uLmRlc2NyaXB0aW9uKTtcblxufSlcblxuXG5mdW5jdGlvbiByZW5kZXJJbmZvU2VjdGlvbihuYW1lLCB0aXRsZUVuZ2xpc2gsIFxuICAgICAgICAgICAgdGl0bGVQdW5qYWJpLCBkZXNjcmlwdGlvbikge1xuICAgIFxuICAgIGxldCBzZWN0aW9uRGl2ID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgW25hbWVdKTtcbiAgICBsZXQgc2VjdGlvblRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgnaDMnLCBudWxsLCB0aXRsZUVuZ2xpc2gpO1xuICAgIGxldCBwdW5qYWJpVGl0bGUgPSBjcmVhdGVOZXdFbGVtZW50KCdzcGFuJywgbnVsbCwgdGl0bGVQdW5qYWJpKTtcbiAgICBcbiAgICBzZWN0aW9uVGl0bGUuYXBwZW5kQ2hpbGQocHVuamFiaVRpdGxlKTtcbiAgICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG5cbiAgICBkZXNjcmlwdGlvbi5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBsZXQgc2VjdGlvbkRlc2NyaXB0aW9uID0gY3JlYXRlTmV3RWxlbWVudCgncCcsIG51bGwsIGxpbmUpO1xuICAgICAgICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY3Rpb25EZXNjcmlwdGlvbik7XG4gICAgfSlcblxuICAgIGFib3V0VGV4dC5hcHBlbmRDaGlsZChzZWN0aW9uRGl2KTtcbn1cblxuZnVuY3Rpb24gc2hvd0Fib3V0KCkge1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ29uTG9hZCcpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBYm91dCgpIHtcbiAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdvbkxvYWQnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmV4cG9ydCB7YWJvdXQsIHNob3dBYm91dCwgY2xlYXJBYm91dH0iLCJpbXBvcnQgbmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCB7IGxvYWRlciwgbG9hZGVyQmFja2Ryb3AgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHN0YXJ0QnV0dG9uLCBza2lwQnV0dG9uLCBwdW5qYWJpLCBlbmdsaXNoLCBwbGF5SW50cm8gfSBmcm9tICcuL2ludHJvLmpzJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2Fib3V0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIC8vIENyZWF0ZSBhbmQgcmVuZGVyIGJhY2tncm91bmRcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuXG4gICAgLy8gUmVuZGVyIGxvYWRlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkZXJCYWNrZHJvcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRlcik7XG5cbiAgICAvLyBSZW5kZXIgTmF2IEJhclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgLy8gUmVuZGVyIGJ1dHRvbnNcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblxuICAgIC8vIFJlbmRlciBpbnRybyB0ZXh0XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHB1bmphYmkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmdsaXNoKTtcblxuICAgIC8vIFNob3cgdGhlIGxvYWRpbmcgYW5pbWF0aW9uIHVudGlsIHBhZ2UgaXMgbG9hZGVkLCBwbHVzIGJ1ZmZlclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGxvYWRlckJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIFxuICAgIH0pXG5cbiAgICAvLyBQbGF5IGludHJvIHZpYSBzZXR0aW5nIHVwIGV2ZW50IExpc3RlbmVyc1xuICAgIHBsYXlJbnRybygpO1xuXG4gICAgLy8gSW50cm8gdGFiIHNob3VsZCBiZSBoaWdobGlnaHRlZFxuICAgIGNvbnN0IGludHJvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvJyk7XG4gICAgaW50cm9UYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgLy8gUmVuZGVyIG1lbnVcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgLy8gUmVuZGVyIGFib3V0XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIHJldHVybiBbY29udGFpbmVyLCBiYWNrZ3JvdW5kXTtcbn1cbiIsImltcG9ydCBcIi4vY3NzL2xvYWRpbmctaW8uY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9pbnRyby5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL21lbnUtYWJvdXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9tb2JpbGUuY3NzXCI7XG5cbmltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSAnLi9pbml0aWFsUGFnZUxvYWQnO1xuaW1wb3J0IHsgbWFrZUluaXRpYWxTdGF0ZSwgY2xlYXJNYWluIH0gZnJvbSBcIi4vaW50cm9cIjtcbmltcG9ydCB7IHNob3dBYm91dCwgY2xlYXJBYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IHsgc2hvd01lbnUsIGNsZWFyTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBhZGp1c3RGb250U2l6ZXMgfSBmcm9tICcuL3V0aWxzJztcblxuLy8gRXhwb3J0aW5nIGZvciB1c2UgaW4gdGhlIGludHJvIHNlcXVlbmNlXG5leHBvcnQgY29uc3QgW2NvbnRhaW5lciwgYmFja2dyb3VuZF0gPSBpbml0aWFsUGFnZUxvYWQoKTtcblxuY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuY29uc3QgaW50cm9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW50cm8nKTtcblxuaW50cm9UYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJBY3RpdmVUYWIoKTtcbiAgICBpbnRyb1RhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgY2xlYXJNZW51KCk7XG4gICAgY2xlYXJBYm91dCgpO1xuICAgIG1ha2VJbml0aWFsU3RhdGUoKTtcbn0pO1xuXG5hYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckFjdGl2ZVRhYigpO1xuICAgIGFib3V0VGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICBjbGVhck1haW4oKTtcbiAgICBjbGVhck1lbnUoKTtcbiAgICBzaG93QWJvdXQoKTtcbn0pO1xuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQWN0aXZlVGFiKCk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgY2xlYXJNYWluKCk7XG4gICAgY2xlYXJBYm91dCgpO1xuICAgIHNob3dNZW51KCk7XG59KTtcblxuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuZnVuY3Rpb24gY2xlYXJBY3RpdmVUYWIoKSB7XG4gICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICB9XG59XG5cbmFkanVzdEZvbnRTaXplcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==