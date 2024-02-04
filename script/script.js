// Создайте HTML-страницу с кнопкой. При клике на кнопку измените текст элемента с id "target" на "Привет, мир!" с использованием JavaScript и DOM.

/*const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', () => {
    const targetElem = document.getElementById('target');
    targetElem.innerText = 'Hello, World!';
    targetElem.style.background = 'aquamarine';
    targetElem.style.color = 'black';
});*/

// Создайте HTML-страницу с формой (input и button). При отправке формы выведите в консоль введенное значение из input с использованием JavaScript и DOM.

/*const formElem = document.getElementById('form');

formElem.addEventListener('submit', event => {
    event.preventDefault();
    const inputNode = document.querySelector('.input');
    console.log(inputNode.value);
});*/

// Создайте HTML-страницу, в которой присутсвует кнопка. При нажатии на нее текст кнопки меняется на случайное число от 5 до 15.

const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 11) + 5;
    btnNode.innerText = randomNumber;
});