document.querySelectorAll('*').forEach(el => el.style.color = 'black');
/* Je change la couleur du texte en noir pour qu'il soit visible */
fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"]

displayResult(null)
function getFruitNameFromIndex(index) {
  if (index >= 0 && index < fruits.length) {
    displayResult(fruits[index])
  } else if (index == -1) {
    displayResult(fruits[fruits.length - 1])
  }
}

