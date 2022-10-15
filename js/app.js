// 기능1 : 상품 추가하면 장바구니에 담기는 기능

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
            newItem.innerHTML = `<img src="img/${name.id}.svg" alt="오리지널콜라">
            <div div class="shopping-item-name" > ${name.id}</div >
                <div class="shopping-num">1</div>`

        } else if (name.classList.contains('product-wrapper-click') === false) {
            removeItem = document.querySelector(`#${name.id}2`);
            shoppingList.removeChild(removeItem);

        }
        // console.log(name.childNodes[3].childNodes);
    })
});



// 입금 버튼 누르면 일어나는 일  
const moneyInput = document.querySelector('#moneyInput');
const moneyButton = document.querySelector('#moneyButton');
const balanceMoney = document.querySelector('#balanceMoney');
const moneyNum = document.querySelector('#moneyNum');
console.log(parseInt(moneyNum.innerText.slice(0, 6)));


moneyButton.addEventListener('click', function () {
    // 입금액이 없는 경우 (alert나 0을 더하는 것)
    if (moneyInput.value === '') {
        alert('입금액을 임력하세요')
    }
    //입금액이 소지금보다 큰 경우 ( alert )
    else if (parseInt(moneyNum.innerText.slice(0, 6).replace(/,/g, '')) - parseInt(moneyInput.value) < 0) {
        alert('잔액이 부족합니다')
        moneyInput.value = '입금액 입력';
    }
    else { // 1. 잔액에 입금액 만큼이 추가 되어야 한다. 
        let change = balanceMoney.innerText;

        change = parseInt(change) + parseInt(moneyInput.value);
        balanceMoney.innerText = `${change}원`
        // console.log(parseInt(balanceMoney));

        // 2. 소지금에서 입금액 만큼이 빠져야 한다. 
        // 소지금 - moneyInput.value
        moneyNum.innerText = `${parseInt(moneyNum.innerText.slice(0, 6).replace(/,/g, '')) - parseInt(moneyInput.value)}원`;


        // 3. 입금액이 초기화 되어야한다. 
        moneyInput.value = '입금액 입력';
    }
})









