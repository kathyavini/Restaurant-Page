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
// Curious if this makes DOM creation more resource intensive?
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
;// CONCATENATED MODULE: ./src/navbar.js


const navItems = ['Intro', 'About', 'Menu'];
const navBar = document.createElement('nav');

navItems.forEach( (item) => {
    let newNavItem = createNewElement('div', ['tab'], item, 
            {'id': item.toLowerCase()});
    navBar.appendChild(newNavItem);
})

/* harmony default export */ const navbar = (navBar);
;// CONCATENATED MODULE: ./src/loading-animation.js


const loader = createNewElement('div', ['loader', 'lds-default']);
loader.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";

const loaderBackground = createNewElement('div', ['loader-background']);


;// CONCATENATED MODULE: ./src/buttons.js
const startButton = document.createElement('button');
startButton.textContent = "Enter";

const skipButton = document.createElement('button');
skipButton.classList.add('skip');
skipButton.textContent = "Skip Intro";


;// CONCATENATED MODULE: ./src/introText.js
const punjabi = document.createElement('h1');
punjabi.classList.add('punjabi');
punjabi.innerHTML = 'ਲਾਡੀ <span>ਦੇ</span> ਲੱਡੂ';

const english = document.createElement('div');
english.classList.add('english');

const englishTitle = document.createElement('h1');
englishTitle.textContent = "Laddi's Laddoos";

const englishSubtitle = document.createElement('p');
englishSubtitle.textContent = "...Quality Sweets and Chai";

english.appendChild(englishTitle);
english.appendChild(englishSubtitle);


;// CONCATENATED MODULE: ./src/intro.js






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
    navbar.classList.remove('visible');
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

;// CONCATENATED MODULE: ./src/font-adjust.js
// A small font size adjust for phones (sorry)

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

;// CONCATENATED MODULE: ./src/index.js













