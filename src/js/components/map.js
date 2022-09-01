ymaps.ready(['Panel']).then(function () {
  var map = new ymaps.Map("map", {
    center: [55.762090, 37.633095],
    zoom: 14,
    controls: []
  });
  var office = '<h3 class="contact__map-title">Студия «High pass»</h3> <p class="contact__map-text">107045, Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82</p> <a class="contact__map-link" href="tel:+749542423532"><svg class="contact-phone"><use xlink:href="../img/sprite.svg#phone"></use></svg>+7 495 424-23-532</a>';
  var panel = new ymaps.Panel();
  map.controls.add(panel, {
  });
  var collection = new ymaps.GeoObjectCollection(null, {
    hasBalloon: false,
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/marker.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [7, 5],
  });
  collection
  .add(new ymaps.Placemark([55.769651, 37.639383], {
    balloonContent: office
  }));
  map.geoObjects.add(collection);
  collection.events.add('click', function (e) {
    var target = e.get('target');
    panel.setContent(target.properties.get('balloonContent'));
  });
});
