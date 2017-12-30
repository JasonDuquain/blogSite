
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

