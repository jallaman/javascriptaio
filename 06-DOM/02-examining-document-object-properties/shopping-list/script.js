
// const listItems = document.querySelectorAll('.item')

// listItems.forEach( (item, index) =>
// {
//     if (index === 0 ){
//         item.innerHTML = `Oranges
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`
//     }
// }
// )



function createNewItem(item) {

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    li.className = 'item';

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';


    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

}

createNewItem("Eggs")
createNewItem("Cheese");
const listItems = document.querySelectorAll('li');

console.log(listItems)
console.log(listItems.length)