const navItems = ['Home', 'About', 'Menu'];
const navBar = document.createElement('nav');

navItems.forEach( (item, index) => {

    // Create navigation divs
    let newNavItem = document.createElement('div');
    newNavItem.classList.add('tab');
    newNavItem.setAttribute('id', item);
    newNavItem.textContent = item;
    navBar.appendChild(newNavItem);

    // Append dividers
    if (index !== navItems.length - 1) {
        let newDivider = document.createElement('div');
        newDivider.classList.add('divider');
        newDivider.style.flex = 'none';
        navBar.appendChild(newDivider);
    }
})

export default navBar;
