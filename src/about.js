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

// Render in the menu
const about = document.createElement('div');
about.classList.add('about');
about.classList.add('menu'); // to inherent styling

const aboutText = document.createElement('div');
aboutText.classList.add('aboutText');
aboutText.classList.add('menuText'); // to inherent styling
about.appendChild(aboutText);

// Render information
aboutInfo.forEach(section => {

    renderInfoSection(section.name, section.titleEnglish,
        section.titlePunjabi, section.description);
})


function renderInfoSection(name, titleEnglish, 
            titlePunjabi, description) {
    
    let sectionDiv = document.createElement('div');
    sectionDiv.classList.add(name);

    let sectionTitle = document.createElement('h3');
    sectionTitle.textContent = titleEnglish;
    let punjabiTitle = document.createElement('span');
    punjabiTitle.textContent = titlePunjabi;
    
    sectionTitle.appendChild(punjabiTitle);
    sectionDiv.appendChild(sectionTitle);

    description.forEach(line => {
        let sectionDescription = document.createElement('p');
        sectionDescription.textContent = line;
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

export {about, showAbout, clearAbout}