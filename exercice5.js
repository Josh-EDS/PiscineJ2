// 🥱🥱🥱

function getBasketContent() {
    const fruits = ["strawberry","strawberry","strawberry", "apple-1","apple-1", "lime", "lime", "peach", "pear", "pear"];
    
    console.log(fruits.length+" fruit(s) selected");
    return fruits;
  }
  
  // DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
  if (typeof getBasketContent === "function") {
      const fruits = getBasketContent()
      showMyBasket(fruits)
  }