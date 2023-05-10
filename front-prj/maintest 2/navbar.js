const domesticBtn = document.querySelector('.domestic');
const innerDomsestic = document.querySelector('.innerdomsestic');

const overseasBtn = document.querySelector('.overseas');
const innerOverseas = document.querySelector('.inneroverseas');

const questionfreeBtn = document.querySelector('.questionfree');
const innerQuestionfree = document.querySelector('.innerquestionfree'); 

const innernoticeBtn = document.querySelector('.notice');
const innerNotice = document.querySelector('.innernotice');


domesticBtn.addEventListener('mouseover',() => {
    innerDomsestic.classList.toggle('active');
    innerOverseas.classList.remove('active');
    innerQuestionfree.classList.remove('active'); 
    innerNotice.classList.remove('active');
});

innerDomsestic.addEventListener('mouseleave', () => {
    innerDomsestic.classList.remove('active');
});


overseasBtn.addEventListener('mouseover',() => {
    innerOverseas.classList.toggle('active');
    innerDomsestic.classList.remove('active');
    innerQuestionfree.classList.remove('active'); 
    innerNotice.classList.remove('active');
    
});
innerOverseas.addEventListener('mouseleave', () => {
   innerOverseas.classList.remove('active');
});

questionfreeBtn.addEventListener('mouseover',() => {
    innerQuestionfree.classList.toggle('active');
    innerDomsestic.classList.remove('active');
    innerOverseas.classList.remove('active');
    innerNotice.classList.remove('active');
});
innerQuestionfree.addEventListener('mouseleave', () => {
   innerQuestionfree.classList.remove('active');
});

innernoticeBtn.addEventListener('mouseover',() => {
    innerNotice.classList.toggle('active');
    innerDomsestic.classList.remove('active');
    innerOverseas.classList.remove('active');
    innerQuestionfree.classList.remove('active'); 
});
innerNotice.addEventListener('mouseleave', () => {
   innerNotice.classList.remove('active');
});


