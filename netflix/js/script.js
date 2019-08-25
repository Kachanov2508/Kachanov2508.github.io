let tabItem = document.querySelectorAll('.tab-item');
let tabContent = document.querySelectorAll('.tab-content-item');

tabItem.forEach(item => item.addEventListener('click', show));

function show() {
    hideBorder();
    this.classList.add('tab-border');

    hideContent();
    const tabContent = `#${this.id}-content`;
    document.querySelector(tabContent).classList.add('show');
}

function hideBorder() {
    tabItem.forEach(item => { item.classList.remove('tab-border') });
}

function hideContent() {
    tabContent.forEach(item => { item.classList.remove('show') });
}