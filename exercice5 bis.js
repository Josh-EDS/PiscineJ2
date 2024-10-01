function getBasketContent(nbFruits) {

    const fruits = ["strawberry","strawberry","strawberry", "apple-1","apple-1", "lime", "lime", "peach", "pear", "pear"];

  if (nbFruits > fruits.length) {
    console.log("Too many fruit(s) selected")
    fruits.splice(-fruits.length);
  } else if (nbFruits == 0) {
    console.log(nbFruits+" fruit(s) selected");
  } else {
    console.log(nbFruits+" fruit(s) selected");
    fruits.splice(-nbFruits);
  }
    showMyBasket(fruits)
    return fruits;
  }
  