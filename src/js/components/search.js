const searchBtn = document.querySelector('.header__search-button');
const closeBtn = document.querySelector('.header__search-close-button');
const searchPlace = document.querySelector('.header__search-place')
let searchStatus = false;

searchBtn.addEventListener('click', () => {
  if (searchStatus === false) {
    searchPlace.classList.remove('hidden-obj')
    searchPlace.classList.add('visibile-obj')
    searchBtn.classList.remove('visibile-obj');
    searchBtn.classList.add('hidden-obj');
    searchStatus = true;
  }
});

closeBtn.addEventListener('click', () => {
  if (searchStatus === true) {
    searchPlace.classList.remove('visibile-obj')
    searchPlace.classList.add('hidden-obj')
    searchBtn.classList.remove('hidden-obj');
    searchBtn.classList.add('visibile-obj');
    searchStatus = false;
  }
});
