document.querySelectorAll('*').forEach(el => el.style.color = 'black');
/* Je change la couleur du texte en noir pour qu'il soit visible */
fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"]

function getIndexFromName(fruit) {
  displayResult(null)
  for (var i = 0; i < fruits.length; i++) {
    if (fruit == fruits[i]) {
      displayResult(i)
    }
  }
}