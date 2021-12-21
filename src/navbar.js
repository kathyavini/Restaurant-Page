const navItems = ['Intro', 'About', 'Menu'];
const navBar = document.createElement('nav');

navItems.forEach( (item) => {

    // Create navigation divs
    let newNavItem = document.createElement('div');
    newNavItem.classList.add('tab');
    newNavItem.setAttribute('id', item.toLowerCase());
    newNavItem.textContent = item;
    navBar.appendChild(newNavItem);
})


export default navBar;