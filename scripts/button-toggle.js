let navButtonElem = document.getElementById('nav-button');
let navElem = document.getElementById('float-nav');

let navVisible = false;

navButtonElem.addEventListener('click', () => {
    if(navVisible){
        navElem.style.display = 'none';
        navVisible = false;
    } else {
        navElem.style.display = 'flex';
        navVisible = true;
    }
});