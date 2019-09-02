let add = document.querySelectorAll('button')[0];
function push() {
    let shoppingListInput = document.querySelectorAll('input');
    let shoppingListCartegory = document.createElement('shoppingListCartegory');
    shoppingListCartegory.appendChild(document.createTextNode(shoppingListInput.value));
    document.querySelectorAll('div').appendChild(shoppingListCartegory);
    shoppingListCartegory.appendChild(document.createTextNode('0,0'));
    document.querySelectorAll('div').appendChild(shoppingListCartegory);
    shoppingListInput.value = '';
}
add.addEventListener('click',push);
