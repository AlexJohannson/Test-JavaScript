const inputNameValue = document.getElementById('input_name-value');
const listNameValue = document.getElementById('list_name-value');
const addButton = document.getElementById('add_button');
const sortByName = document.getElementById('sort_by-name');
const sortByValue = document.getElementById('sort_by-value');
const deleteButton = document.getElementById('delete_button');

/*----------------------------------------   button "Add"   -----------------------------------------------------*/
addButton.addEventListener('click', () => {

    const inputName = inputNameValue.value;

    const olListInput = document.createElement('ol');
    olListInput.classList.add('olListInput');

    const liListItem = document.createElement('li');
    liListItem.classList.add('liListItem');

/*------------------------------  event for click for tag <li></li> with class="liListRemove"   --------------*/
    liListItem.addEventListener('click', (event) => {
        event.target.classList.add('liListRemove');
        liListItem.style.background = '#e95354';
    });

/*---------------------------  checking the correctness of the <name>=<value> entered by the user  ---------*/
    if (!inputName.match(/^(\w+\s*)=(\s*\w)+$/)) {
        inputNameValue.style.background = '#e95354';
    } else {
        inputNameValue.style.background = '#9cbbfc';
        liListItem.innerText = inputName;
        olListInput.appendChild(liListItem);
        listNameValue.appendChild(olListInput);
    }
    inputNameValue.value = '';
    console.log(inputName);
});

/*------------------------------------------   button "Sort by Name"   ----------------------------------------*/
sortByName.addEventListener('click', () => {

    const liListName = Array.from(listNameValue.getElementsByClassName('liListItem'));
    liListName.sort((a, b) => {
        const liListNameFirst = a.innerText.split('=')[0];
        const liListNameSecond = b.innerText.split('=')[0];
        return liListNameFirst.localeCompare(liListNameSecond);
    });
    for (const liListItem of liListName) {
        listNameValue.appendChild(liListItem);
        console.log(liListItem);
    }
    console.log(liListName);
});


/*------------------------------------------   button "Sort by Value"   ----------------------------------------*/
sortByValue.addEventListener('click', () => {

    const liListValue = Array.from(listNameValue.getElementsByClassName('liListItem'));
    liListValue.sort((a, b) => {
        const liListValueFirst = a.innerText.split('=')[1];
        const liListValueSecond = b.innerText.split('=')[1];
        return liListValueFirst.localeCompare(liListValueSecond);
    });
    for (const liListItem of liListValue) {
        listNameValue.appendChild(liListItem);
        console.log(liListItem);
    }
    console.log(liListValue);
});


/*-----------------------------------------    button "Delete"   ---------------------------------------------------*/
deleteButton.addEventListener('click', () => {

    const removeButton = Array.from(listNameValue.getElementsByClassName('liListRemove'));
    for (const removeButtonItem of removeButton) {
        removeButtonItem.remove();
        console.log(removeButtonItem);
    }
    console.log(removeButton);
});


