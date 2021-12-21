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

// Render container
const menu = document.createElement('div');
menu.classList.add('menu');

const menuHeading = document.createElement('h2');
menuHeading.innerHTML = "Menu <span>ਮੀਨੂ</span>";
menu.appendChild(menuHeading);

const menuText = document.createElement('div');
menuText.classList.add('menuText');
menu.appendChild(menuText);

// Render items

menuItems.forEach(item => {
    renderMenuItem(item.name, item.titleEnglish,
        item.titlePunjabi, item.description);
})


function renderMenuItem(name, titleEnglish, 
            titlePunjabi, description) {
    
    let itemDiv = document.createElement('div');
    itemDiv.classList.add(name);

    let itemTitle = document.createElement('h3');
    itemTitle.textContent = titleEnglish;
    let punjabiTitle = document.createElement('span');
    punjabiTitle.textContent = titlePunjabi;
    itemTitle.appendChild(punjabiTitle);

    let itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemDescription);

    menuText.appendChild(itemDiv);
}

function showMenu() {
    menu.classList.add('onLoad');
    menu.classList.add('show');
}
function clearMenu() {
    menu.classList.remove('onLoad');
    menu.classList.remove('show');

}

export {menu, showMenu, clearMenu}