const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('No te cambiaría por nada en el mundo, me haces el hombre más feliz de todos, Te amo infinitamente mi reina hermosa!FL♥')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomC}%,-${randomY}%)`);
})