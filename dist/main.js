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

// Create main text
const punjabi = createNewElement('h1', ['punjabi']);
punjabi.innerHTML = 'ਲਾਡੀ <span>ਦੇ</span> ਲੱਡੂ';

const english = createNewElement('div',['english']);
const englishTitle = createNewElement('h1', null, "Laddi's Laddoos");
const englishSubtitle = createNewElement('p', null, "...Quality Sweets and Chai");

english.append(englishTitle, englishSubtitle);



// Add event handler to the start button to play sequence
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

// // Trigger animation once loaded
// menu.addEventListener('load', () => {
//     menu.classList.add('onLoad','show')
// });

function showMenu() {
    menu.classList.add('onLoad','show');

}
function clearMenu() {
    menu.classList.remove('onLoad', 'show');
}

// Do you think there is any advantage to making the div and appending it in the same module?
// Besides meeting spec, does it have an advantage for memory?

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












// Exporting for use in the intro sequence once page load function is run
const [container, background] = initialPageLoad();

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7QUFDYixJQUFJLFVBQVU7QUFDZCxJQUFJLFFBQVE7QUFDWixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludHJvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImZ1bmN0aW9uIGNyZWF0ZU5ld0VsZW1lbnQgKCBcbiAgICAgICAgICAgIHR5cGUsIGNsYXNzZXMgPSBudWxsLCB0ZXh0ID0gbnVsbCwgYXR0cmlidXRlcyA9IG51bGwpIHtcblxuICAgIGxldCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgICBjcmVhdGVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNyZWF0ZWRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgY3JlYXRlZEVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGp1c3RGb250U2l6ZXMoKSB7XG4gICAgY29uc3QgdG91Y2ggPSBtYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpJykubWF0Y2hlcztcblxuICAgIGlmICh0b3VjaCkge1xuICAgICAgICBsZXQgYWxsSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcbiAgICAgICAgbGV0IGNvbXB1dGVkRm9udCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFsbEhUTUwsIFxuICAgICAgICBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKS5zbGljZSgwLC0yKTtcblxuICAgICAgICBpZiAoY29tcHV0ZWRGb250ID4gMjApIHtcbiAgICAgICAgICAgIGFsbEhUTUwuc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZWRGb250IDw9IDE2ICkge1xuICAgICAgICAgICAgYWxsSFRNTC5zdHlsZS5mb250U2l6ZSA9ICcxOHB4JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdFbGVtZW50LCBhZGp1c3RGb250U2l6ZXN9XG5cblxuY29uc3QgbG9hZGVyID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydsb2FkZXInLCAnbGRzLWRlZmF1bHQnXSk7XG5sb2FkZXIuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj5cIjtcblxuY29uc3QgbG9hZGVyQmFja2dyb3VuZCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbG9hZGVyLWJhY2tncm91bmQnXSk7XG5cbmV4cG9ydCB7bG9hZGVyLCBsb2FkZXJCYWNrZ3JvdW5kIGFzIGxvYWRlckJhY2tkcm9wfSIsImltcG9ydCB7IGNyZWF0ZU5ld0VsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBuYXZJdGVtcyA9IFsnSW50cm8nLCAnQWJvdXQnLCAnTWVudSddO1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbm5hdkl0ZW1zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgbGV0IG5ld05hdkl0ZW0gPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ3RhYiddLCBpdGVtLCBcbiAgICAgICAgICAgIHsnaWQnOiBpdGVtLnRvTG93ZXJDYXNlKCl9KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmV3TmF2SXRlbSk7XG59KVxuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXI7IiwiaW1wb3J0IHsgY3JlYXRlTmV3RWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBjb250YWluZXIsIGJhY2tncm91bmQgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBuYXZCYXIgZnJvbSAnLi9uYXZiYXInO1xuXG4vLyBDcmVhdGUgZWxlbWVudHMgb2YgdGhlIGludHJvIHNlcXVlbmNlIGFuZCBtYWluIHBhZ2Vcbi8vIENyZWF0ZSBidXR0b25zXG5leHBvcnQgY29uc3Qgc3RhcnRCdXR0b24gPSBjcmVhdGVOZXdFbGVtZW50KCdidXR0b24nLCBbJ2NsaWNrYWJsZSddLCBcIkVudGVyXCIpO1xuZXhwb3J0IGNvbnN0IHNraXBCdXR0b24gPSBjcmVhdGVOZXdFbGVtZW50KCdidXR0b24nLCBbJ3NraXAnXSwgXCJTa2lwIEludHJvXCIpO1xuXG4vLyBDcmVhdGUgbWFpbiB0ZXh0XG5jb25zdCBwdW5qYWJpID0gY3JlYXRlTmV3RWxlbWVudCgnaDEnLCBbJ3B1bmphYmknXSk7XG5wdW5qYWJpLmlubmVySFRNTCA9ICfgqLLgqL7gqKHgqYAgPHNwYW4+4Kim4KmHPC9zcGFuPiDgqLLgqbHgqKHgqYInO1xuXG5jb25zdCBlbmdsaXNoID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JyxbJ2VuZ2xpc2gnXSk7XG5jb25zdCBlbmdsaXNoVGl0bGUgPSBjcmVhdGVOZXdFbGVtZW50KCdoMScsIG51bGwsIFwiTGFkZGkncyBMYWRkb29zXCIpO1xuY29uc3QgZW5nbGlzaFN1YnRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgncCcsIG51bGwsIFwiLi4uUXVhbGl0eSBTd2VldHMgYW5kIENoYWlcIik7XG5cbmVuZ2xpc2guYXBwZW5kKGVuZ2xpc2hUaXRsZSwgZW5nbGlzaFN1YnRpdGxlKTtcblxuZXhwb3J0IHsgcHVuamFiaSwgZW5nbGlzaCB9XG5cbi8vIEFkZCBldmVudCBoYW5kbGVyIHRvIHRoZSBzdGFydCBidXR0b24gdG8gcGxheSBzZXF1ZW5jZVxuZnVuY3Rpb24gcGxheUludHJvKCkge1xuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3RyYW5zZm9ybWVkJyk7XG5cbiAgICAgICAgYmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2hhbmdlSW1hZ2UpO1xuXG4gICAgICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrYWJsZScpO1xuICAgICAgICBza2lwQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xuICAgIH0pXG5cbiAgICBza2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlbmdsaXNoLmNsYXNzTGlzdC5hZGQoJ3F1aWNrJyk7XG4gICAgICAgIG1ha2VGaW5hbFN0YXRlKCk7XG4gICAgICAgIHNraXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2thYmxlJylcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlSW5pdGlhbFN0YXRlKCkge1xuICAgIHNraXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2thYmxlJyk7XG4gICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XG5cbiAgICBlbmdsaXNoLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgcHVuamFiaS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJywgJ3RyYW5zaXRpb25lZCcpO1xuICAgIGVuZ2xpc2guY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbmVkJywgJ3F1aWNrJyk7XG5cbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zZm9ybWVkJywgJ3NlY29uZC1pbWFnZScsICdmaW5hbCcpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUltYWdlKCkge1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNmb3JtZWQnKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1pbWFnZScsICd0cmFuc2Zvcm1lZCcpO1xuXG4gICAgc2tpcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2FibGUnKTtcblxuICAgIGJhY2tncm91bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNoYW5nZUltYWdlKTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KHN0YXJ0VmlkZW8sIDIwMDApO1xufVxuXG4vLyBQbGF5IHZpZGVvXG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbmZ1bmN0aW9uIHN0YXJ0VmlkZW8oKSB7XG4gICAgLy8gT2RkbHkgdGhpcyB3b24ndCB3b3JrIHVubGVzcyBhbGwgc2V0IGluc2lkZSB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIFwiLi9pbWcvY2hhaS5tcDQjdD0yXCIpXG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBwdW5qYWJpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIHNldFRpbWVvdXQobWFrZUZpbmFsU3RhdGUsIDgwMDApO1xufVxuXG5mdW5jdGlvbiBtYWtlRmluYWxTdGF0ZSgpIHtcbiAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgcHVuamFiaS5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uZWQnKTtcbiAgICBlbmdsaXNoLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb25lZCcpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnc2Vjb25kLWltYWdlJywgJ3RyYW5zZm9ybWVkJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdmaW5hbCcpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgICBlbmdsaXNoLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbn1cblxuZXhwb3J0IHsgcGxheUludHJvLCBtYWtlSW5pdGlhbFN0YXRlLCBtYWtlRmluYWxTdGF0ZSwgY2xlYXJNYWluIH0iLCJpbXBvcnQgeyBjcmVhdGVOZXdFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJndWppeWFcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkd1aml5YVwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4KiX4KmB4Kic4KmA4KiGXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBhc3RyeSB3aXRoIHN3ZWV0IG51dCBmaWxsaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYmFyZmlcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkJlc2FuIEJhcmZpXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqKzgqYfgqLjgqKgg4Kis4Kiw4Kir4KmAXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNsYXNzaWMgc3dlZXQgYW5kIG51dHR5IHRhc3RlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiamFsZWJpXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJKYWxlYmlcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuConOCosuCph+CorOCpgFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZWVwIGZyaWVkIE5vcnRoIEluZGlhbiB0cmVhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm15c29yZS1wYWtcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIk15c29yZSBQYWtcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCoruCpiOCouOCpguCosCDgqKrgqL7gqJVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSByaWNoIGJhcmZpIGZyb20gS2FybmF0YWthXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibWFsYWktcGVkYVwiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiTWFsYWkgUGVkYVwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Kiu4Kiy4Ki+4KiIIOCoquCph+CooeCovlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTd2VldCBjcmVhbSBsYWRkb29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJsYWRvb1wiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiTGFkZG9vXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqLLgqbHgqKHgqYJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiT3JpZ2luYWwgUHVuamFiaSB0YXN0ZVwiLFxuICAgIH0sXG5cbl1cblxuY29uc3QgbWVudSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbWVudSddKTtcblxuY29uc3QgbWVudUhlYWRpbmcgPSBjcmVhdGVOZXdFbGVtZW50KCdoMicsIG51bGwsIFwiTWVudVwiKTtcbmNvbnN0IG1lbnVIZWFkaW5nUHVuamFiaSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3NwYW4nLCBudWxsLCBcIuCoruCpgOCoqOCpglwiKTtcblxuY29uc3QgbWVudVRleHQgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ21lbnVUZXh0J10pO1xuXG5tZW51SGVhZGluZy5hcHBlbmRDaGlsZChtZW51SGVhZGluZ1B1bmphYmkpO1xubWVudS5hcHBlbmQobWVudUhlYWRpbmcsIG1lbnVUZXh0KTtcblxuXG4vLyBDcmVhdGUgZGl2IGZvciBlYWNoIG1lbnUgaXRlbVxubWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgcmVuZGVySXRlbURpdihpdGVtLm5hbWUsIGl0ZW0udGl0bGVFbmdsaXNoLFxuICAgICAgICBpdGVtLnRpdGxlUHVuamFiaSwgaXRlbS5kZXNjcmlwdGlvbik7XG59KVxuXG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW1EaXYobmFtZSwgdGl0bGVFbmdsaXNoLCBcbiAgICAgICAgICAgIHRpdGxlUHVuamFiaSwgZGVzY3JpcHRpb24pIHtcbiAgICBcbiAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICBsZXQgaXRlbURpdiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFtuYW1lXSk7XG5cbiAgICBsZXQgaXRlbVRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgnaDMnLCBudWxsLCB0aXRsZUVuZ2xpc2gpO1xuICAgIGxldCBwdW5qYWJpVGl0bGUgPSBjcmVhdGVOZXdFbGVtZW50KCdzcGFuJywgbnVsbCwgdGl0bGVQdW5qYWJpKTtcblxuICAgIGxldCBpdGVtRGVzY3JpcHRpb24gPSBjcmVhdGVOZXdFbGVtZW50KCdwJywgbnVsbCwgZGVzY3JpcHRpb24pO1xuXG4gICAgLy8gQXBwZW5kXG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKHB1bmphYmlUaXRsZSk7XG4gICAgaXRlbURpdi5hcHBlbmQoaXRlbVRpdGxlLCBpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgbWVudVRleHQuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG59XG5cbi8vIC8vIFRyaWdnZXIgYW5pbWF0aW9uIG9uY2UgbG9hZGVkXG4vLyBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4vLyAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdvbkxvYWQnLCdzaG93Jylcbi8vIH0pO1xuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ29uTG9hZCcsJ3Nob3cnKTtcblxufVxuZnVuY3Rpb24gY2xlYXJNZW51KCkge1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb25Mb2FkJywgJ3Nob3cnKTtcbn1cblxuLy8gRG8geW91IHRoaW5rIHRoZXJlIGlzIGFueSBhZHZhbnRhZ2UgdG8gbWFraW5nIHRoZSBkaXYgYW5kIGFwcGVuZGluZyBpdCBpbiB0aGUgc2FtZSBtb2R1bGU/XG4vLyBCZXNpZGVzIG1lZXRpbmcgc3BlYywgZG9lcyBpdCBoYXZlIGFuIGFkdmFudGFnZSBmb3IgbWVtb3J5P1xuZXhwb3J0IHttZW51LCBzaG93TWVudSwgY2xlYXJNZW51fSIsImltcG9ydCB7IGNyZWF0ZU5ld0VsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBhYm91dEluZm8gPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcImFib3V0LXVzXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJBYm91dCBVc1wiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Ki44Ki+4Kih4KmHIOCorOCovuCosOCph1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1wiQ2hlZiBMYWRkaSBicmluZ3MgdGhlIGZsYXZvdXJzIG9mIEhvc2hpYXB1ciB0byB0aGUgaGVhcnQgb2YgZG93bnRvd24gVmFuY291dmVyLiBXaXRoIGEgZGlzY2VybmluZyBwYWxldHRlIHBlcmZlY3RlZCBvdmVyIHRocmVlIEluZGlhbiBzdGF0ZXMgYW5kIHR3byBDYW5hZGlhbiBwcm92aW5jZXMsIG9ubHkgdGhlIGZyZXNoZXN0IGFuZCBoaWdoZXN0IHF1YWxpdHkgc3dlZXRzIG1ha2UgdGhlIGdyYWRlLiBDb21lIHRhc3RlIGZvciB5b3Vyc2VsZiFcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJjb250YWN0XCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJDb250YWN0XCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqLjgqbDgqKrgqLDgqJVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICAgIFwiNzEyIEdyYW52aWxsZSBTdHJlZXQsIFZhbmNvdXZlciBCQ1wiLFxuICAgICAgICAgICAgXCJlYXRAbGFkZGlzbGFkZG9vcy5jYVwiLFxuICAgICAgICAgICAgXCIoNjA0KSA1NTUtMDE1MFwiXG4gICAgICAgIF1cblxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImhvdXJzXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJIb3VycyBvZiBPcGVyYXRpb25cIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuColeCovuCosOCoteCovuCoiCDgqKbgqYcg4KiY4Kmw4Kif4KmHXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgICBcIk1vbmRheSAmIFR1ZXNkYXk6IENsb3NlZFwiLFxuICAgICAgICAgICAgXCJXZWRuZXNkYXktU3VuZGF5OiA0cG0tMTBwbVwiXG4gICAgICAgIF1cbiAgICB9LFxuXVxuXG4vLyBtZW51IGNsYXNzZXMgaW5jbHVkZWQgdG8gaW5oZXJlbnQgc3R5bGluZ1xuY29uc3QgYWJvdXQgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ2Fib3V0JywgJ21lbnUnXSk7XG5jb25zdCBhYm91dFRleHQgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ2Fib3V0VGV4dCcsICdtZW51VGV4dCddKTtcblxuYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcblxuLy8gUmVuZGVyIGluZm9ybWF0aW9uXG5hYm91dEluZm8uZm9yRWFjaChzZWN0aW9uID0+IHtcblxuICAgIHJlbmRlckluZm9TZWN0aW9uKHNlY3Rpb24ubmFtZSwgc2VjdGlvbi50aXRsZUVuZ2xpc2gsXG4gICAgICAgIHNlY3Rpb24udGl0bGVQdW5qYWJpLCBzZWN0aW9uLmRlc2NyaXB0aW9uKTtcblxufSlcblxuXG5mdW5jdGlvbiByZW5kZXJJbmZvU2VjdGlvbihuYW1lLCB0aXRsZUVuZ2xpc2gsIFxuICAgICAgICAgICAgdGl0bGVQdW5qYWJpLCBkZXNjcmlwdGlvbikge1xuICAgIFxuICAgIGxldCBzZWN0aW9uRGl2ID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgW25hbWVdKTtcbiAgICBsZXQgc2VjdGlvblRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgnaDMnLCBudWxsLCB0aXRsZUVuZ2xpc2gpO1xuICAgIGxldCBwdW5qYWJpVGl0bGUgPSBjcmVhdGVOZXdFbGVtZW50KCdzcGFuJywgbnVsbCwgdGl0bGVQdW5qYWJpKTtcbiAgICBcbiAgICBzZWN0aW9uVGl0bGUuYXBwZW5kQ2hpbGQocHVuamFiaVRpdGxlKTtcbiAgICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG5cbiAgICBkZXNjcmlwdGlvbi5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBsZXQgc2VjdGlvbkRlc2NyaXB0aW9uID0gY3JlYXRlTmV3RWxlbWVudCgncCcsIG51bGwsIGxpbmUpO1xuICAgICAgICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY3Rpb25EZXNjcmlwdGlvbik7XG4gICAgfSlcblxuICAgIGFib3V0VGV4dC5hcHBlbmRDaGlsZChzZWN0aW9uRGl2KTtcbn1cblxuZnVuY3Rpb24gc2hvd0Fib3V0KCkge1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ29uTG9hZCcpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBYm91dCgpIHtcbiAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdvbkxvYWQnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmV4cG9ydCB7YWJvdXQsIHNob3dBYm91dCwgY2xlYXJBYm91dH0iLCJpbXBvcnQgbmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCB7IGxvYWRlciwgbG9hZGVyQmFja2Ryb3AgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHN0YXJ0QnV0dG9uLCBza2lwQnV0dG9uLCBwdW5qYWJpLCBlbmdsaXNoLCBwbGF5SW50cm8gfSBmcm9tICcuL2ludHJvLmpzJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2Fib3V0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIC8vIENyZWF0ZSBhbmQgcmVuZGVyIGJhY2tncm91bmRcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuXG4gICAgLy8gUmVuZGVyIGxvYWRlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkZXJCYWNrZHJvcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRlcik7XG5cbiAgICAvLyBSZW5kZXIgTmF2IEJhclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgLy8gUmVuZGVyIGJ1dHRvbnNcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblxuICAgIC8vIFJlbmRlciBpbnRybyB0ZXh0XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHB1bmphYmkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmdsaXNoKTtcblxuICAgIC8vIFNob3cgdGhlIGxvYWRpbmcgYW5pbWF0aW9uIHVudGlsIHBhZ2UgaXMgbG9hZGVkLCBwbHVzIGJ1ZmZlclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGxvYWRlckJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIFxuICAgIH0pXG5cbiAgICAvLyBQbGF5IGludHJvIHZpYSBzZXR0aW5nIHVwIGV2ZW50IExpc3RlbmVyc1xuICAgIHBsYXlJbnRybygpO1xuXG4gICAgLy8gSW50cm8gdGFiIHNob3VsZCBiZSBoaWdobGlnaHRlZFxuICAgIGNvbnN0IGludHJvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvJyk7XG4gICAgaW50cm9UYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgLy8gUmVuZGVyIG1lbnVcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgLy8gUmVuZGVyIGFib3V0XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIHJldHVybiBbY29udGFpbmVyLCBiYWNrZ3JvdW5kXTtcbn1cbiIsImltcG9ydCBcIi4vY3NzL2xvYWRpbmctaW8uY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9pbnRyby5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL21lbnUtYWJvdXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9tb2JpbGUuY3NzXCI7XG5cbmltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSAnLi9pbml0aWFsUGFnZUxvYWQnO1xuaW1wb3J0IHsgbWFrZUluaXRpYWxTdGF0ZSwgY2xlYXJNYWluIH0gZnJvbSBcIi4vaW50cm9cIjtcbmltcG9ydCB7IHNob3dBYm91dCwgY2xlYXJBYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IHsgc2hvd01lbnUsIGNsZWFyTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBhZGp1c3RGb250U2l6ZXMgfSBmcm9tICcuL3V0aWxzJztcblxuLy8gRXhwb3J0aW5nIGZvciB1c2UgaW4gdGhlIGludHJvIHNlcXVlbmNlIG9uY2UgcGFnZSBsb2FkIGZ1bmN0aW9uIGlzIHJ1blxuZXhwb3J0IGNvbnN0IFtjb250YWluZXIsIGJhY2tncm91bmRdID0gaW5pdGlhbFBhZ2VMb2FkKCk7XG5cbi8vIElkZW50aWZ5IHRhYnMgLSBjb3VsZCBwb3NzaWJseSBjaGFuZ2UgdGhpcyB0byBhbiBleHBvcnQgZnJvbSBuYXZCYXJcbmNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbmNvbnN0IGludHJvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvJyk7XG5cbi8vIEludHJvIHRhYlxuaW50cm9UYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJBY3RpdmVUYWIoKTtcbiAgICBpbnRyb1RhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgY2xlYXJNZW51KCk7XG4gICAgY2xlYXJBYm91dCgpO1xuICAgIG1ha2VJbml0aWFsU3RhdGUoKTtcbn0pO1xuXG4vLyBBYm91dCB0YWJcbmFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQWN0aXZlVGFiKCk7XG4gICAgYWJvdXRUYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIGNsZWFyTWFpbigpO1xuICAgIGNsZWFyTWVudSgpO1xuICAgIHNob3dBYm91dCgpO1xufSk7XG5cbi8vIE1lbnUgVGFiXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQWN0aXZlVGFiKCk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgY2xlYXJNYWluKCk7XG4gICAgY2xlYXJBYm91dCgpO1xuICAgIHNob3dNZW51KCk7XG59KTtcblxuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuZnVuY3Rpb24gY2xlYXJBY3RpdmVUYWIoKSB7XG4gICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICB9XG59XG5cbmFkanVzdEZvbnRTaXplcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==