const originalCola = document.querySelector('#originalCola');
const violetCol = document.querySelector('#violetCola');
const yellowCola = document.querySelector('#yellowCola');
const coolCola = document.querySelector('#coolCola');
const greenCola = document.querySelector('#greenCola');
const orangeCola = document.querySelector('#orangeCola');

const productList = [originalCola, violetCol, yellowCola, coolCola, greenCola, orangeCola];


productList.forEach((name) => {
    name.addEventListener('click', function () {
        name.classList.toggle('product-wrapper-click')
    })
});





