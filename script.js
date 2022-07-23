'use strict';
 
/* document.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.key);

    if (e.key === 'Escape') console.log('Esc is pressed');
}) */
//keydown works when a kep is pressed down 
//keyup works when a kep is being released 
//keypress works when a kep is hold down  

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal');

const addHidden = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const removeHidden = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for( let i = 0; i < showModal.length; i++) 
showModal[i].addEventListener('click', addHidden);

closeModal.addEventListener('click', removeHidden);
overlay.addEventListener('click', removeHidden);

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        removeHidden();
    }
})