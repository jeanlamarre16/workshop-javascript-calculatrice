
// Calculatrice

let number1 = parseInt(prompt("Enter your first number"));
let operatorSymbol = prompt("Enter your operator");
let number2 = parseInt(prompt("Enter your second number"));

function calculator(firstValue, operator, secondValue) {
    let result;
    switch(operator) {
        case "+" :
            result = firstValue + secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "/":
            result = firstValue / secondValue;
            break;
        case "*" :
            result = firstValue * secondValue;
            break;
        case "%" :
            result = firstValue % secondValue;
            break;
        default :
            result = false;
    }
    return result;
}

let resultat = calculator(number1, operatorSymbol, number2);

if(resultat) {
    console.log(`Le resultat de l'opération est : ${resultat}`);
} else {
    console.error('ATTENTION : Saisie Invalide !');
}