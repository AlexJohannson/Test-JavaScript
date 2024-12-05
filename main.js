/*------------------------------------------    DOM  елементи    ---------------------------------------------*/
/*оримую всі елементи за їх індентифікаторами*/
const inputNameValue = document.getElementById('input_name-value');
const listNameValue = document.getElementById('list_name-value');
const addButton = document.getElementById('add_button');
const sortByName = document.getElementById('sort_by-name');
const sortByValue = document.getElementById('sort_by-value');
const deleteButton = document.getElementById('delete_button');

/*----------------------------------------    addButton    -----------------------------------------------------*/
/*створюю обробник події для кнопки "Add"*/
addButton.addEventListener('click', () => {

    /*створюю константу inputName в яку буде  збережене значення введене від користувача*/
    const inputName = inputNameValue.value;

    /*створюю константу olListInput яка буде зберігати посилання на створений новий елемент <ol></ol>*/
    const olListInput = document.createElement('ol');

    /*додаю клас до створеного елемента <ol></ol>*/
    olListInput.classList.add('olListInput');

    /*створюю константу liListItem яка буде зберігати посилання на створений новий елемент <li></li>*/
    const liListItem = document.createElement('li');

    /*додаю клас до створеного елемента <li></li>*/
    liListItem.classList.add('liListItem');

/*--------------------------------------   обробник події liListItem, створюю клас listRemove   ------------------*/
    /*додаю обробник події для кліку на елемент <li></li>*/
    liListItem.addEventListener('click', (event) => {

        /*додаю клас для позначення елемента <li></li> який потрібно видалити*/
        event.target.classList.add('listRemove');

        /*змінюю background елемента <li></li> на червоний колір*/
        liListItem.style.background = '#e95354';

        /*вивожу елемент <li></li> в консоль*/
        console.log(liListItem);
    });

/*------------------------------------------  перевірка формату введеного тексту  ---------------------------------*/
    /*перевіряю формат введеного тексту, користувач може додати пробіл піля значення "<name>" та перед зназенням
    * "<value>". Додавання пробілів перед значенням "<name>" та після значення "<value>" призведе до попередження
    * користувача що формат введення значень "<name>=<value>" не вірний*/
    if (!inputName.match(/^(\w+\s*)=(\s*\w)+$/)) {

      /*у випадку якщо формат не правильний змінюється background текстового поля input_name-value на червоний колір*/
      inputNameValue.style.background = 'red';
    } else {

        /*якщо формат введеного тексту правильний тоді повертається стандартний background*/
        inputNameValue.style.background = '#9cbbfc';

        /*записується текстовий зміст елемента <li></li>*/
        liListItem.innerText = inputName;

        /*додаю елемент <li></li> до <ol></ol>*/
        olListInput.appendChild(liListItem);

        /*додаю елемент <ol></ol> до <div id="list_name-value"></div>*/
        listNameValue.appendChild(olListInput);
    }

    /*очищаю текстове поле після додавання до списку*/
    inputNameValue.value = '';
});

/*------------------------------------------   sortByName   ----------------------------------------------------*/
/*створюю обробник події для кнопки "Sort by Name"*/
sortByName.addEventListener('click', () => {

    /*створюю константу liListName яка буде зберігати масив HTML елементів, використовую Array.from для перетворення HTML
    колекції в масив отриманої з listNameValue.getElementsByClassName('liListItem')*/
    const liListName = Array.from(listNameValue.getElementsByClassName('liListItem'));

    /*сортую масив за значенням "<name>". Використовую метод split який розбиває рядок на масив підрядків символ
    * "=" є роздільником в данній роботі якщо a.innerText="name=value" то a.innerText.split('=') перетворює на
    * масив ["name", "value"]. [0] вибираю перший елемент масиву до знака "=" тобто "name"*/
    liListName.sort((a, b) => {

        /*створю константи liListNameFirst, liListNameSecond для зберігання значень отриманих з масиву*/
        const liListNameFirst = a.innerText.split('=')[0];
        const liListNameSecond = b.innerText.split('=')[0];

        /*методом localeCompare порівнюю два рядки liListNameFirst та liListNameSecond, метод повертає -1
        *  якщо liListNameFirst менше liListNameSecond, 0 якщо вони рівні і 1 якщо liListNameFirst
        * більше liListNameSecond*/
        return liListNameFirst.localeCompare(liListNameSecond);
    });

    /*використовую forEach для перебору всіх відсортованих елементів в масиві liListName і додаю відсортовані елементи
    назад до <div id="list_name-value"></div>*/
    liListName.forEach(sortName => listNameValue.appendChild(sortName));

    /*виводжу відсортований масив в консоль*/
    console.log(liListName);
});


/*------------------------------------------   sortByValue   ----------------------------------------------------*/
/*створюю обробник події для кнопки "Sort by Value"*/
sortByValue.addEventListener('click', () => {

    /*створюю константу liListValue яка буде зберігати масив HTML елементів, використовую Array.from для перетворення HTML
    колекції в масив отриманої з listNameValue.getElementsByClassName('liListItem')*/
    const liListValue = Array.from(listNameValue.getElementsByClassName('liListItem'));

    /*сортую масив за значенням "<value>". Використовую метод split який розбиває рядок на масив підрядків символ
    * "=" є роздільником в данній роботі якщо a.innerText="name=value" то a.innerText.split('=') перетворює на
    * масив ["name", "value"]. [1] вибираю другий елемент масиву до знака "=" тобто "value"*/
    liListValue.sort((a, b) => {

        /*створю константи liListValueFirst, liListValueSecond для зберігання значень отриманих з масиву*/
        const liListValueFirst = a.innerText.split('=')[1];
        const liListValueSecond = b.innerText.split('=')[1];

        /*методом localeCompare порівнюю два рядки liListValueFirst та liListValueSecond, метод повертає -1
        *  якщо liListValueFirst менше liListValueSecond, 0 якщо вони рівні і 1 якщо liListValueFirst
        * більше liListValueSecond*/
        return liListValueFirst.localeCompare(liListValueSecond);
    });

    /*використовую forEach для перебору всіх відсортованих елементів в масиві liListValue і додаю відсортовані елементи
    назад до <div id="list_name-value"></div>*/
    liListValue.forEach(sortValue => listNameValue.appendChild(sortValue));

    /*виводжу відсортований масив в консоль*/
    console.log(liListValue);
});


/*-----------------------------------------    deleteButton   ---------------------------------------------------*/
/*створюю обробник події для кнопки "Delete"*/
deleteButton.addEventListener('click', () => {

    /*створюю константу removeButton яка буде зберігати масив HTML елементів, використовую Array.from для перетворення
    HTML колекції в масив отриманої з listNameValue.getElementsByClassName('listRemove')*/
    const removeButton = Array.from(listNameValue.getElementsByClassName('listRemove'));

    /*використовую forEach для перебору всіх елементів в масиві removeButton, потім видаляє вибрані елементи
    користувачем з дерева документа, з HTML сторінки*/
    removeButton.forEach(itemList => itemList.remove());

    /*виводжу видалені елементи в консоль*/
    console.log(removeButton);
});

