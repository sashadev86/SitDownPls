import noUiSlider from 'nouislider';

const rangeSlider = document.getElementById("range-slider");

if(rangeSlider) {

  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    animationDuration: 100,
    step: 1,
    handleAttributes: [
      { 'aria-label': 'уменьшить цену' },
      { 'aria-label': 'повысить цену' },
    ],
    behaviour: 'tap',
    decimals: 0,
    range: {
        'min': 0,
        'max': 225000,
    }
  });
}

const firstPrice = document.getElementById("first-price");
const secondPrice = document.getElementById("second-price");
const inputPrice = [firstPrice, secondPrice];

if(firstPrice, secondPrice, inputPrice) {

  rangeSlider.noUiSlider.on("update", function(values,handle) {
    inputPrice[handle].value = Math.round(values[handle])

    document.getElementById("prc").innerHTML = "До " + document.getElementById("second-price").value

    document.getElementById("price-wrap").classList.add("price-active")
  })

  const setRangeSlider = (i,value) => {
    let arr = [null, null]
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr)
  }

  inputPrice.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

const priceDiv = document.querySelector(".catalog__tag-prc")

  document.querySelectorAll(".second-price").forEach(function(sp) {
    sp.addEventListener("input", function() {
      let data = sp.value;

      priceDiv.innerHTML = "До " + data;
    })
  })

  const inp = document.querySelectorAll('input[type=number]');
  Array.from(inp).forEach(input => {
      const min = +input.min;
      const max = +input.max;

      input.addEventListener('input', (e) => {
          const value = input.value;
          if (value > max) {
            input.value = max }
          else if (value < min) {
            input.value = min
          }
      })
  });


