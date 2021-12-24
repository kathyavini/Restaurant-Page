import createNewElement from "./utils";

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
export {menu, showMenu, clearMenu}