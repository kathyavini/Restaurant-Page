import { createNewElement } from "./utils";

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

export {about, showAbout, clearAbout}