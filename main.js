const inputNameValue = document.getElementById('inputNameValue');
const listNameValue = document.getElementById('listNameValue');
const add_button = document.getElementById('add_button');
const sortByName = document.getElementById('sortByName');
const sortByValue = document.getElementById('sortByValue');
const delete_button = document.getElementById('delete_button');



add_button.addEventListener('click', (event) => {
    event.preventDefault();
    const inputName = inputNameValue.value;
    const olListInput = document.createElement('ol');
    olListInput.classList.add('olListInput');
    const liListItem = document.createElement('li');
    liListItem.classList.add('liListItem');
    liListItem.innerText = inputName;
    olListInput.appendChild(liListItem);
    listNameValue.appendChild(olListInput);
    inputNameValue.value = '';

});