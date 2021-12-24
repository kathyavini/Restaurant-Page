import createNewElement from "./utils";

const navItems = ['Intro', 'About', 'Menu'];
const navBar = document.createElement('nav');

navItems.forEach( (item) => {
    let newNavItem = createNewElement('div', ['tab'], item, 
            {'id': item.toLowerCase()});
    navBar.appendChild(newNavItem);
})

export default navBar;