// Exporting for use in the intro sequence once page load function is run
const [container, background] = initialPageLoad();

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ2U7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUNyQnVDOztBQUV2QztBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQyxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLENBQUM7O0FBRUQsNkNBQWUsTUFBTTs7QUNYa0I7O0FBRXZDLGVBQWUsZ0JBQWdCO0FBQy9COztBQUVBLHlCQUF5QixnQkFBZ0I7Ozs7QUNMekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUNib0Q7QUFDRDtBQUNEO0FBQ3BCOztBQUU5QjtBQUNBO0FBQ0EsSUFBSSw0QkFBNEI7QUFDaEMsUUFBUSx3QkFBd0I7O0FBRWhDLFFBQVEsMkJBQTJCOztBQUVuQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLHdCQUF3QjtBQUNoQyxRQUFRLDhCQUE4QjtBQUN0QyxLQUFLOztBQUVMLElBQUksMkJBQTJCO0FBQy9CLFFBQVEscUJBQXFCO0FBQzdCO0FBQ0EsUUFBUSx3QkFBd0I7QUFDaEMsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSw4QkFBOEI7QUFDbEMsSUFBSSx5QkFBeUI7QUFDN0IsSUFBSSwrQkFBK0I7O0FBRW5DLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCOztBQUU1QixJQUFJLDJCQUEyQjtBQUMvQixJQUFJLHVCQUF1QjtBQUMzQjs7QUFFQTtBQUNBLElBQUksMkJBQTJCO0FBQy9CLElBQUksd0JBQXdCOztBQUU1QixJQUFJLHdCQUF3QjtBQUM1QixJQUFJLDhCQUE4Qjs7QUFFbEMsSUFBSSw4QkFBOEI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUJBQXFCO0FBQ3pCO0FBQ0EsSUFBSSxxQkFBcUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkscUJBQXFCO0FBQ3pCLElBQUkscUJBQXFCO0FBQ3pCLElBQUksMkJBQTJCO0FBQy9CLElBQUksd0JBQXdCO0FBQzVCLElBQUksb0JBQW9CO0FBQ3hCOztBQUVBO0FBQ0EsSUFBSSx3QkFBd0I7QUFDNUI7Ozs7QUM3RXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxhQUFhLGdCQUFnQjs7QUFFN0Isb0JBQW9CLGdCQUFnQjtBQUNwQywyQkFBMkIsZ0JBQWdCOztBQUUzQyxpQkFBaUIsZ0JBQWdCOztBQUVqQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjs7QUFFbEMsb0JBQW9CLGdCQUFnQjtBQUNwQyx1QkFBdUIsZ0JBQWdCOztBQUV2QywwQkFBMEIsZ0JBQWdCOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FDNUZ1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCLGtCQUFrQixnQkFBZ0I7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDLHVCQUF1QixnQkFBZ0I7QUFDdkMsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeEU4QjtBQUMrQjtBQUNUO0FBQ0Y7QUFDWjtBQUNSO0FBQ0U7OztBQUdqQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGdCQUFjO0FBQ3hDLDBCQUEwQixNQUFNOztBQUVoQztBQUNBLDBCQUEwQixNQUFNOztBQUVoQztBQUNBLDBCQUEwQixXQUFXO0FBQ3JDLDBCQUEwQixVQUFVOztBQUVwQztBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLDBCQUEwQixPQUFPOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQyxZQUFZLDhCQUE0QjtBQUN4QyxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSSxTQUFTOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixJQUFJO0FBQzlCO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSzs7QUFFL0I7QUFDQTs7O0FDdkRBOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FDaEI4QjtBQUNKO0FBQ0Q7QUFDSztBQUNKOztBQUVzQjtBQUNSO0FBQ2E7QUFDTDtBQUNIO0FBQ0Q7O0FBRTVDO0FBQ08sZ0NBQWdDLGVBQWU7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxTQUFTO0FBQ2IsSUFBSSxVQUFVO0FBQ2QsSUFBSSxnQkFBZ0I7QUFDcEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0JBQStCO0FBQ25DLElBQUksU0FBUztBQUNiLElBQUksU0FBUztBQUNiLElBQUksU0FBUztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtCQUErQjtBQUNuQyxJQUFJLFNBQVM7QUFDYixJQUFJLFVBQVU7QUFDZCxJQUFJLFFBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRpbmctYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9idXR0b25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnRyb1RleHQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludHJvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb250LWFkanVzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBDdXJpb3VzIGlmIHRoaXMgbWFrZXMgRE9NIGNyZWF0aW9uIG1vcmUgcmVzb3VyY2UgaW50ZW5zaXZlP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmV3RWxlbWVudCAoIFxuICAgICAgICAgICAgdHlwZSwgY2xhc3NlcyA9IG51bGwsIHRleHQgPSBudWxsLCBhdHRyaWJ1dGVzID0gbnVsbCkge1xuXG4gICAgbGV0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmIChjbGFzc2VzKSB7XG4gICAgICAgIGNyZWF0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgY3JlYXRlZEVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjcmVhdGVkRWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlZEVsZW1lbnQ7XG59IiwiaW1wb3J0IGNyZWF0ZU5ld0VsZW1lbnQgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgbmF2SXRlbXMgPSBbJ0ludHJvJywgJ0Fib3V0JywgJ01lbnUnXTtcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG5uYXZJdGVtcy5mb3JFYWNoKCAoaXRlbSkgPT4ge1xuICAgIGxldCBuZXdOYXZJdGVtID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWyd0YWInXSwgaXRlbSwgXG4gICAgICAgICAgICB7J2lkJzogaXRlbS50b0xvd2VyQ2FzZSgpfSk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5ld05hdkl0ZW0pO1xufSlcblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyOyIsImltcG9ydCBjcmVhdGVOZXdFbGVtZW50IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IGxvYWRlciA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbG9hZGVyJywgJ2xkcy1kZWZhdWx0J10pO1xubG9hZGVyLmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+XCI7XG5cbmNvbnN0IGxvYWRlckJhY2tncm91bmQgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ2xvYWRlci1iYWNrZ3JvdW5kJ10pO1xuXG5leHBvcnQge2xvYWRlciwgbG9hZGVyQmFja2dyb3VuZCBhcyBsb2FkZXJCYWNrZHJvcH0iLCJjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVudGVyXCI7XG5cbmNvbnN0IHNraXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnNraXBCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2tpcCcpO1xuc2tpcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2tpcCBJbnRyb1wiO1xuXG5leHBvcnQge3N0YXJ0QnV0dG9uLCBza2lwQnV0dG9ufTsiLCJjb25zdCBwdW5qYWJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnB1bmphYmkuY2xhc3NMaXN0LmFkZCgncHVuamFiaScpO1xucHVuamFiaS5pbm5lckhUTUwgPSAn4Kiy4Ki+4Kih4KmAIDxzcGFuPuCopuCphzwvc3Bhbj4g4Kiy4Kmx4Kih4KmCJztcblxuY29uc3QgZW5nbGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZW5nbGlzaC5jbGFzc0xpc3QuYWRkKCdlbmdsaXNoJyk7XG5cbmNvbnN0IGVuZ2xpc2hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5lbmdsaXNoVGl0bGUudGV4dENvbnRlbnQgPSBcIkxhZGRpJ3MgTGFkZG9vc1wiO1xuXG5jb25zdCBlbmdsaXNoU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5lbmdsaXNoU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIi4uLlF1YWxpdHkgU3dlZXRzIGFuZCBDaGFpXCI7XG5cbmVuZ2xpc2guYXBwZW5kQ2hpbGQoZW5nbGlzaFRpdGxlKTtcbmVuZ2xpc2guYXBwZW5kQ2hpbGQoZW5nbGlzaFN1YnRpdGxlKTtcblxuZXhwb3J0IHtwdW5qYWJpLCBlbmdsaXNofSIsIlxuaW1wb3J0IHsgc3RhcnRCdXR0b24sIHNraXBCdXR0b24gfSBmcm9tICcuL2J1dHRvbnMnO1xuaW1wb3J0IHsgY29udGFpbmVyLCBiYWNrZ3JvdW5kIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgeyBwdW5qYWJpLCBlbmdsaXNoIH0gZnJvbSAnLi9pbnRyb1RleHQuanMnO1xuaW1wb3J0IG5hdkJhciBmcm9tICcuL25hdmJhcic7XG5cbmZ1bmN0aW9uIHBsYXlJbnRybygpIHtcbiAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzIHRvIGJ1dHRvbnNcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm1lZCcpO1xuXG4gICAgICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNoYW5nZUltYWdlKTtcblxuICAgICAgICBzdGFydEJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBzdGFydEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBza2lwQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHNraXBCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJztcbiAgICB9KVxuXG4gICAgc2tpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZW5nbGlzaC5jbGFzc0xpc3QuYWRkKCdxdWljaycpO1xuICAgICAgICBtYWtlRmluYWxTdGF0ZSgpO1xuICAgICAgICBza2lwQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUluaXRpYWxTdGF0ZSgpIHtcbiAgICBza2lwQnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgc3RhcnRCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBzdGFydEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnO1xuXG4gICAgZW5nbGlzaC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIHB1bmphYmkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScsICd0cmFuc2l0aW9uZWQnKTtcbiAgICBlbmdsaXNoLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb25lZCcsICdxdWljaycpO1xuXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm1lZCcsICdzZWNvbmQtaW1hZ2UnLCAnZmluYWwnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zZm9ybWVkJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtaW1hZ2UnLCAndHJhbnNmb3JtZWQnKTtcblxuICAgIHNraXBCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBza2lwQnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICBiYWNrZ3JvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjaGFuZ2VJbWFnZSk7XG4gICAgXG4gICAgc2V0VGltZW91dChzdGFydFZpZGVvLCAyMDAwKTtcbn1cblxuLy8gUGxheSB2aWRlb1xuY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG5mdW5jdGlvbiBzdGFydFZpZGVvKCkge1xuICAgIC8vIE9kZGx5IHRoaXMgd29uJ3Qgd29yayB1bmxlc3MgYWxsIHNldCBpbnNpZGUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCBcIi4vaW1nL2NoYWkubXA0I3Q9MlwiKVxuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgcHVuamFiaS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cbiAgICBzZXRUaW1lb3V0KG1ha2VGaW5hbFN0YXRlLCA4MDAwKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZpbmFsU3RhdGUoKSB7XG4gICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIHB1bmphYmkuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbmVkJyk7XG4gICAgZW5nbGlzaC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uZWQnKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3NlY29uZC1pbWFnZScsICd0cmFuc2Zvcm1lZCcpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZmluYWwnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBjbGVhck1haW4oKSB7XG4gICAgZW5nbGlzaC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG59XG5cbmV4cG9ydCB7IHBsYXlJbnRybywgbWFrZUluaXRpYWxTdGF0ZSwgbWFrZUZpbmFsU3RhdGUsIGNsZWFyTWFpbiB9IiwiaW1wb3J0IGNyZWF0ZU5ld0VsZW1lbnQgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJndWppeWFcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkd1aml5YVwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4KiX4KmB4Kic4KmA4KiGXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBhc3RyeSB3aXRoIHN3ZWV0IG51dCBmaWxsaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYmFyZmlcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkJlc2FuIEJhcmZpXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqKzgqYfgqLjgqKgg4Kis4Kiw4Kir4KmAXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNsYXNzaWMgc3dlZXQgYW5kIG51dHR5IHRhc3RlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiamFsZWJpXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJKYWxlYmlcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuConOCosuCph+CorOCpgFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZWVwIGZyaWVkIE5vcnRoIEluZGlhbiB0cmVhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm15c29yZS1wYWtcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIk15c29yZSBQYWtcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCoruCpiOCouOCpguCosCDgqKrgqL7gqJVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSByaWNoIGJhcmZpIGZyb20gS2FybmF0YWthXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibWFsYWktcGVkYVwiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiTWFsYWkgUGVkYVwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Kiu4Kiy4Ki+4KiIIOCoquCph+CooeCovlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTd2VldCBjcmVhbSBsYWRkb29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJsYWRvb1wiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiTGFkZG9vXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqLLgqbHgqKHgqYJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiT3JpZ2luYWwgUHVuamFiaSB0YXN0ZVwiLFxuICAgIH0sXG5cbl1cblxuY29uc3QgbWVudSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbWVudSddKTtcblxuY29uc3QgbWVudUhlYWRpbmcgPSBjcmVhdGVOZXdFbGVtZW50KCdoMicsIG51bGwsIFwiTWVudVwiKTtcbmNvbnN0IG1lbnVIZWFkaW5nUHVuamFiaSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3NwYW4nLCBudWxsLCBcIuCoruCpgOCoqOCpglwiKTtcblxuY29uc3QgbWVudVRleHQgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ21lbnVUZXh0J10pO1xuXG5tZW51SGVhZGluZy5hcHBlbmRDaGlsZChtZW51SGVhZGluZ1B1bmphYmkpO1xubWVudS5hcHBlbmQobWVudUhlYWRpbmcsIG1lbnVUZXh0KTtcblxuXG4vLyBDcmVhdGUgZGl2IGZvciBlYWNoIG1lbnUgaXRlbVxubWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgcmVuZGVySXRlbURpdihpdGVtLm5hbWUsIGl0ZW0udGl0bGVFbmdsaXNoLFxuICAgICAgICBpdGVtLnRpdGxlUHVuamFiaSwgaXRlbS5kZXNjcmlwdGlvbik7XG59KVxuXG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW1EaXYobmFtZSwgdGl0bGVFbmdsaXNoLCBcbiAgICAgICAgICAgIHRpdGxlUHVuamFiaSwgZGVzY3JpcHRpb24pIHtcbiAgICBcbiAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICBsZXQgaXRlbURpdiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFtuYW1lXSk7XG5cbiAgICBsZXQgaXRlbVRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgnaDMnLCBudWxsLCB0aXRsZUVuZ2xpc2gpO1xuICAgIGxldCBwdW5qYWJpVGl0bGUgPSBjcmVhdGVOZXdFbGVtZW50KCdzcGFuJywgbnVsbCwgdGl0bGVQdW5qYWJpKTtcblxuICAgIGxldCBpdGVtRGVzY3JpcHRpb24gPSBjcmVhdGVOZXdFbGVtZW50KCdwJywgbnVsbCwgZGVzY3JpcHRpb24pO1xuXG4gICAgLy8gQXBwZW5kXG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKHB1bmphYmlUaXRsZSk7XG4gICAgaXRlbURpdi5hcHBlbmQoaXRlbVRpdGxlLCBpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgbWVudVRleHQuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG59XG5cbi8vIC8vIFRyaWdnZXIgYW5pbWF0aW9uIG9uY2UgbG9hZGVkXG4vLyBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4vLyAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdvbkxvYWQnLCdzaG93Jylcbi8vIH0pO1xuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ29uTG9hZCcsJ3Nob3cnKTtcblxufVxuZnVuY3Rpb24gY2xlYXJNZW51KCkge1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb25Mb2FkJywgJ3Nob3cnKTtcbn1cblxuLy8gRG8geW91IHRoaW5rIHRoZXJlIGlzIGFueSBhZHZhbnRhZ2UgdG8gbWFraW5nIHRoZSBkaXYgYW5kIGFwcGVuZGluZyBpdCBpbiB0aGUgc2FtZSBtb2R1bGU/XG4vLyBCZXNpZGVzIG1lZXRpbmcgc3BlYywgZG9lcyBpdCBoYXZlIGFuIGFkdmFudGFnZSBmb3IgbWVtb3J5P1xuZXhwb3J0IHttZW51LCBzaG93TWVudSwgY2xlYXJNZW51fSIsImltcG9ydCBjcmVhdGVOZXdFbGVtZW50IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IGFib3V0SW5mbyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYWJvdXQtdXNcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkFib3V0IFVzXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqLjgqL7gqKHgqYcg4Kis4Ki+4Kiw4KmHXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXCJDaGVmIExhZGRpIGJyaW5ncyB0aGUgZmxhdm91cnMgb2YgSG9zaGlhcHVyIHRvIHRoZSBoZWFydCBvZiBkb3dudG93biBWYW5jb3V2ZXIuIFdpdGggYSBkaXNjZXJuaW5nIHBhbGV0dGUgcGVyZmVjdGVkIG92ZXIgdGhyZWUgSW5kaWFuIHN0YXRlcyBhbmQgdHdvIENhbmFkaWFuIHByb3ZpbmNlcywgb25seSB0aGUgZnJlc2hlc3QgYW5kIGhpZ2hlc3QgcXVhbGl0eSBzd2VldHMgbWFrZSB0aGUgZ3JhZGUuIENvbWUgdGFzdGUgZm9yIHlvdXJzZWxmIVwiXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImNvbnRhY3RcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkNvbnRhY3RcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCouOCpsOCoquCosOColVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgICAgXCI3MTIgR3JhbnZpbGxlIFN0cmVldCwgVmFuY291dmVyIEJDXCIsXG4gICAgICAgICAgICBcImVhdEBsYWRkaXNsYWRkb29zLmNhXCIsXG4gICAgICAgICAgICBcIig2MDQpIDU1NS0wMTUwXCJcbiAgICAgICAgXVxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiaG91cnNcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkhvdXJzIG9mIE9wZXJhdGlvblwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4KiV4Ki+4Kiw4Ki14Ki+4KiIIOCopuCphyDgqJjgqbDgqJ/gqYdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICAgIFwiTW9uZGF5ICYgVHVlc2RheTogQ2xvc2VkXCIsXG4gICAgICAgICAgICBcIldlZG5lc2RheS1TdW5kYXk6IDRwbS0xMHBtXCJcbiAgICAgICAgXVxuICAgIH0sXG5dXG5cbi8vIG1lbnUgY2xhc3NlcyBpbmNsdWRlZCB0byBpbmhlcmVudCBzdHlsaW5nXG5jb25zdCBhYm91dCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnYWJvdXQnLCAnbWVudSddKTtcbmNvbnN0IGFib3V0VGV4dCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnYWJvdXRUZXh0JywgJ21lbnVUZXh0J10pO1xuXG5hYm91dC5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuXG4vLyBSZW5kZXIgaW5mb3JtYXRpb25cbmFib3V0SW5mby5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuXG4gICAgcmVuZGVySW5mb1NlY3Rpb24oc2VjdGlvbi5uYW1lLCBzZWN0aW9uLnRpdGxlRW5nbGlzaCxcbiAgICAgICAgc2VjdGlvbi50aXRsZVB1bmphYmksIHNlY3Rpb24uZGVzY3JpcHRpb24pO1xuXG59KVxuXG5cbmZ1bmN0aW9uIHJlbmRlckluZm9TZWN0aW9uKG5hbWUsIHRpdGxlRW5nbGlzaCwgXG4gICAgICAgICAgICB0aXRsZVB1bmphYmksIGRlc2NyaXB0aW9uKSB7XG4gICAgXG4gICAgbGV0IHNlY3Rpb25EaXYgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbbmFtZV0pO1xuICAgIGxldCBzZWN0aW9uVGl0bGUgPSBjcmVhdGVOZXdFbGVtZW50KCdoMycsIG51bGwsIHRpdGxlRW5nbGlzaCk7XG4gICAgbGV0IHB1bmphYmlUaXRsZSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3NwYW4nLCBudWxsLCB0aXRsZVB1bmphYmkpO1xuICAgIFxuICAgIHNlY3Rpb25UaXRsZS5hcHBlbmRDaGlsZChwdW5qYWJpVGl0bGUpO1xuICAgIHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlKTtcblxuICAgIGRlc2NyaXB0aW9uLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgIGxldCBzZWN0aW9uRGVzY3JpcHRpb24gPSBjcmVhdGVOZXdFbGVtZW50KCdwJywgbnVsbCwgbGluZSk7XG4gICAgICAgIHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbkRlc2NyaXB0aW9uKTtcbiAgICB9KVxuXG4gICAgYWJvdXRUZXh0LmFwcGVuZENoaWxkKHNlY3Rpb25EaXYpO1xufVxuXG5mdW5jdGlvbiBzaG93QWJvdXQoKSB7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xufVxuXG5mdW5jdGlvbiBjbGVhckFib3V0KCkge1xuICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ29uTG9hZCcpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbn1cblxuZXhwb3J0IHthYm91dCwgc2hvd0Fib3V0LCBjbGVhckFib3V0fSIsImltcG9ydCBuYXZCYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IHsgbG9hZGVyLCBsb2FkZXJCYWNrZHJvcCB9IGZyb20gJy4vbG9hZGluZy1hbmltYXRpb24nO1xuaW1wb3J0IHsgc3RhcnRCdXR0b24sIHNraXBCdXR0b24gfSBmcm9tICcuL2J1dHRvbnMnO1xuaW1wb3J0IHsgcHVuamFiaSwgZW5nbGlzaCB9IGZyb20gJy4vaW50cm9UZXh0LmpzJztcbmltcG9ydCB7IHBsYXlJbnRybyB9IGZyb20gXCIuL2ludHJvLmpzXCJcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2Fib3V0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIC8vIENyZWF0ZSBhbmQgcmVuZGVyIGJhY2tncm91bmRcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuXG4gICAgLy8gUmVuZGVyIGxvYWRlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkZXJCYWNrZHJvcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRlcik7XG5cbiAgICAvLyBSZW5kZXIgTmF2IEJhclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgLy8gUmVuZGVyIGJ1dHRvbnNcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblxuICAgIC8vIFJlbmRlciBpbnRybyB0ZXh0XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHB1bmphYmkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmdsaXNoKTtcblxuICAgIC8vIFNob3cgdGhlIGxvYWRpbmcgYW5pbWF0aW9uIHVudGlsIHBhZ2UgaXMgbG9hZGVkLCBwbHVzIGJ1ZmZlclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGxvYWRlckJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIFxuICAgIH0pXG5cbiAgICAvLyBQbGF5IGludHJvIHZpYSBzZXR0aW5nIHVwIGV2ZW50IExpc3RlbmVyc1xuICAgIHBsYXlJbnRybygpO1xuXG4gICAgLy8gSW50cm8gdGFiIHNob3VsZCBiZSBoaWdobGlnaHRlZFxuICAgIGNvbnN0IGludHJvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvJyk7XG4gICAgaW50cm9UYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgLy8gUmVuZGVyIG1lbnVcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgLy8gUmVuZGVyIGFib3V0XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIHJldHVybiBbY29udGFpbmVyLCBiYWNrZ3JvdW5kXTtcbn1cbiIsIi8vIEEgc21hbGwgZm9udCBzaXplIGFkanVzdCBmb3IgcGhvbmVzIChzb3JyeSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRqdXN0Rm9udFNpemVzKCkge1xuICAgIGNvbnN0IHRvdWNoID0gbWF0Y2hNZWRpYSgnKGhvdmVyOiBub25lKScpLm1hdGNoZXM7XG5cbiAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgbGV0IGFsbEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG4gICAgICAgIGxldCBjb21wdXRlZEZvbnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhbGxIVE1MLCBcbiAgICAgICAgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJykuc2xpY2UoMCwtMik7XG5cbiAgICAgICAgaWYgKGNvbXB1dGVkRm9udCA+IDIwKSB7XG4gICAgICAgICAgICBhbGxIVE1MLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXB1dGVkRm9udCA8PSAxNiApIHtcbiAgICAgICAgICAgIGFsbEhUTUwuc3R5bGUuZm9udFNpemUgPSAnMThweCc7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgXCIuL2Nzcy9sb2FkaW5nLWlvLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaW50cm8uY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9tZW51LWFib3V0LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbW9iaWxlLmNzc1wiO1xuXG5pbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gJy4vaW5pdGlhbFBhZ2VMb2FkJztcbmltcG9ydCB7IHN0YXJ0QnV0dG9uIH0gZnJvbSAnLi9idXR0b25zJztcbmltcG9ydCB7IG1ha2VJbml0aWFsU3RhdGUsIGNsZWFyTWFpbn0gZnJvbSBcIi4vaW50cm9cIjtcbmltcG9ydCB7IHNob3dBYm91dCwgY2xlYXJBYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IHsgc2hvd01lbnUsIGNsZWFyTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYWRqdXN0Rm9udFNpemVzIGZyb20gJy4vZm9udC1hZGp1c3QnO1xuXG4vLyBFeHBvcnRpbmcgZm9yIHVzZSBpbiB0aGUgaW50cm8gc2VxdWVuY2Ugb25jZSBwYWdlIGxvYWQgZnVuY3Rpb24gaXMgcnVuXG5leHBvcnQgY29uc3QgW2NvbnRhaW5lciwgYmFja2dyb3VuZF0gPSBpbml0aWFsUGFnZUxvYWQoKTtcblxuLy8gSWRlbnRpZnkgdGFicyAtIGNvdWxkIHBvc3NpYmx5IGNoYW5nZSB0aGlzIHRvIGFuIGV4cG9ydCBmcm9tIG5hdkJhclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcblxuY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuY29uc3QgaW50cm9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW50cm8nKTtcblxuLy8gSW50cm8gdGFiXG5pbnRyb1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckFjdGl2ZVRhYigpO1xuICAgIGludHJvVGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICBjbGVhck1lbnUoKTtcbiAgICBjbGVhckFib3V0KCk7XG4gICAgbWFrZUluaXRpYWxTdGF0ZSgpO1xufSk7XG5cbi8vIEFib3V0IHRhYlxuYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJBY3RpdmVUYWIoKTtcbiAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgc3RhcnRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBjbGVhck1haW4oKTtcbiAgICBjbGVhck1lbnUoKTtcbiAgICBzaG93QWJvdXQoKTtcbn0pO1xuXG4vLyBNZW51IFRhYlxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckFjdGl2ZVRhYigpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIHN0YXJ0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgY2xlYXJNYWluKCk7XG4gICAgY2xlYXJBYm91dCgpO1xuICAgIHNob3dNZW51KCk7XG59KTtcblxuZnVuY3Rpb24gY2xlYXJBY3RpdmVUYWIoKSB7XG4gICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICB9XG59XG5cbmFkanVzdEZvbnRTaXplcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==