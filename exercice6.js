document.querySelectorAll('*').forEach(el => el.style.color = 'black');
/* Je change la couleur du texte en noir pour qu'il soit visible */
fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"]

displayResult(null)
function getIndexFromName(fruit) {
  if (fruit == "Blackberries") {displayResult(0)}
  if (fruit == "Apple") {displayResult(1)}
  if (fruit == "Banana") {displayResult(2)}
  if (fruit == "Mango") {displayResult(3)}
  if (fruit == "Peaches") {displayResult(4)}
  if (fruit == "Kiwi") {displayResult(5)}
}
