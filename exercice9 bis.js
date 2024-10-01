function splitOperation(operation) {
    let parts = operation.split(" ");
    return [parseInt(parts[0]), parts[1], parseInt(parts[2])];
}

function doOperation(operation) {
    let [firstNbr, operator, secondNbr] = splitOperation(operation);
    let result;
    switch (operator) {
        case '+':
            result = firstNbr + secondNbr;
            break;
        case '-':
            result = firstNbr - secondNbr;
            break;
        case '*':
            result = firstNbr * secondNbr;
            break;
        case '/':
            if (secondNbr == 0) {
                console.log("Can't divide by 0");
                return null;
            } else {
            result = firstNbr / secondNbr;
            break;
            }
        default:
            console.log("Please write a valid operation. :/");
            return null;
    }
    return result;
}

// console.log(doOperation("10 + 5"));
// console.log(doOperation("10 / 0"));
