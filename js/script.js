
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

/************* BACK TO TOP BTN ***************/

let bttBtn = document.querySelector('#back-to-top');
let docBody = document.body;
let docElement = document.documentElement;
let heights = [docBody.offsetHeight, docElement.offsetHeight, docBody.scrollHeight, docElement.scrollHeight];
let tallest = Math.max(...heights);

let oneThirdDown = tallest / 2;

document.addEventListener('scroll', () => {
    (docElement.scrollTop >= oneThirdDown) ? bttBtn.classList.add('js--visible') : bttBtn.classList.remove('js--visible');
});

bttBtn.addEventListener('click', (e) => {
    e.preventDefault();
    docElement.scrollTop = 0;
});

/*******  STICKY HDR    **********/
let hdr = document.querySelector('header');
let hero = document.querySelector('.hero');
let hdrHeight = hdr.getBoundingClientRect().height;


document.addEventListener('scroll', (e) => {
    let heroBtm = hero.getBoundingClientRect().bottom;
    if (heroBtm <= 0) {
        docBody.style.setProperty('padding-top', `${hdrHeight}px`);
        hdr.classList.add('js--sticky');
    } else {
        hdr.classList.remove('js--sticky');
        docBody.style.setProperty('padding-top', 0);
    }
})

/**********  COPYRIGHT DATE   **********/
let currentDate =  document.querySelector('.date');
currentDate.textContent = new Date().getFullYear();


