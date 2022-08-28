fetch('../json/hero.json')
  .then(response => response.json())
  .then(obj => {
    const blockOneHashtag = document.querySelector(".hero__block-1-hashtag-text");
    const blockOneText = document.querySelector('.hero__block-1-text');
    const blockOneH2 = document.querySelector('.hero__block-1-h2');
    const heroTextH2 = document.querySelector('.hero__text-h2');

    blockOneHashtag.innerHTML = `#${obj.block1.hashtag}`;
    blockOneText.innerHTML = obj.block1.text;
    blockOneH2.innerHTML = obj.block1.h2;
    heroTextH2.innerHTML = obj.heroText;
  })

