let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.accordion__title');
let accordion2 = document.querySelector('.accordion_2');
let items1 = accordion2.querySelectorAll('.accordion__item');
let title1 = accordion2.querySelectorAll('.accordion__title');


function toggleAccordion() {
    let thisItem = this.parentNode;
    
    items.forEach(item => {
        if (thisItem == item ) {
        thisItem.classList.toggle('active');
        return;
        } 
        item.classList.remove('active');
    });
}
     

function toggleAccordion2() {
let thisItem = this.parentNode;

items1.forEach(item => {
    if (thisItem == item ) {
    thisItem.classList.toggle('active');
    return;
    } 
    item.classList.remove('active');
});
}


title.forEach(question => question.addEventListener('click', toggleAccordion));
title1.forEach(question => question.addEventListener('click', toggleAccordion2));