const originalCola = document.querySelector('#originalCola');
const violetCol = document.querySelector('#violetCola');
const yellowCola = document.querySelector('#yellowCola');
const coolCola = document.querySelector('#coolCola');
const greenCola = document.querySelector('#greenCola');
const orangeCola = document.querySelector('#orangeCola');

const productList = [originalCola, violetCola, yellowCola, coolCola, greenCola, orangeCola];


productList.forEach((name) => {
    name.addEventListener('click', function () {

        name.classList.toggle('product-wrapper-click');
        const newItem = document.createElement('li');
        const shoppingList = document.querySelector('#shoppingList');

        if (name.classList.contains('product-wrapper-click') === true) {

            shoppingList.appendChild(newItem);
            newItem.classList += `shopping-item`;

            newItem.id = `${name.id}2`;
            newItem.innerHTML = `<img src="img/콜라.svg" alt="오리지널콜라">
            <div div class="shopping-item-name" > ${name.id}</div >
                <div class="shopping-num">1</div>`

        } else if (name.classList.contains('product-wrapper-click') === false) {
            removeItem = document.querySelector(`#${name.id}2`);
            shoppingList.removeChild(removeItem);

        }
        // console.log(name.childNodes[3].childNodes);
    })
});








