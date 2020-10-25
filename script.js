const addBtn = document.querySelector('.addBtn'),
      list = document.querySelector('ul'),
      items = document.querySelectorAll('li'),
      input = document.querySelector('input');

addCloseBtn('li')

function addCloseBtn(listSelector) {
    const itemsList = document.querySelectorAll(listSelector);
    itemsList.forEach(elem => {
        const span = document.createElement('span');
        span.textContent = '\u00D7';
        span.classList.add('close');
        elem.append(span);
    });
}

addBtn.addEventListener('click', () => {
    const newLi = document.createElement('li')
    newLi.textContent = input.value;
    list.appendChild(newLi)
    addCloseBtn('li')
})

list.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
    }
})

list.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == 'SPAN') {
        console.log(e.target.parentElement);
        e.target.parentElement.style.display = 'none';
    }
})

