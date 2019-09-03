let add = document.querySelectorAll("button")[0];
let shoppingListInput = document.querySelector("input");
function push(){
  let shoppingList = document.createElement("shoppingList");
  shoppingList.appendChild(document.createTextNode(shoppingListInput.value));
  document.querySelector("div").appendChild(shoppingList);
  shoppingListInput.value = "";
}
add.addEventListener('click', push)