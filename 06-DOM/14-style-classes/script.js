const text = document.querySelector('p');

const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');


function run() {
    itemList.classList.forEach( 
        c => console.log(c)
    )

    text.classList.add('dark');
}

document.querySelector('button').onclick = run;