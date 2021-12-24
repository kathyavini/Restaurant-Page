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

export {createNewElement, adjustFontSizes}

// Loading animation
const loader = createNewElement('div', ['loader', 'lds-default']);

loader.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";

const loaderBackground = createNewElement('div', ['loader-background']);

export {loader, loaderBackground as loaderBackdrop}