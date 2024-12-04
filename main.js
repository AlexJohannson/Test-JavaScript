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
    liListItem.addEventListener('click', (event) => {
        event.target.classList.add('listRemove');
        liListItem.style.background = '#e95354';
        console.log(liListItem);
    });

    if (!inputName.match(/^(\w+\s*)=(\s*\w)+$/)) {
      inputNameValue.style.background = 'red';
    } else {
        inputNameValue.style.background = '#9cbbfc';
        liListItem.innerText = inputName;
        olListInput.appendChild(liListItem);
        listNameValue.appendChild(olListInput);
    }
    inputNameValue.value = '';
});



sortByName.addEventListener('click', (event) => {
    event.preventDefault();
    const liListName = Array.from(listNameValue.getElementsByClassName('liListItem'));
    liListName.sort((a, b) => {
        const liListNameFirst = a.innerText.split('=')[0];
        const liListNameSecond = b.innerText.split('=')[0];
        return liListNameFirst.localeCompare(liListNameSecond);
    });
    liListName.forEach(sortName => listNameValue.appendChild(sortName));
    console.log(liListName);
});



sortByValue.addEventListener('click', (event) => {
    event.preventDefault();
    const liListValue = Array.from(listNameValue.getElementsByClassName('liListItem'));
    liListValue.sort((a, b) => {
        const liListValueFirst = a.innerText.split('=')[1];
        const liListValueSecond = b.innerText.split('=')[1];
        return liListValueFirst.localeCompare(liListValueSecond);
    });
    liListValue.forEach(sortValue => listNameValue.appendChild(sortValue));
    console.log(liListValue);
});



delete_button.addEventListener('click', (event) => {
    event.preventDefault();
    const removeButton = Array.from(listNameValue.getElementsByClassName('listRemove'));
    removeButton.forEach(itemList => itemList.remove());
    console.log(removeButton);
});

