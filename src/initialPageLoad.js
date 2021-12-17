import navBar from './navbar';
import mainContent from './mainContent';


export default function pageLoad() {
    const content = document.querySelector('#content');

    // Render Nav Bar
    content.appendChild(navBar);

    // Render Main Content
    content.appendChild(mainContent);
}
