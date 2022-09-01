ymaps.modules.define('Panel', [
  'util.augment',
  'collection.Item'
], function (provide, augment, item) {
  // Создаем собственный класс.
  var Panel = function (options) {
      Panel.superclass.constructor.call(this, options);
  };

  // И наследуем его от collection.Item.
  augment(Panel, item, {
      onAddToMap: function (map) {
          Panel.superclass.onAddToMap.call(this, map);
          this.getParent().getChildElement(this).then(this._onGetChildElement, this);
          // Добавим отступы на карту.
          // Отступы могут учитываться при установке текущей видимой области карты,
          // чтобы добиться наилучшего отображения данных на карте.
          map.margin.addArea({
              top: 0,
              left: 0,
              width: '410px',
              height: '460px'
          })
      },

      onRemoveFromMap: function (oldMap) {
          if (this._$control) {
              this._$control.remove();
          }
          Panel.superclass.onRemoveFromMap.call(this, oldMap);
      },

      _onGetChildElement: function (parentDomContainer) {
          // Создаем HTML-элемент с текстом.
          // По-умолчанию HTML-элемент скрыт.
          this._$control = $('<div class="contact__map-control" style="display: none"><div class="contact__map-control-content"></div><div class="closeButton"><button><svg class="contact-close"><use xlink:href="../img/sprite.svg#close"></use></svg></button></div></div>').appendTo(parentDomContainer);
          this._$content = $('.contact__map-control-content');
          // При клике по крестику будем скрывать панель.
          $('.closeButton').on('click', this._onClose);
      },
      _onClose: function () {
        $('.contact__map-control').css('display', 'none');
        // $('.contact__map-control').css('display', 'none');
        // $('.contact__map-control').css('display', 'none');
        // $('.contact__map-control').css('display', 'none');
        // $('.contact__map-control').css('display', 'none');
        // $('.contact__map-control').css('display', 'none');
      },
      // Метод задания контента панели.
      setContent: function (text) {
          // При задании контента будем показывать панель.
          this._$control.css('display', 'flex');
          this._$content.html(text);
      }
  });

  provide(Panel);
});
