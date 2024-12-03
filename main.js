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
    const sortName = Array.from(listNameValue.getElementsByClassName('olListInput'));
    if (sortName.length > 0) {
        sortName.sort((a, b) => {
            const nameA = a.querySelector('.liListItem').innerText.split('=')[0];
            const nameB = b.querySelector('.liListItem').innerText.split('=')[0];
            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else if (nameA === nameB) {
                return  0;
            }
        });
        listNameValue.innerText = '';
        sortName.forEach(sortName => listNameValue.appendChild(sortName));
        console.log(sortName);
    }
});



sortByValue.addEventListener('click', (event) => {
    event.preventDefault();
    const sortValue = Array.from(listNameValue.getElementsByClassName('olListInput'));
        if (sortValue.length > 0) {
            sortValue.sort((a, b) => {
                const valueA = a.querySelector('.liListItem').innerText.split('=')[1];
                const valueB = b.querySelector('.liListItem').innerText.split('=')[1];
                if (valueA < valueB) {
                    return -1;
                } else if (valueA > valueB) {
                    return 1;
                } else if (valueA === valueB) {
                    return  0;
                }
            });
            listNameValue.innerText = '';
            sortValue.forEach(sortValue => listNameValue.appendChild(sortValue));
            console.log(sortValue);
        }
});


delete_button.addEventListener('click', (event) => {
    event.preventDefault();
    const removeButton = Array.from(listNameValue.getElementsByClassName('listRemove'));
    removeButton.forEach(itemList => itemList.remove());
    console.log(removeButton);
});

