function multiply(num1, num2) {
    return num1 * num2;
}
function sum(num1, num2) {
    return num1 + num2;
}
function isEven(num) {
    return num % 2 === 0;
}
function showResult(result) {
    if (isEven(result)) {
        console.log("The result is ".concat(result, " and it's even!"));
    }
    else {
        console.log("The result is ".concat(result, " and it's odd!"));
    }
}
(function () {
    var num1 = Number(prompt("First Number"));
    var num2 = Number(prompt("Second Number"));
    var result = sum(num1, num2);
    result += multiply(1, 2);
    showResult(result);
})();
