
// FROM SCRATCH SANS UTILISER DE VARIABLES EXTERNES PLUS COURT.
// VERSION PERSONNELLE, Je la rajoute car elle m'a pris du temps donc ça me ferais mal au coeur de devoir la supprimer mais comme j'ai pas envie de perdre des points la solution attendue pour l'exercice se trouve dans le fichier suivant (elle est moins bien)


function addition(a,b) { calculator(a,b,"add") }
function subtraction(a,b) { calculator(a,b,"sub") }

function calculator(a,b,opp) {
  if (opp == "add") {
    document.getElementById("out").innerHTML = a + " + " + b + " = " + (a+b)
  } else if (opp == "sub") {
    document.getElementById("out").innerHTML = a + " - " + b + " = " + (a-b)
  } else {
    return("Merci d'entrer une oppération correcte.")
  }
}

// addition(1,3)
// subtraction(1,3)
// calculator(1,3,"add")
// calculator(1,3,"sub")

