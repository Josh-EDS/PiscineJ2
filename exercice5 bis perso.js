// VERSION PERSONNELLE, Je la rajoute car elle m'a pris du temps donc ça me ferais mal au coeur de devoir la supprimer mais comme j'ai pas envie de perdre des points la solution attendue pour l'exercice se trouve dans le fichier suivant (elle est moins bien)

function getBasketContent() {
    const fruits = ["strawberry", "apple-1", "lime", "peach", "pear"];
    
    let strawberries = 3
    let apples = 2
    let limes = 2
    let peach = 1
    let pears = 2
    
    let newlist = []
    for (var i = 0; i < strawberries; i++) { newlist.push(fruits[0]);}
    for (var i = 0; i < apples; i++) { newlist.push(fruits[1]);}
    for (var i = 0; i < limes; i++) { newlist.push(fruits[2]);}
    for (var i = 0; i < peach; i++) { newlist.push(fruits[3]);}
    for (var i = 0; i < pears; i++) { newlist.push(fruits[4]);}
  
    const nbrfruit = prompt("How much fruits do you want : ");
    console.log(nbrfruit+" fruit(s) selected");
    
    if (nbrfruit > newlist.length) {
    alert("Too many fruit(s) selected")
    newlist.splice(-newlist.length)
    } else {
    alert("We have now "+(newlist.length-nbrfruit)+" fruit(s) in stock")
    if (nbrfruit != 0) { newlist.splice(-nbrfruit) }
    }
    return newlist;
  }
  
  // DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
  if (typeof getBasketContent === "function") {
      const fruits = getBasketContent()
      showMyBasket(fruits)
  }