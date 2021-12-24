import createNewElement from "./utils";

const loader = createNewElement('div', ['loader', 'lds-default']);
loader.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";

const loaderBackground = createNewElement('div', ['loader-background']);

export {loader, loaderBackground as loaderBackdrop}