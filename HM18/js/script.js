'use strict';
import { generateUL } from "./renderCategories.js";
import { data } from "./data.js";

const modal = document.querySelector('.popup-wrapper');
const okBtn = document.querySelector('.of-btn');
const goodsWrapper = document.querySelector('.goods-wrapper');
const buyWrapper = document.querySelector('.buy-wrapper');
const goodCardWrapper = document.querySelector('.goods-card-wrapper');
const body= document.querySelector('body');

const categories = document.querySelector('.categories');
const ul = generateUL(data);
categories.append(ul);

const categoriesList = document.querySelector('.categories-list');

const goodsTpl = `      
    <div class="goods-card" data-dataid="{goodId}">
        <img src="{img}" alt="goods" data-dataid="{goodId}" class="goods-img">
        <h3 class="goods-name" data-dataid="{goodId}">{name}</h3>
        <p class="goods-price" data-dataid="{goodId}">{price}</p>
    </div>
`;
   let goodsHeader = document.createElement('h2');
    goodsHeader.classList.add('goods-header');
   goodsWrapper.prepend(goodsHeader);

categoriesList.addEventListener('click', (event) => {
    if (event.target.closest('.categories-item')){
       goodsWrapper.classList.remove('hidden');
      buyWrapper.innerHTML = '';
      console.log(addEventListener);

        const key = event.target.dataset.dataid;
        console.log (key);
        const itemPosition = data.findIndex((item) => item.dataId === key);
        console.log(itemPosition);
       const goods = data[itemPosition][key];
       console.log(goods);
       goodsHeader.innerHTML = data[itemPosition].category;        
       
       if(!goods){
            goodCardWrapper.innerHTML = `<div class = "default-text">У даній категорії наразі відсутні товари</div>`;           
            return;
        }        
       
       goodCardWrapper.innerHTML = goods.map(item =>
         goodsTpl
               .replaceAll('{img}', item.img)
              .replaceAll('{name}', item.name)
               .replaceAll('{price}', item.price)
               .replaceAll('{goodId}', item.goodId)
       ).join('');   
       
       const goodsCard = document.querySelectorAll('.goods-card');
       goodsCard.forEach((item) => {
           item.setAttribute('data-dataparentid', data[itemPosition].dataId);
       });       

       document.querySelectorAll('.goods-img').forEach((item) => {
          item.setAttribute('data-dataparentid', data[itemPosition].dataId);
       });

      document.querySelectorAll('.goods-name').forEach((item) => {         
       item.setAttribute('data-dataparentid', data[itemPosition].dataId);
       });
       
        document.querySelectorAll('.goods-price').forEach((item) => {
           item.setAttribute('data-dataparentid', data[itemPosition].dataId);
       });
    }
});

const buyTpl = `      
           <h3 class="buy-title">{title}</h3>
            <img src={img} alt="buy" class="buy-img">
           <p class="buy-description">{description}</p>
            <p class="goods-price">{price}</p>
           <div class="button-wrapper">
               <button class = "buy-btn">Купити</button>
            </div>
    `;

goodsWrapper.addEventListener('click', (event) => {
    if (event.target.closest('.goods-card')){

        const key = event.target.dataset.dataparentid;
       const keyGood = event.target.dataset.dataid;
       const itemPosition = data.findIndex((item) => item.dataId === key);
                const goods = data[itemPosition][key];
       const goodsPosition = goods.findIndex((item) => item.goodId === keyGood);
       const buyGoods = goods[goodsPosition][keyGood];
              
        buyWrapper.innerHTML = buyGoods.map(item =>
           buyTpl
               .replaceAll('{title}', item.name)
               .replaceAll('{img}', item.img)
               .replaceAll('{description}', item.description)
               .replaceAll('{price}', item.price)
        ).join('');
        const buyBtn = document.querySelector('.buy-btn');

        buyBtn.addEventListener('click', () => {
            modal.classList.add('active-popup');
           document.body.classList.add('under-modal');
        });
    }
    })

    function closePopup (){
        modal.classList.remove('active-popup');
        goodCardWrapper.innerHTML = '';
        buyWrapper.innerHTML = '';
        goodsHeader.innerHTML = '';
        document.body.classList.add('under-modal');
        const name = document.querySelector('.name1');
        const city = document.querySelector('.info2');
        const post = document.querySelector('.np1');
        const pay = document.querySelector('.payment');
        const figure = document.querySelector('.number');
        const coment = document.querySelector('.comment');
        goodsWrapper.innerHTML = `<div>${coment.value}</div><div>${figure.value}</div><div>${pay.value}</div><div>${post.value}</div><div>${city.value}</div><div>${name.value}</div>`;
        document.body.classList.add('under-modal');
   }
   
okBtn.addEventListener('click', closePopup);

    input.forEach(input => {
        input.addEventListener('blur', function (){
            validateElement(this)
        });
    })

    window.addEventListener('load', init);

    function init() {
        document.querySelector('.info').addEventListener('submit', function (event) {
            event.preventDefault();
    
            const name = document.querySelector('.name1');
            const city = document.querySelector('.info2');
            const np = document.querySelector('.np');
            const number = document.querySelector('.number');
            const errorMessage = document.querySelector('.error-message');
    
            let isValid = true;
    
            if (name.value.trim() === '') {
                setErrorFor(name, 'Поле ПІБ покупця не може бути порожнім');
                isValid = false;
            } else {
                setSuccessFor(name);
            }
    
            if (city.value === 'Виберіть місто') {
                setErrorFor(city, 'Будь ласка, виберіть місто');
                isValid = false;
            } else {
                setSuccessFor(city);
            }
    
            if (np.value === 'Склад нової пошти') {
                setErrorFor(np, 'Будь ласка, виберіть склад Нової пошти');
                isValid = false;
            } else {
                setSuccessFor(np);
            }
    
            let isChecked = false;
            for (let i = 0; i < payment.length; i++) {
                if (payment[i].checked) {
                    isChecked = true;
                    break;
                }
            }
    
    
            if (number.value.trim() === '' || parseInt(number.value) < 1) {
                setErrorFor(number, 'Будь ласка, введіть коректну кількість');
                isValid = false;
            } else {
                setSuccessFor(number);
            }
    
            if (isValid) {
                this.submit();
            } else {
                errorMessage.innerText = 'Будь ласка, заповніть всі обов\'язкові поля';
            }
        });
    
        const inputs = document.querySelectorAll('input, textarea');
    
        inputs.forEach(input => {
            input.addEventListener('blur', function (){
                validateElement(this);
            });
        });
    
        function validateElement(element) {
            const errorElement = element.nextElementSibling;
            if (!errorElement || !errorElement.classList.contains('error-message')) {
                return;
            }
    
            if (element.hasAttribute('required') && element.value.trim() === '') {
                setErrorFor(element, 'Це поле не може бути порожнім');
            } else {
                setSuccessFor(element);
            }
        }
    
        function setErrorFor(input, message) {
            const formControl = input.parentElement;
            const errorElement = formControl.querySelector('.error-message');
            formControl.classList.add('error');
            errorElement.innerText = message;
        }
    
        function setSuccessFor(input) {
            const formControl = input.parentElement;
            const errorElement = formControl.querySelector('.error-message');
            formControl.classList.remove('error');
            errorElement.innerText = '';
        }
    }
    
