// A small font size adjust for phones (sorry)

export default function adjustFontSizes() {
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
