function splitOperation(operation) {
    let parts = operation.split(" ");
    return [parseInt(parts[0]), parts[1], parseInt(parts[2])];
}
// console.log(splitOperation("5 + 3"));