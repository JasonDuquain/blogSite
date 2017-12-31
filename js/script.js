
/********  HIGHLIGHT ICON ON NAV ITEM HOVER  *************/
let navAnchs = document.querySelectorAll('.nav__anch');

navAnchs.forEach((el) => {
    el.addEventListener('mouseover', (e) => {
        el.previousElementSibling.classList.add('js--color');
    });
});

navAnchs.forEach((el) => {
    el.addEventListener('mouseout', (e) => {
        el.previousElementSibling.classList.remove('js--color');
    });
});


/********** SUBMENU ON HOVER FOR ARCHIVES **********/
let listItems = document.querySelectorAll('.archives__item');
let submenu = document.querySelectorAll('.archives__list-sub');

listItems.forEach((el, i) => {
    el.addEventListener('mouseover', function() {
        let submenuHeight = submenu[i].scrollHeight;
        submenu[i].style.height = submenuHeight + 'px';
        el.classList.add('js-expand');
    });
});

listItems.forEach((el, i) => {
    el.addEventListener('mouseout', function() {
       el.classList.remove('js--expand');
        submenu[i].style.height = 0;
    });
});



/**********  COPYRIGHT DATE   **********/
let currentDate =  document.querySelector('.date');
currentDate.textContent = new Date().getFullYear();


