const punjabi = document.createElement('h1');
punjabi.classList.add('punjabi');
punjabi.innerHTML = 'ਲਾਡੀ <span>ਦੇ</span> ਲੱਡੂ';

const english = document.createElement('div');
english.classList.add('english');

const englishTitle = document.createElement('h1');
englishTitle.textContent = "Laddi's Laddoos";

const englishSubtitle = document.createElement('p');
englishSubtitle.textContent = "...Quality Sweets and Chai";

english.appendChild(englishTitle);
english.appendChild(englishSubtitle);

export {punjabi, english}