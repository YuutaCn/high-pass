const mapBtn = document.querySelector('.contact-hover__btn');
const mapHover = document.querySelector('.contact-hover');
const mapInt = document.querySelector('.contact-block__desc-map');
const mapChec = document.querySelector('.contact-block__desc-chec');
const mapDot = document.querySelector('.map-dot');


mapBtn.addEventListener('click', () => {
  mapHover.style.transition = 'all 300ms var(--default-cubic)';
  mapInt.style.transition = 'all 300ms var(--default-cubic)';
  mapHover.style.width = '0px';
  mapHover.style.opacity = '0';
  mapHover.style.visibility = 'hidden';
  mapInt.style.opacity = '1';
  mapInt.style.visibility = 'visible';
  mapInt.style.width = '849.33px';
  mapChec.style.width = '849.33px';
  mapDot.style.display = 'none';
});


mapChec.onmouseover = function () {
  mapHover.style.transition = 'all 300ms var(--default-cubic)';
  mapInt.style.transition = 'all 300ms var(--default-cubic)';
  mapHover.style.width = '0px';
  mapHover.style.opacity = '0';
  mapHover.style.visibility = 'hidden';
  mapInt.style.opacity = '1';
  mapInt.style.visibility = 'visible';
  mapInt.style.width = '849.33px';
  mapChec.style.width = '849.33px';
  mapDot.style.display = 'none';
};
mapChec.onmouseleave = function () {
  mapHover.style.transition = 'all 300ms var(--default-cubic)';
  mapInt.style.transition = 'all 300ms var(--default-cubic)';
  mapHover.style.width = '410px';
  mapHover.style.opacity = '1';
  mapHover.style.visibility = 'visible';
  mapInt.style.opacity = '0';
  mapInt.style.visibility = 'hidden';
  mapInt.style.width = '439.33px';
  mapChec.style.width = '439.33px';
  mapDot.style.display = 'inline';
}
