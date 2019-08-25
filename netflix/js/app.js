let tabItem = document.querySelectorAll('.tab-item');
let tabContentItem = document.querySelectorAll('.tab-content-item');

tabItem.forEach(element => element.addEventListener('click', show));

function show() {
    let elementId = this;
    
    tabItem = Array.from(tabItem);
    tabContentItem = Array.from(tabContentItem);
    
    tabItem.forEach(element => element.classList.remove('tab-border'));
    tabContentItem.forEach(element => element.style.display = 'none');

    let index = tabItem.indexOf(elementId);
    
    elementId.classList.add('tab-border');
    tabContentItem[index].style.display = 'block';
}