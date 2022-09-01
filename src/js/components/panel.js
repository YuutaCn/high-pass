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
          this._$control = $('<div class="contact__map-control" style="display: none; opacity: 0; visibility: hidden; transform: translateX(-100%);"><div class="contact__map-control-content"></div><div class="closeButton"><button><svg class="contact-close"><use xlink:href="../img/sprite.svg#close"></use></svg></button></div></div>').appendTo(parentDomContainer);
          this._$content = $('.contact__map-control-content');
          // При клике по крестику будем скрывать панель.
          $('.closeButton').on('click', this._onClose);
      },
      _onClose: function () {
        // $('.contact__map-control').css('display', 'none');
        $('.contact__map-control').css('opacity', '0');
        $('.contact__map-control').css('visibility', 'hidden');
        $('.contact__map-control').css('transition', 'all 300ms var(--default-cubic)');
        $('.contact__map-control').css('transform', 'translateX(-100%)');

        setTimeout(() => {
          $('.contact__map-control').css('display', 'none');
        }, 300);
      },
      // Метод задания контента панели.
      setContent: function (text) {
          // При задании контента будем показывать панель.
          this._$control.css('display', 'flex');

          setTimeout(() => {
            this._$control.css('opacity', '1');
            this._$control.css('visibility', 'visible');
            this._$control.css('transition', 'all 300ms var(--default-cubic)');
            this._$control.css('transform', 'translateX(0%)');
            this._$content.html(text);
          }, 1);
      }
  });

  provide(Panel);
});
