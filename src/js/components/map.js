let contacts = document.querySelector('.contacts');

if (contacts) {

  function init() {
    const searchBtn = document.querySelector('.js-search');
    const searchInp = document.getElementById('suggest');

    var objArr = [
      { coords:
        [55.750819, 37.642411],
        text: "Москва, SitDownPls на Солянке м. Китай-город, ул. Солянка, д.24",
        info: `<div class="contacts__balloon balloon"><div class="balloon__top"><h2 class="balloon__top-title">SitDownPls на Солянке </h2><address class="balloon__top-address">м. Китай-город, ул. Солянка, д.24</address><a href="tel:+74958854547" class="balloon__top-link"><svg class="balloon__top-link-svg" width="22" height="22"><use xlink:href="img/sprite.svg#phone"></use></svg>+7 (495) 885-45-47</a></div><div class="balloon__center"><p class="balloon__center-clockwork"><span class="balloon__center-clockwork-span">Часы работы:</span> с 10:00 до 21:00</p></div><div class="balloon__bottom"><p class="balloon__bottom-descr"><span class="balloon__bottom-descr-span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p></div></div>`
      },
      { coords:
        [55.762865, 37.654071],
        text: "Москва, SitDownPls на Покровке м. Курская, ул. Покровка, д.14",
        info: `<div class="contacts__balloon balloon"><div class="balloon__top"><h2 class="balloon__top-title">SitDownPls на Покровке </h2><address class="balloon__top-address">м. Курская, ул. Покровка, д.14</address><a href="tel:+74958854547" class="balloon__top-link"><svg class="balloon__top-link-svg" width="22" height="22"><use xlink:href="img/sprite.svg#phone"></use></svg>+7 (495) 885-45-47</a></div><div class="balloon__center"><p class="balloon__center-clockwork"><span class="balloon__center-clockwork-span">Часы работы:</span> с 10:00 до 21:00</p></div><div class="balloon__bottom"><p class="balloon__bottom-descr"><span class="balloon__bottom-descr-span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p></div></div>`
      }
    ];

    const arr = objArr.map(obj => obj.text);

    var find = function (arr, find) {
      return arr.filter(function (value) {
        return (value + "").toLowerCase().indexOf(find.toLowerCase()) != -1;
      });
    }

    var provider = {
      suggest: function (request, options) {
        var res = find(arr, request),
          arrayResult = [],
          results = Math.min(options.results, res.length);
        for (var i = 0; i < results; i++) {
          arrayResult.push({ displayName: res[i], value: res[i] })
        }
        return ymaps.vow.resolve(arrayResult);
      }
    };

    var suggestView = new ymaps.SuggestView('suggest', { provider: provider, results: 3 });

    var myMap = new ymaps.Map('map', {
      center: [55.755758, 37.624903],
      zoom: 14,
    }),
      // Создаем коллекцию.
      myCollection = new ymaps.GeoObjectCollection(),
      // Создаем массив с данными.
      myPoints = objArr;

    // Заполняем коллекцию данными.
    for (var i = 0, l = myPoints.length; i < l; i++) {
      var point = myPoints[i];
      myCollection.add(new ymaps.Placemark(
        point.coords, {
        balloonContentBody: point.info
      }, {
        iconLayout: "default#image",
        iconImageHref: "./img/iconMap.svg",
        iconImageSize: [32, 21.96],
        iconImageOffset: [-10, -20],
        hideIconOnBalloonOpen: false,
        balloonOffset: [-10, -30],
        openTimeout: 1500
        },
      ));
    }

    // Добавляем коллекцию меток на карту.
    myMap.geoObjects.add(myCollection);
    myCollection.get(0).balloon.open();


    searchBtn.addEventListener('click', function () {
      const serchVal = searchInp.value;
      const resultIndex = objArr.findIndex((obj) => obj.text === serchVal);
      const result = objArr.find((obj) => obj.text === serchVal);
      const coords = result.coords;
      myMap.setCenter(coords);
      myCollection.get(resultIndex).balloon.open();
    });
  }

  ymaps.ready(init);
}




