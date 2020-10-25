const addBtn = document.querySelector('.addBtn'),
      list = document.querySelector('ul'),
      items = document.querySelectorAll('li'),
      input = document.querySelector('input');

addCloseBtn('li')
reloadLocalStorage()
//createItemListFromLocalStorage()


/*function createItemListFromLocalStorage() {
    for(let i = 0; i < 20; i++) {
        if(localStorage.key(i))
            console.log(localStorage.key(i))
            const newLi = document.createElement('li')
            newLi.textContent = localStorage.key(i);
            list.appendChild(newLi)
            addCloseBtn('li')
    }
}*/

function cutX(str) {
    for (let i = 0; i < 5; i++) {
        if(str.slice(-1) == '\u00D7'){
            str = str.slice(0, -1);
        } 
    }     
    return str;  
}

function reloadLocalStorage() {
    const items = document.querySelectorAll('li')

    items.forEach(elem => {
        localStorage.setItem(cutX(elem.textContent), elem.classList)
    })
}

function addCloseBtn(listSelector) {
    const itemsList = document.querySelectorAll(listSelector);
    itemsList.forEach(elem => {
        const span = document.createElement('span');
        span.textContent = '\u00D7';
        span.classList.add('close');
        elem.append(span);
    });
}

// adding new tasks

addBtn.addEventListener('click', () => {
    const newLi = document.createElement('li')
    newLi.textContent = input.value;
    list.appendChild(newLi)
    addCloseBtn('li')
    localStorage.setItem(cutX(newLi.textContent), '')
})

// Toggling class 'checked'

list.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
        if(localStorage.getItem(cutX(e.target.textContent)) == 'checked') {
            localStorage.setItem(cutX(e.target.textContent), '')
        } else {
            localStorage.setItem(cutX(e.target.textContent), 'checked')
        }
    }
})

// Deleting elements

list.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == 'SPAN') {
        console.log(e.target.parentElement);
        e.target.parentElement.style.display = 'none';
        localStorage.removeItem(cutX(e.target.parentElement.textContent))
    }
})

