// 기능1 : 상품 추가하면 장바구니에 담기는 기능

const originalCola = document.querySelector("#originalCola");
const violetCola = document.querySelector("#violetCola");
const yellowCola = document.querySelector("#yellowCola");
const coolCola = document.querySelector("#coolCola");
const greenCola = document.querySelector("#greenCola");
const orangeCola = document.querySelector("#orangeCola");
const productList = [
  originalCola,
  violetCola,
  yellowCola,
  coolCola,
  greenCola,
  orangeCola,
];

productList.forEach((name) => {
  name.addEventListener("click", function () {
    name.classList.toggle("product-wrapper-click");
    const newItem = document.createElement("li");
    const shoppingList = document.querySelector("#shoppingList");
    if (name.classList.contains("product-wrapper-click") === true) {
      shoppingList.appendChild(newItem);
      newItem.classList += `shopping-item`;
      newItem.dataset.product = name.dataset.name;
      newItem.id = `${name.id}2`;
      newItem.innerHTML = `<img src="img/${name.dataset.name}.svg" alt="오리지널콜라">
            <div class="shopping-item-name" > ${name.dataset.name}</div >
            <input class="shopping-num shopping-num-list" value="1">`;
    } else if (name.classList.contains("product-wrapper-click") === false) {
      removeItem = document.querySelector(`#${name.id}2`);
      shoppingList.removeChild(removeItem);
    }
    // console.log(name.childNodes[3].childNodes);
  });
});

// 기능2 : 입금 버튼 누르면 일어나는 일
const moneyInput = document.querySelector("#moneyInput");
const moneyButton = document.querySelector("#moneyButton");
const balanceMoney = document.querySelector("#balanceMoney");
const moneyNum = document.querySelector("#moneyNum");
let money = 1000000;
let havingMoney = 25000;
balanceMoney.innerText = `${money.toLocaleString("ko-KR")}원`;
moneyNum.innerText = `${havingMoney.toLocaleString("ko-KR")}원`;

moneyButton.addEventListener("click", depositMoney);

function depositMoney() {
  // 입금액이 없는 경우 (alert나 0을 더하는 것)
  if (moneyInput.value === "") {
    alert("입금액을 임력하세요");
  }
  //입금액이 소지금보다 큰 경우 ( alert )
  else if (havingMoney - parseInt(moneyInput.value) < 0) {
    alert("잔액이 부족합니다");
    moneyInput.value = "입금액 입력";
  } else {
    // 1. 잔액에 입금액 만큼이 추가 되어야 한다.
    money = money + parseInt(moneyInput.value);
    // console.log(money);
    balanceMoney.innerText = `${money.toLocaleString("ko-KR")}원`;

    // 2. 소지금에서 입금액 만큼이 빠져야 한다.
    // 소지금 - moneyInput.value
    havingMoney = havingMoney - parseInt(moneyInput.value);
    moneyNum.innerText = `${havingMoney.toLocaleString("ko-KR")}원`;

    // 3. 입금액이 초기화 되어야한다.
    moneyInput.value = "입금액 입력";
  }
}

// 3. 거스름돈 반환 버튼 누르면 일어나는 일
const changeButton = document.querySelector(".money-btn");

changeButton.addEventListener("click", moneyChange);

function moneyChange() {
  havingMoney = havingMoney + money;
  money = 0;
  moneyNum.innerText = `${havingMoney.toLocaleString("ko-KR")}원`;
  balanceMoney.innerText = `${0}원`;
}

// balanceMoney.innerText= `${parseInt(balanceMoney.innerText.slice(0 ,-1)).toLocaleString('ko-KR')}원`;

//획득 버튼을 누르면 일어나는 일
//1. 잔액에서 돈이 빠져나간다.
const purchasingBtn = document.querySelector(".purchasing-btn");
const shoppingItem = document.getElementsByClassName("shopping-item");
const buyList = document.querySelector(".buy-list");
const shoppingNum = document.getElementsByClassName("shopping-num");
const shoppingList = document.querySelector("#shoppingList");
purchasingBtn.addEventListener("click", purchasingProcess);

const flavor = {
  Original_Cola: 0,
  Violet_Cola: 0,
  Yellow_Cola: 0,
  Cool_Cola: 0,
  Green_Cola: 0,
  Orange_Cola: 0,
};

function purchasingProcess() {
  const shoppingItemArray = Array.from(shoppingItem);

  //   console.log(shoppingItemArray[0].dataset.product);
  const shoppingNumList = Array.from(
    document.getElementsByClassName("shopping-num-list")
  );

  let sum = 0;
  for (let num of shoppingNumList) {
    console.log(num);
    sum += parseInt(num.value);
  }

  if (sum * 1000 > money) {
    alert("잔액이 부족합니다.");
  }
  money = money - sum * 1000;

  console.log(money);
  balanceMoney.innerText = `${money.toLocaleString("ko-KR")}원`;
  // 2. 획득한 음료 목록에 생긴다.
  for (let i = 0; i < shoppingList.childElementCount; i++) {
    const buyItem = document.createElement("li");

    // Array.from(document.getElementsByClassName("buy-item")).forEach((e) => {
    //   if (flavor[e.dataset.product] === 0) {
    //     // console.log("hi");
    //   } else {
    //   }
    //   //   console.log(flavor[e.dataset.product]);
    // });

    buyList.appendChild(buyItem);
    buyItem.classList += "buy-item";
    buyItem.dataset.product = shoppingItemArray[i].dataset.product;
    buyItem.innerHTML = `<img src="img/${shoppingItemArray[i].dataset.product}.svg" alt="오리지널콜라" />
                    <div class="shopping-item-name buy-name">${shoppingItemArray[i].dataset.product}</div>
                    <div class="shopping-num buy-num readonly">${shoppingItemArray[i].childNodes[4].value}</div>`;
  }

  //   const buyItem = document.createElement("li");
  //   buyList.appendChild(buyItem);
  //   for (let i = 0; i < 6; i++) {
  //     const flavorArray = Object.keys(flavor);
  //     buyItem.innerHTML = `<img src="img/${flavorArray[i]}.svg" alt="오리지널콜라" />
  //                  <div class="shopping-item-name buy-name">${flavorArray[i]}</div>
  //                  <div class="shopping-num buy-num readonly">${flavor[flavorArray]}</div>`;
  //   }

  //3. 획득한 음료 숫자가 카운팅되게

  for (let i = 0; i < shoppingItemArray.length; i++) {
    flavor[shoppingItemArray[i].dataset.product] =
      flavor[shoppingItemArray[i].dataset.product] +
      parseInt(shoppingItemArray[i].childNodes[4].value);
  }
  //   console.log(flavor);
}
