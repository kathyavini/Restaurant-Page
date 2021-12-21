const loader = document.createElement('div');
loader.classList.add('loader');
loader.classList.add('lds-default');
loader.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
// Is it a problem when used like this? Ask on Discord!

const loaderBackground = document.createElement('div');
loaderBackground.classList.add('loader-background');

export {loader, loaderBackground as loaderBackdrop}