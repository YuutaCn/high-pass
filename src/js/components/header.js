const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search__input');
let searchStatus = 0;
let screenWidth = 0;

searchBtn.addEventListener('click', () => {
  screenWidth = window.screen.width;
  if (searchStatus === 0 && screenWidth >= 1440) {
    searchInput.style.transition = 'all 300ms var(--default-cubic)';
    searchInput.style.width = '170px';
    searchInput.style.opacity = '1';
    searchInput.style.visibility = 'visible';
    searchStatus++;
  } else if (searchStatus > 0 && screenWidth >= 1440) {
    searchInput.style.transition = 'all 300ms var(--default-cubic)';
    searchInput.style.width = '0px';
    searchInput.style.opacity = '0';
    searchInput.style.visibility = 'hidden';
    searchStatus = 0;
  }
  if (searchStatus === 0 && screenWidth < 1440 && screenWidth >= 1024) {
    searchInput.style.transition = 'all 300ms var(--default-cubic)';
    searchInput.style.width = '100%';
    searchInput.style.opacity = '1';
    searchInput.style.visibility = 'visible';
    searchStatus++;
  } else if (searchStatus > 0 && screenWidth < 1440 && screenWidth >= 1024) {
    searchInput.style.transition = 'all 300ms var(--default-cubic)';
    searchInput.style.width = '0%';
    searchInput.style.opacity = '0';
    searchInput.style.visibility = 'hidden';
    searchStatus = 0;
  }
});
