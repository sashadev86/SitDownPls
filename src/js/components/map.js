let contacts = document.querySelector('.contacts');

if (contacts) {
  
  function init() {
    const mapElem = document.querySelector('#map');
    if(mapElem) {
  // var suggestView1 = new ymaps.SuggestView('search-input', {provider: myProvider, results: 2});

    // var arr = [
    //   { coords: [55.750819, 37.642411], text: "Москва, SitDownPls на Солянке м. Китай-город, ул. Солянка, д.24" },
    //   { coords: [55.762865, 37.654071], text: "Москва, SitDownPls на Покровке м. Курская, ул. Покровка, д.14" },
    //   ];

    var points = [
      "Москва, SitDownPls на Солянке м. Китай-город, ул. Солянка, д.24",
      "Москва, SitDownPls на Покровке м. Курская, ул. Покровка, д.14"
    ];

    var find = function (points, find) {
      return points.filter(function (value) {
        return (value + "").toLowerCase().indexOf(find.toLowerCase()) != -1;
      });
    };


    var myProvider = {
      suggest: function (request, options) {
        var res = find(points, request),
          arrayResult = [],
          results = Math.min(options.results, res.length);
        for (var i = 0; i < results; i++) {
          arrayResult.push({ displayName: res[i], value: res[i] })
        }
        return ymaps.vow.resolve(arrayResult);
      }
    }

    var suggestView = new ymaps.SuggestView('search-input', { provider: myProvider, results: 2 });
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.755758, 37.624903],
        zoom: 14,
      },
    );
    const myPlacemark = new ymaps.Placemark([55.750819, 37.642411], {
      balloonContent: `

            <div class="contacts__balloon balloon">
            <div class="balloon__top">
              <h2 class="balloon__top-title">SitDownPls на Солянке </h2>
              <address class="balloon__top-address">м. Китай-город, ул. Солянка, д.24</address>
              <a href="tel:+74958854547" class="balloon__top-link">
                <svg class="balloon__top-link-svg" width="22" height="22">
                  <use xlink:href="img/sprite.svg#phoneImg"></use>
                </svg>
                +7 (495) 885-45-47
              </a>
            </div>
            <div class="balloon__center">
              <p class="balloon__center-clockwork"><span class="balloon__center-clockwork-span">Часы работы:</span> с 10:00 до 21:00</p>
            </div>
            <div class="balloon__bottom">
              <p class="balloon__bottom-descr">
                <span class="balloon__bottom-descr-span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
              </p>
            </div>
          </div>

      `
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/iconMap.svg",
      iconImageSize: [32, 21.96],
      iconImageOffset: [-10, -20],
      hideIconOnBalloonOpen: false,
      balloonOffset: [-10, -30]
    }
    );

    const myPlacemark2 = new ymaps.Placemark([55.762865, 37.654071], {
      balloonContent: `

            <div class="contacts__balloon balloon">
            <div class="balloon__top">
              <h2 class="balloon__top-title">SitDownPls на Покровке </h2>
              <address class="balloon__top-address">м. Курская, ул. Покровка, д.14</address>
              <a href="tel:+74958854547" class="balloon__top-link">
                <svg class="balloon__top-link-svg" width="22" height="22">
                  <use xlink:href="img/sprite.svg#phoneImg"></use>
                </svg>
                +7 (495) 885-45-47
              </a>
            </div>
            <div class="balloon__center">
              <p class="balloon__center-clockwork"><span class="balloon__center-clockwork-span">Часы работы:</span> с 10:00 до 21:00</p>
            </div>
            <div class="balloon__bottom">
              <p class="balloon__bottom-descr">
                <span class="balloon__bottom-descr-span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
              </p>
            </div>
          </div>

      `
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/iconMap.svg",
      iconImageSize: [32, 21.96],
      iconImageOffset: [-10, -20],
      hideIconOnBalloonOpen: false,
      balloonOffset: [-10, -30]
    }
    );

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl');  // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myPlacemark.balloon.open();
    }
  }
  ymaps.ready(init);
}



