let number = prompt("Введите число:");
number = parseFloat(number);

let power = prompt("Введите степень:");
power = parseInt(power);


if (isNaN(number) || number === 0) {
    alert("Пожалуйста, введите корректное число, отличное от нуля.");
} else {
 
    if (isNaN(power) || power === 0) {
        power = 2;
    }

    let result = 1;


    for (let i = 0; i < power; i++) {
        result *= number;
    }

    alert(result);
}
