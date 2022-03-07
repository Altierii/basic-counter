// Calling all the elements by their id's.

// the html button elements
let increaseBtn = document.getElementById('increase-button');
let decreaseBtn = document.getElementById('decrease-button');

// The score and count html elements
let countEl = document.getElementById('count-el');

let count = 0

increaseBtn.addEventListener('click',()=> {
    count = count + 1
    countEl.innerHTML = count
});

decreaseBtn.addEventListener('click', ()=> {
    count = count - 1
    countEl.innerHTML = count
});