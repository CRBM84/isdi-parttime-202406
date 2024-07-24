// needs work

/*

    -Method passes two parameters on string a searchString and an end position
    -"The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length."

    -Si el indice es null devolver un resultado falso 
    -Si el parametro de indice es igual a el segundo string + 1, el resultado es cierto
    -Usar un for loop para comparar los valores

*/
function endWith(string, newString, index = 0) {
    let result = false;
    let counter = 0;

    if (typeof index === 'null') {
        return result;
    }

    if (typeof index === 'number') {
        for (i = 0; i < newString.length; i++) {
            if (string[index + i] === newString[newString.length + 1 + i]) {
                counter++;
                if (counter === newString.length) {
                    result = true;
                }
            }
        }
        return result
    }
}


//tdd
const string = 'Cats are the best!';

const result1 = endWith(string, 'best!');
console.assert(result1 === string.endsWith('best!'), {
    result: result1,
    message: "Test 1 No pasado ",
});

const result2 = endWith(string, 'best', 17);
console.assert(result2 === string.endsWith('best', 17), {
    result: result2,
    message: "Test 2 No pasado ",
});

const result3 = startWith(string, 'best!', null);
console.assert(result3 === string.startsWith('best!', null), {
    result: result3,
    message: "Test 3 No pasado ",
});



// example code from documentation

/*
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false


const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

*/